export const contact = {
  email: "export@sigergoldenbean.com",
  whatsappNumber: "6281200000000",
  whatsappDisplay: "+62 812-0000-0000",
  location: "Indonesia / Lampung-based coffee sourcing"
};

export const inquiryMessage =
  "Hello Siger Golden Bean, I would like to request coffee samples / product catalog for export inquiry.";

export const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
  inquiryMessage
)}`;

export const mailtoUrl = `mailto:${contact.email}?subject=${encodeURIComponent(
  "Siger Golden Bean Export Inquiry"
)}&body=${encodeURIComponent(inquiryMessage)}`;
