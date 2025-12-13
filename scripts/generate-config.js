const fs = require('fs')
const path = require('path')

const cfg = {
    SUPABASE_URL: process.env.DEV_SUPABASE_URL || process.env.SUPABASE_URL || '',
    SUPABASE_ANON_KEY: process.env.DEV_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || '',
    AUTH_START_URL: process.env.DEV_AUTH_START_URL || process.env.AUTH_START_URL || 'https://devtools.yogique.life/tools/auth-callback/index.html?start=1',
    REQUEST_ACCESS_URL: process.env.DEV_REQUEST_ACCESS_URL || process.env.REQUEST_ACCESS_URL || 'https://yogique.life/request-access',
    DEVTOOLS_HOME_URL: process.env.DEV_DEVTOOLS_HOME_URL || process.env.DEVTOOLS_HOME_URL || 'https://devtools.yogique.life/'
}

const out = `window.DEVTOOLS_CONFIG = ${JSON.stringify(cfg, null, 2)};
window.SUPABASE_URL = window.SUPABASE_URL || window.DEVTOOLS_CONFIG.SUPABASE_URL;
window.SUPABASE_ANON_KEY = window.SUPABASE_ANON_KEY || window.DEVTOOLS_CONFIG.SUPABASE_ANON_KEY;
window.AUTH_START_URL = window.AUTH_START_URL || window.DEVTOOLS_CONFIG.AUTH_START_URL;
window.REQUEST_ACCESS_URL = window.REQUEST_ACCESS_URL || window.DEVTOOLS_CONFIG.REQUEST_ACCESS_URL;
window.DEVTOOLS_HOME_URL = window.DEVTOOLS_HOME_URL || window.DEVTOOLS_CONFIG.DEVTOOLS_HOME_URL;
`

const outPath = path.join(__dirname, '..', 'config.js')
fs.writeFileSync(outPath, out, { encoding: 'utf8' })
// Warn if required values are missing so Netlify build logs show the problem
if (!cfg.SUPABASE_URL || !cfg.SUPABASE_ANON_KEY) {
    console.warn('generate-config: WARNING - missing SUPABASE_URL or SUPABASE_ANON_KEY.\n', cfg)
}
console.log('Generated', outPath)
