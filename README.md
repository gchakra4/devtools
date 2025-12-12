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

## 📦 Current Tools

### Supabase Backup & Restore
Complete backup and migration solution for Supabase projects.
- **Location:** `tools/supabase-backup/`
- **Guide:** [Complete Guide](tools/supabase-backup/complete_guide/index.html)
- **GitHub:** [backup-tools branch](https://github.com/gchakra4/yogique/tree/backup-tools)

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
