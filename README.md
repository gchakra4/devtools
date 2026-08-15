# DevTools Hub 🛠️

A centralized dashboard for hosting and accessing various development tools and utilities.

## 📁 Folder Structure

```
devtools/
├── index.html              # Main dashboard page
├── css/
│   └── style.css          # Dashboard styling
├── js/
│   └── main.js            # Dashboard functionality
├── assets/
│   └── icons/             # Tool icons and images
└── tools/
    └── supabase-backup/   # Supabase backup & restore tool
        ├── complete_guide/
        ├── backup_supabase.sh
        ├── restore_supabase.sh
        └── ...
```

## 🚀 Getting Started

1. **View Dashboard Locally:**
   ```bash
   cd "D:\New folder\devtools"
   # Open index.html in your browser
   start index.html
   ```

2. **Add New Tools:**
   - Create a new folder in `tools/`
   - Add your tool files
   - Update `index.html` to add a new tool card

3. **Deploy to Netlify:**
   - Connect this repository to Netlify
   - Set build directory to `/` (root)
   - Add custom domain: devtools.yogique.life

## Netlify deployment and environment variables

To make the DevTools site pick up the correct Supabase project and redirect URLs at deploy time, the site generates `config.js` from environment variables during the build. Add the following environment variables to your Netlify site (use the `dev_` prefixed names so the deployed site always points to the dev branch values):

- `DEV_SUPABASE_URL` — e.g. `https://iddvvefpwgwmgpyelzcv.supabase.co`
- `DEV_SUPABASE_ANON_KEY` — Supabase anon public key (safe to expose client-side)
- `DEV_AUTH_START_URL` — optional; defaults to `https://devtools.yogique.life/tools/auth-callback/index.html?start=1`
- `DEV_REQUEST_ACCESS_URL` — optional; defaults to `https://yogique.life/request-access`
- `DEV_DEVTOOLS_HOME_URL` — optional; defaults to `https://devtools.yogique.life/`

Netlify build step will run `npm run build` which executes `scripts/generate-config.js` to write `config.js` into the published folder.

Quick deploy steps on Netlify:

1. In your Netlify site settings → Build & deploy → Environment, add the variables above with values for your dev Supabase project.
2. Make sure your `build` command in Netlify is set to `npm run build` and the publish directory points to this repo root (or the folder containing `index.html`).
3. Trigger a deploy. On build, `config.js` will be generated with the `DEV_*` values and included in the site assets.

Security notes:

- Do NOT put Supabase service role keys into `config.js` or Netlify site envs that are exposed to client-side code. Service role keys are for server-side use only (Supabase Edge Functions or Netlify Functions) and should be stored in Supabase secrets or Netlify Function environment variables.
- The `DEV_SUPABASE_ANON_KEY` is safe for client-side usage and required for the magic-link auth flow.

## 📦 Current Tools

### Sampurnayogam AI Gateway
Administrator & System Architecture manual for the Sampurnayogam AI Gateway System. Covers role routing, prompt modes, model adapters, database schema, NAS & Supabase deployments, and n8n workflows.
- **Location:** `tools/Sampurnayogam-ai-gateway/`
- **Guide:** [AI Gateway Administrator Guide](tools/Sampurnayogam-ai-gateway/AI%20Gateway%20Administrator%20Guide.html)
- **GitHub:** [Sampurnayogam AI Gateway](https://github.com/gchakra4/devtools/tree/main/tools/Sampurnayogam-ai-gateway)

### Supabase Backup & Restore
Complete backup and migration solution for Supabase projects.
- **Location:** `tools/supabase-backup/`
- **Guide:** [Complete Guide](tools/supabase-backup/complete_guide/index.html)
- **GitHub:** [Supabase Backup](https://github.com/gchakra4/devtools/tree/main/tools/supabase-backup)

### Notification System
Admin guide for the notification system covering email (Resend), WhatsApp (Meta Business API), queue processing, and monitoring.
- **Location:** `tools/notification-system-guide/`
- **Guide:** [Overview](tools/notification-system-guide/index.html)
- **Contents:** `architecture.html`, `components.html`, `configuration.html`, `queue-management.html`, `troubleshooting.html`

### Git Workflow Guide
Complete guide for managing multiple repositories, branches, and deployments.
- **Location:** `tools/git-workflow-guide/`
- **Guide:** [Git Workflow Guide](tools/git-workflow-guide/index.html)

## 🎨 Customization

### Adding a New Tool Card

Edit `index.html` and add:

```html
<div class="tool-card">
    <div class="tool-icon">🔧</div>
    <h3>Your Tool Name</h3>
    <p>Tool description here...</p>
    <div class="tool-meta">
        <span class="badge">Category</span>
    </div>
    <div class="tool-actions">
        <a href="tools/your-tool/index.html" class="btn btn-primary">📖 Open Guide</a>
        <a href="https://github.com/..." class="btn btn-secondary">🔗 GitHub</a>
    </div>
</div>
```

## 📝 Git Workflow

```bash
# Make changes
git add .
git commit -m "Added new tool: XYZ"
git push origin backup-tools

# Switch to main project
cd "D:\New folder\tryfix - Copy"
```

## 🌐 Hosting

**Recommended:** Netlify or Vercel
- Free hosting
- Auto-deploy from GitHub
- Custom domain support (devtools.yogique.life)
- HTTPS included

## 📄 License

MIT License - Feel free to use and modify!

---

Built with ❤️ for developers | [Yogique](https://yogique.life)
