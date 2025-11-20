---
description: Deploy the portfolio to Netlify
---

# Deploy to Netlify

This workflow guides you through deploying your React portfolio to Netlify.

## Prerequisites

- A [Netlify account](https://app.netlify.com/signup) (free tier works great)
- Your project pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Option 1: Deploy via Netlify UI (Recommended for First Time)

### 1. Build the project locally to verify

```bash
npm run build
```

This creates a `dist` folder with your production build.

### 2. Create a Netlify configuration file

Create a `netlify.toml` file in your project root with the following content:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

The redirects section ensures client-side routing works correctly with React Router.

### 3. Push your code to Git

```bash
git add netlify.toml
git commit -m "Add Netlify configuration"
git push
```

### 4. Deploy on Netlify

1. Go to [Netlify](https://app.netlify.com/)
2. Click "Add new site" → "Import an existing project"
3. Choose your Git provider and authorize Netlify
4. Select your repository
5. Netlify should auto-detect the settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click "Deploy site"

### 5. Configure custom domain (Optional)

1. In your site dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Follow the instructions to configure your DNS

## Option 2: Deploy via Netlify CLI

### 1. Install Netlify CLI

```bash
npm install -g netlify-cli
```

### 2. Login to Netlify

```bash
netlify login
```

### 3. Initialize Netlify in your project

```bash
netlify init
```

Follow the prompts to connect your site.

### 4. Deploy

For a draft deploy:
```bash
netlify deploy
```

For production deploy:
// turbo
```bash
netlify deploy --prod
```

## Option 3: Drag and Drop Deploy

### 1. Build your project

```bash
npm run build
```

### 2. Deploy via drag and drop

1. Go to [Netlify Drop](https://app.netlify.com/drop)
2. Drag and drop your `dist` folder
3. Your site will be deployed instantly!

**Note**: This method doesn't support continuous deployment from Git.

## Environment Variables

If your app uses environment variables:

1. In Netlify dashboard, go to "Site settings" → "Environment variables"
2. Add your variables (e.g., `VITE_API_URL`, `VITE_SUPABASE_URL`, etc.)
3. Redeploy your site

## Troubleshooting

### Build fails on Netlify

- Check the build logs in Netlify dashboard
- Ensure all dependencies are in `dependencies` (not `devDependencies`) if needed for build
- Verify Node version compatibility

### 404 errors on page refresh

- Ensure the `netlify.toml` redirects configuration is present
- This is required for client-side routing with React Router

### Shader effects not working

- Check browser console for errors
- Ensure all image assets are in the `public` folder
- Verify WebGL support in target browsers

## Post-Deployment

After successful deployment:

1. Test all routes and features
2. Check responsive design on different devices
3. Verify shader effects are working
4. Test contact form functionality
5. Check PDF viewer on Resume page

Your site will be available at `https://[site-name].netlify.app` and will auto-deploy on every push to your main branch!
