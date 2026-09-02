# The Alae

A lightweight static tennis journal for `thealae.com`.

## Local Preview

```bash
npm run preview
```

Open `http://127.0.0.1:8080`.

## GitHub + Cloudflare Pages

Recommended deployment path:

1. Push this folder to a GitHub repository named `thealae`.
2. In Cloudflare, go to **Workers & Pages**.
3. Select **Create application**.
4. Choose **Pages**.
5. Choose **Connect to Git** and select the GitHub repository.
6. Use these build settings:

```text
Framework preset: None
Build command: leave blank
Build output directory: public
Root directory: /
Production branch: main
```

After the first deploy, open the Pages project and add custom domains:

```text
thealae.com
www.thealae.com
```

If Cloudflare reports a DNS conflict, delete the old AWS Amplify or CloudFront DNS records first.
