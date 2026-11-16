# Westernsouth Investment & Co.

Institutional bilingual corporate website built with Next.js App Router, TypeScript and Tailwind CSS.

## Run locally

1. Install Node.js 20.9 or later.
2. Install dependencies with `npm install`.
3. Copy `.env.example` to `.env.local` and add the email settings if you want to test contact delivery.
4. Start the development server with `npm run dev`, then open `http://localhost:3000`.

Without email credentials, the contact form intentionally reports that delivery is not configured and provides the corporate email address as an alternative.

## Checks and production build

```bash
npm run lint
npm run typecheck
npm run build
```

## Deploy to GitHub and Vercel

1. Push this repository to GitHub.
2. In Vercel, choose **Add New → Project**, import the repository, and keep the detected Next.js build settings.
3. Add `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` in the Vercel project's environment variables. `CONTACT_FROM_EMAIL` must be an address authorized by the sending provider. The recipient is fixed to `contact@westernsouthinvestco.com`.
4. Deploy and verify the contact form using a real address.
5. Add `westernsouthinvestco.com` and `www.westernsouthinvestco.com` in Vercel's domain settings. The apex domain is canonical; the app redirects `www` to the apex. Apply only the DNS records Vercel displays for the project, then wait for domain verification and HTTPS provisioning.
6. Confirm the production domain, `/es` and `/en`, sitemap, robots file, language alternates, and a real form submission.

Do not commit `.env.local` or provider credentials. No DNS records are guessed or included in this repository.

## Approved brand assets

The header and footer use the supplied official transparent logo at `public/brand/01_Logo_Oficial_Transparente.png`. It is rendered with Next.js Image, preserving its original aspect ratio and colors. Do not replace it with an approximation.

The other supplied logo variants are kept in `public/brand/`. Use the approved W icon for a favicon only when configuring the site icon; do not generate a substitute.

The current industry and architectural photography is loaded from Unsplash's image CDN, which provides images under its commercial-use license. Replace an image only with one whose publication rights are confirmed.

## Legal and publication checklist

- Privacy Policy, Terms of Use, and Legal Disclaimer are publication drafts and must be reviewed by qualified legal counsel in Peru and relevant target markets.
- Confirm the current AUM statement, investment descriptions, and all public contact details before publishing.
- Configure and verify the sending domain and sender address with Resend. The contact route never reports success when email delivery is unavailable or rejected.
- Confirm the final legal basis, privacy notice and retention practices for form submissions before enabling production collection.
- No regulatory status, license, performance, portfolio company, completed transaction or investment offer is claimed by this site.

## Routes

Spanish is the default language at `/es`. English is available at `/en`. The root route redirects to `/es`.
