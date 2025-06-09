# EmailJS Setup Instructions for OGUZHAN LLC

To enable the contact form to send emails to info@oguzhanllc.com, you need to set up EmailJS. Follow these steps:

## 1. Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Set up Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions to connect your email account
5. Note down the **Service ID** (e.g., 'service_oguzhan_llc')

## 3. Create Email Templates

### Template 1: Quote Request

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Set Template ID as: `template_quote_request`
4. Use this template content:

```
Subject: New Quote Request from {{from_name}}

Dear OGUZHAN LLC Team,

You have received a new quote request from your website.

Customer Details:
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{phone}}
- Company: {{company_name}}

Shipping Details:
- Pickup Location: {{pickup_location}}
- Delivery Location: {{delivery_location}}
- Weight: {{weight}} lbs
- Pickup Date: {{pickup_date}}

Cargo Description:
{{cargo_description}}

Please respond to this customer within 24 hours.

Best regards,
OGUZHAN LLC Website
```

### Template 2: Contact Form (Optional)

1. Create another template with ID: `template_contact_form`
2. Use similar structure for general contact inquiries

## 4. Get Your Public Key

1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (starts with user\_...)
3. Copy this key

## 5. Update the Code

1. Open `src/lib/email.ts`
2. Replace the following values with your actual EmailJS credentials:

```typescript
const EMAILJS_SERVICE_ID = "your_service_id_here";
const EMAILJS_TEMPLATE_ID = "template_quote_request";
const EMAILJS_PUBLIC_KEY = "your_public_key_here";
```

## 6. Test the Integration

1. Start your development server: `npm run dev`
2. Navigate to the contact form on your website
3. Fill out and submit a test quote request
4. Check info@oguzhanllc.com for the test email

## 7. Production Setup

When deploying to production, make sure to:

1. Set up environment variables for sensitive data
2. Configure proper CORS settings in EmailJS
3. Monitor your EmailJS usage and upgrade plan if needed

## Free Tier Limits

EmailJS free tier includes:

- 200 emails per month
- Basic email templates
- Standard support

For higher volume, consider upgrading to a paid plan.

## Troubleshooting

- **Emails not sending**: Check your browser console for errors
- **Template not found**: Verify template IDs match exactly
- **Service issues**: Ensure your email service is properly connected
- **CORS errors**: Check your domain is allowed in EmailJS settings

For support, contact EmailJS support or check their documentation.
