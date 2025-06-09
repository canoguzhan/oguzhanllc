import emailjs from "@emailjs/browser";

// EmailJS configuration
const EMAILJS_SERVICE_ID = "service_zkno9hf";
const EMAILJS_TEMPLATE_ID = "template_96ne05o";
const EMAILJS_PUBLIC_KEY = "rQ0KIv6kNnnrhlKJ7";

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface QuoteRequestData {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  pickupLocation: string;
  deliveryLocation: string;
  weight: string;
  pickupDate: string;
  cargoDescription: string;
  companyName?: string;
}

export const sendQuoteRequest = async (
  data: QuoteRequestData,
): Promise<boolean> => {
  try {
    const templateParams = {
      to_email: "info@oguzhanllc.com",
      from_name: data.customerName,
      from_email: data.customerEmail,
      phone: data.customerPhone,
      company_name: data.companyName || "N/A",
      pickup_location: data.pickupLocation,
      delivery_location: data.deliveryLocation,
      weight: data.weight,
      pickup_date: data.pickupDate,
      cargo_description: data.cargoDescription,
      reply_to: data.customerEmail,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
    );

    console.log("Email sent successfully:", response);
    return response.status === 200;
  } catch (error) {
    console.error("Failed to send email:", error);
    return false;
  }
};

// Alternative: Simple contact form email
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export const sendContactEmail = async (
  data: ContactFormData,
): Promise<boolean> => {
  try {
    const templateParams = {
      to_email: "info@oguzhanllc.com",
      from_name: data.name,
      from_email: data.email,
      phone: data.phone || "Not provided",
      subject: data.subject,
      message: data.message,
      reply_to: data.email,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID, // Using the same template for now
      templateParams,
    );

    return response.status === 200;
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return false;
  }
};
