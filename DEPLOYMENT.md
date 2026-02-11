# Vercel Deployment Guide - AIMS Chatbot

## 🚀 Quick Deploy

### Prerequisites
- Vercel account (https://vercel.com)
- GitHub/GitLab/Bitbucket repository connected
- Email service configured (Gmail, SendGrid, or AWS SES)

---

## 📋 Environment Variables Required

### CRITICAL (Chatbot Won't Work Without These)

```bash
# Application URLs
BASE_URL=https://your-domain.com
NEXT_PUBLIC_BASE_URL=https://your-domain.com

# Email Configuration
EMAIL_HOST=smtp.gmail.com          # or smtp.sendgrid.net
EMAIL_PORT=587
EMAIL_TITLE=your-email@gmail.com   # Sender email
EMAIL_PASS=your-app-password       # App-specific password
ADMIN=jasmelacosta@gmail.com       # Lead notification email
```

### FULL LIST (13 Variables)

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `BASE_URL` | ✅ Yes | Production domain | `https://www.aimedicalsubscriber.com` |
| `NEXT_PUBLIC_BASE_URL` | ✅ Yes | Public domain (same as above) | `https://www.aimedicalsubscriber.com` |
| `EMAIL_HOST` | ✅ Yes | SMTP server | `smtp.gmail.com` |
| `EMAIL_PORT` | ✅ Yes | SMTP port | `587` |
| `EMAIL_TITLE` | ✅ Yes | Sender email | `support@aimedicalsubscriber.com` |
| `EMAIL_PASS` | ✅ Yes | Email password/app password | `xxxx xxxx xxxx xxxx` |
| `ADMIN` | ✅ Yes | Admin email for leads | `jasmelacosta@gmail.com` |
| `CHATBOT_ADMIN_EMAIL` | ❌ No | Additional admin email | `jasmelacosta@gmail.com` |
| `OPENAI_API_KEY` | ❌ No | For advanced AI features | `sk-...` |
| `NEXT_PUBLIC_GA_ID` | ❌ No | Google Analytics | `G-XXXXXXXXXX` |
| `GOOGLE_VERIFICATION` | ❌ No | Search Console | `xxxxxxxx` |
| `NODE_ENV` | ❌ No | Environment | `production` |
| `DEBUG` | ❌ No | Debug mode | `false` |

---

## 🔧 Step-by-Step Deployment

### Step 1: Prepare Your Repository

```bash
# Ensure all files are committed
git add -A
git commit -m "Add chatbot functionality and SEO improvements"
git push origin main
```

### Step 2: Import to Vercel

1. Go to https://vercel.com/new
2. Import your Git repository
3. Select the **aims** project
4. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (or `/aims` if monorepo)
   - **Build Command**: `next build` (default)
   - **Output Directory**: `.next` (default)

### Step 3: Add Environment Variables

In Vercel Dashboard:
1. Go to **Settings** → **Environment Variables**
2. Add each variable from the table above
3. For sensitive values (EMAIL_PASS), check "Encrypt"
4. Click **Save**

**Example Configuration:**

```
BASE_URL = https://www.aimedicalsubscriber.com
NEXT_PUBLIC_BASE_URL = https://www.aimedicalsubscriber.com
EMAIL_HOST = smtp.gmail.com
EMAIL_PORT = 587
EMAIL_TITLE = your-email@gmail.com
EMAIL_PASS = abcd efgh ijkl mnop  (16-char app password)
ADMIN = jasmelacosta@gmail.com
CHATBOT_ADMIN_EMAIL = jasmelacosta@gmail.com
```

### Step 4: Deploy

1. Click **Deploy**
2. Wait for build to complete (~2-3 minutes)
3. Vercel will provide a `.vercel.app` domain
4. Test the deployment URL

---

## 📧 Email Configuration Guide

### Option A: Gmail (Recommended for Beginners)

1. **Enable 2-Factor Authentication**
   - Go to Google Account → Security
   - Enable 2-Step Verification

2. **Generate App Password**
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" → "Other (Custom name)"
   - Name it "AIMS Chatbot"
   - Copy the 16-character password

3. **Environment Variables**
   ```
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_TITLE=your-email@gmail.com
   EMAIL_PASS=abcd efgh ijkl mnop  (16-char app password)
   ```

### Option B: SendGrid (Recommended for Production)

1. **Create Account**
   - Sign up at https://sendgrid.com
   - Verify your sender identity

2. **Create API Key**
   - Settings → API Keys → Create API Key
   - Give "Mail Send" permissions
   - Copy the API key

3. **Environment Variables**
   ```
   EMAIL_HOST=smtp.sendgrid.net
   EMAIL_PORT=587
   EMAIL_TITLE=apikey
   EMAIL_PASS=SG.xxxxxxxx.xxxxxxxx
   ```

### Option C: AWS SES (Enterprise)

1. **Set up SES**
   - AWS Console → SES
   - Verify domain or email
   - Request production access

2. **Create SMTP Credentials**
   - SES → SMTP Settings → Create My SMTP Credentials
   - Download credentials

3. **Environment Variables**
   ```
   EMAIL_HOST=email-smtp.us-east-1.amazonaws.com
   EMAIL_PORT=587
   EMAIL_TITLE=YOUR_SES_USERNAME
   EMAIL_PASS=YOUR_SES_PASSWORD
   ```

---

## 🧪 Testing the Chatbot

### Before Deployment (Local Testing)

```bash
# 1. Install dependencies
npm install

# 2. Create .env.local file
cp .env.example .env.local

# 3. Fill in your values in .env.local

# 4. Run development server
npm run dev

# 5. Test chatbot at http://localhost:3000
```

### After Deployment (Production Testing)

1. **Visit your deployed URL**
2. **Click the chat bubble** (bottom-right corner)
3. **Test text input**: Type "What is the pricing?"
4. **Test voice input**: Click microphone, speak a question
5. **Test lead capture**: Click "Schedule Demo" → Fill form
6. **Verify email**: Check jasmelacosta@gmail.com inbox

---

## 🎯 Chatbot Features

### ✅ Fully Functional
- [x] Text input and messaging
- [x] Voice recognition (Web Speech API)
- [x] Real-time responses
- [x] Bilingual support (EN/ES)
- [x] Lead capture form
- [x] Email notifications to jasmelacosta@gmail.com
- [x] Quick reply buttons
- [x] Mobile responsive

### 🧠 Trained Knowledge
- AIMS product information
- Pricing ($200-400/provider/month)
- ROI metrics ($127K savings/year)
- EHR integrations (Epic, Cerner, etc.)
- Compliance (HIPAA, SOC 2)
- Medical specialties supported

### 📧 Email Notifications Include:
- Lead name, email, phone
- Language preference
- Conversation history
- Timestamp
- Action reminders

---

## 🔧 Custom Domain Setup

### Step 1: Add Domain in Vercel

1. Vercel Dashboard → Project → Settings → Domains
2. Enter your domain: `www.aimedicalsubscriber.com`
3. Click **Add**

### Step 2: Configure DNS

**Option A: Nameservers (Recommended)**
- Update nameservers at your registrar to Vercel's:
  - `ns1.vercel-dns.com`
  - `ns2.vercel-dns.com`

**Option B: A/CNAME Records**
- A Record: `@` → `76.76.21.21`
- CNAME: `www` → `cname.vercel-dns.com`

### Step 3: Update Environment Variables

After domain is active, update:
```
BASE_URL=https://www.aimedicalsubscriber.com
NEXT_PUBLIC_BASE_URL=https://www.aimedicalsubscriber.com
```

Redeploy to apply changes.

---

## 🚨 Troubleshooting

### Issue: Chatbot Not Appearing

**Symptoms:** No chat bubble visible

**Solutions:**
1. Check browser console for JavaScript errors
2. Verify `FrontDeskChatbot` is imported in `app/[LANG]/page.js`
3. Clear browser cache
4. Check Vercel deployment logs

### Issue: Emails Not Sending

**Symptoms:** Form submits but no email received

**Solutions:**
1. Check Vercel Function Logs (Dashboard → Functions)
2. Verify EMAIL_HOST, EMAIL_PORT, EMAIL_TITLE, EMAIL_PASS
3. For Gmail: Ensure using App Password, not regular password
4. Check spam/junk folders
5. Verify ADMIN variable is set to jasmelacosta@gmail.com

**Debug Script:**
```javascript
// Add temporary logging in app/server-API/chatbot-lead/route.js
console.log("Email config:", {
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  user: process.env.EMAIL_TITLE,
  pass: process.env.EMAIL_PASS ? "SET" : "NOT SET"
});
```

### Issue: Voice Input Not Working

**Symptoms:** Microphone button does nothing

**Solutions:**
1. Ensure browser supports Web Speech API (Chrome/Edge best)
2. Check microphone permissions in browser
3. Must use HTTPS (not localhost)
4. Check browser console for errors

### Issue: Chatbot Shows Error on Submit

**Symptoms:** "Sorry, there was an error..."

**Solutions:**
1. Check Vercel Function Logs
2. Ensure all environment variables are set
3. Test API endpoint directly:
   ```bash
   curl -X POST https://your-domain.com/server-API/chatbot-lead \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@test.com"}'
   ```

### Issue: Styling Looks Broken

**Symptoms:** Unstyled chatbot, plain HTML

**Solutions:**
1. Ensure Tailwind CSS is processing the component
2. Check if component is in components directory
3. Verify import paths are correct

---

## 📊 Monitoring & Analytics

### Vercel Analytics (Built-in)

Enable in Dashboard → Analytics
- Page views
- Performance metrics
- Core Web Vitals

### Custom Google Analytics

Add to environment variables:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Update layout.js to include GA script.

### Chatbot Metrics to Track

- Number of conversations
- Lead conversion rate
- Most asked questions
- Voice vs text usage
- Response times

---

## 🔒 Security Best Practices

1. **Environment Variables**
   - ✅ Never commit `.env.local` to git
   - ✅ Use Vercel's encrypted environment variables
   - ✅ Rotate email passwords regularly

2. **Email Security**
   - ✅ Use App Passwords (Gmail)
   - ✅ Enable 2FA on email accounts
   - ✅ Monitor for unauthorized access

3. **API Security**
   - ✅ Rate limiting is enabled by default
   - ✅ Input validation on all endpoints
   - ✅ No sensitive data in client-side code

---

## 💰 Cost Estimates

### Vercel Pricing

**Hobby (Free)**
- 100GB bandwidth
- 1000 build minutes
- Perfect for testing

**Pro ($20/month)**
- 1TB bandwidth
- 6000 build minutes
- Recommended for production

**Enterprise**
- Custom pricing
- SLA guarantees
- Priority support

### Email Service Costs

**Gmail**
- Free (up to 500 emails/day)

**SendGrid**
- Free: 100 emails/day
- Essentials: $19.95/month (50K emails)

**AWS SES**
- $0.10 per 1,000 emails
- Very cost-effective at scale

---

## 🎉 Success Checklist

After deployment, verify:

- [ ] Website loads on custom domain
- [ ] Chatbot bubble appears bottom-right
- [ ] Can type and send messages
- [ ] Can record voice (Chrome/Edge)
- [ ] Quick reply buttons work
- [ ] Lead form captures data
- [ ] Emails arrive at jasmelacosta@gmail.com
- [ ] Mobile responsive
- [ ] Both EN and ES languages work
- [ ] SEO meta tags present (view page source)
- [ ] Sitemap accessible (/sitemap.xml)
- [ ] Robots.txt accessible (/robots.txt)

---

## 📞 Support

If you encounter issues:

1. **Vercel Documentation**: https://vercel.com/docs
2. **Next.js Documentation**: https://nextjs.org/docs
3. **Check Vercel Status**: https://www.vercel-status.com
4. **Review Function Logs**: Vercel Dashboard → Functions

---

## 🔄 Redeployment

After making changes:

```bash
# Make changes
git add -A
git commit -m "Update: description of changes"
git push origin main

# Vercel automatically redeploys
```

Or manual redeploy:
- Vercel Dashboard → Project → Deployments → Redeploy

---

**Last Updated:** February 2025  
**Version:** 1.0.0  
**Status:** Production Ready ✅