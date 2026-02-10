# Formspree Setup Instructions

The contact form is configured to send emails to **g.benito@brucken.com.br** using Formspree.

## Setup Steps

1. **Create a Formspree Account**
   - Go to [formspree.io](https://formspree.io/)
   - Sign up for a free account (allows 50 submissions/month)

2. **Create a New Form**
   - Click "New Form" in your Formspree dashboard
   - Set the email to: `g.benito@brucken.com.br`
   - Copy the form endpoint URL (it will look like: `https://formspree.io/f/YOUR_FORM_ID`)

3. **Update index.html**
   - Open `index.html`
   - Find line 162: `<form class="contact-form" id="contactForm" action="https://formspree.io/f/xwpkglnk" method="POST">`
   - Replace `xwpkglnk` with your actual form ID from step 2

4. **Test the Form**
   - Open your website
   - Fill out the contact form
   - Check that the email arrives at g.benito@brucken.com.br

## Current Status

⚠️ **Action Required**: The form currently uses a placeholder ID (`xwpkglnk`). You need to replace it with your actual Formspree form ID for the contact form to work.

## Alternative: No Formspree Account Needed

If you prefer not to use Formspree, you can update the form to use a `mailto:` link:

```html
<form class="contact-form" id="contactForm" action="mailto:g.benito@brucken.com.br" method="POST" enctype="text/plain">
```

However, this approach:
- Opens the user's email client (not ideal for user experience)
- Doesn't work on all devices/browsers
- **Formspree is recommended for better user experience**

## Formspree Features

With the free plan, you get:
- 50 form submissions per month
- Email notifications
- Spam filtering
- No coding required

For higher volume, consider upgrading to a paid plan.
