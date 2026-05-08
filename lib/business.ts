export const BUSINESS = {
  name: "TKProGarage",
  phone: "508-506-1887",
  phoneTel: "+15085061887",
  street: "482 Southbridge St, P.O. 341",
  hoursLine: "Monday – Saturday: 9 AM – 5 PM",
  hoursClosed: "Sunday: Closed",
  certs: "Mobile Auto Repair • Above ASE Certified Standards",
  mapsQuery: "482 Southbridge St, Auburn, MA",
} as const;

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  BUSINESS.mapsQuery,
)}`;

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  BUSINESS.mapsQuery,
)}&output=embed`;
