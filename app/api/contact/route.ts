import { NextResponse } from "next/server";
import { BUSINESS } from "@/lib/business";

const RESEND_EMAIL_ENDPOINT = "https://api.resend.com/emails";

type ContactPayload = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  vehicle?: unknown;
  message?: unknown;
  company?: unknown;
};

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { message: "Please complete the form before sending." },
      { status: 400 },
    );
  }

  if (clean(payload.company, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(payload.name, 120);
  const phone = clean(payload.phone, 80);
  const email = clean(payload.email, 160);
  const vehicle = clean(payload.vehicle, 180);
  const message = clean(payload.message, 2000);

  if (!name || !phone || !vehicle || !message) {
    return NextResponse.json(
      { message: "Please add your name, phone, vehicle, and message." },
      { status: 400 },
    );
  }

  if (email && !isEmail(email)) {
    return NextResponse.json(
      { message: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const config = getEmailConfig();
  if (!config) {
    return NextResponse.json(
      {
        message:
          "The contact form is not configured yet. Please call the shop instead.",
      },
      { status: 503 },
    );
  }

  const subject = `New ${BUSINESS.name} service request from ${name}`;
  const text = [
    subject,
    "",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email || "Not provided"}`,
    `Vehicle: ${vehicle}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const response = await fetch(RESEND_EMAIL_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.apiKey}`,
      "Content-Type": "application/json",
      "Idempotency-Key": crypto.randomUUID(),
    },
    body: JSON.stringify({
      from: config.from,
      to: [config.to],
      subject,
      text,
      html: renderEmail({ name, phone, email, vehicle, message }),
      ...(email ? { reply_to: email } : {}),
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    console.error("Contact email delivery failed", {
      status: response.status,
      detail,
    });
    return NextResponse.json(
      {
        message:
          "We could not send the request. Please call the shop instead.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getEmailConfig() {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = process.env.CONTACT_TO_EMAIL?.trim();
  const from = process.env.CONTACT_FROM_EMAIL?.trim();

  if (!apiKey || !to || !from) {
    console.error(
      "Missing contact email configuration: RESEND_API_KEY, CONTACT_TO_EMAIL, and CONTACT_FROM_EMAIL are required.",
    );
    return null;
  }

  return { apiKey, to, from };
}

function renderEmail({
  name,
  phone,
  email,
  vehicle,
  message,
}: {
  name: string;
  phone: string;
  email: string;
  vehicle: string;
  message: string;
}) {
  const rows = [
    ["Name", name],
    ["Phone", phone],
    ["Email", email || "Not provided"],
    ["Vehicle", vehicle],
  ];

  return `
    <div style="font-family: Arial, sans-serif; color: #0A1320; line-height: 1.5;">
      <h1 style="font-size: 22px; margin: 0 0 16px;">New ${escapeHtml(
        BUSINESS.name,
      )} service request</h1>
      <table style="border-collapse: collapse; width: 100%; max-width: 560px;">
        <tbody>
          ${rows
            .map(
              ([label, value]) => `
                <tr>
                  <th style="border: 1px solid #E5EAF1; padding: 10px; text-align: left; width: 130px; background: #F8FAFC;">${escapeHtml(
                    label,
                  )}</th>
                  <td style="border: 1px solid #E5EAF1; padding: 10px;">${escapeHtml(
                    value,
                  )}</td>
                </tr>
              `,
            )
            .join("")}
        </tbody>
      </table>
      <h2 style="font-size: 16px; margin: 20px 0 8px;">Message</h2>
      <p style="white-space: pre-wrap; margin: 0;">${escapeHtml(message)}</p>
    </div>
  `;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
