# EmailJS Setup Guide for Contact Form

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Connect Your Gmail Account
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Select "Gmail"
4. Click "Connect Account" and authorize EmailJS to access your Gmail
5. Your service will be created with a Service ID (save this)

## Step 3: Create Email Template
1. Go to "Email Templates" in EmailJS dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Submission from {{from_name}}

**Content:**
```
Hello Mayank,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
Reply directly to: {{reply_to}}
```

4. Save the template and note the Template ID

## Step 4: Get Your Public Key
1. Go to "Account" in EmailJS dashboard
2. Find your "Public Key" (starts with "user_" or similar)
3. Copy this key

## Step 5: Update Your Code
Open `script.js` and replace these placeholders:

```javascript
// Line ~192: Replace with your actual public key
emailjs.init("YOUR_PUBLIC_KEY");

// Line ~225: Replace with your service ID
const serviceID = 'YOUR_SERVICE_ID';

// Line ~226: Replace with your template ID  
const templateID = 'YOUR_TEMPLATE_ID';
```

## Step 6: Test the Contact Form
1. Open your website
2. Fill out the contact form
3. Submit the form
4. Check your Gmail inbox for the message

## Troubleshooting
- Make sure all IDs are correct
- Check browser console for any errors
- Verify EmailJS service is active
- Check spam folder if emails don't arrive

## Free Plan Limits
- 200 emails per month
- EmailJS branding in emails
- Upgrade to paid plan for more features

## Security Note
The public key is safe to use in client-side code as it only allows sending emails, not reading them.
