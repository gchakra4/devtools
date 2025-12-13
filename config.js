// Centralized DevTools config. Edit these values for your deployment.
window.DEVTOOLS_CONFIG = window.DEVTOOLS_CONFIG || {
  SUPABASE_URL: 'https://YOUR_PROJECT_REF.supabase.co',
  SUPABASE_ANON_KEY: 'YOUR_ANON_KEY',
  AUTH_START_URL: 'https://devtools.yogique.life/tools/auth-callback/index.html?start=1',
  REQUEST_ACCESS_URL: 'https://yogique.life/request-access',
  DEVTOOLS_HOME_URL: 'https://devtools.yogique.life/'
};

// Optional: expose backwards-compatible globals (safe to override)
const cfg = window.DEVTOOLS_CONFIG;
window.SUPABASE_URL = window.SUPABASE_URL || cfg.SUPABASE_URL;
window.SUPABASE_ANON_KEY = window.SUPABASE_ANON_KEY || cfg.SUPABASE_ANON_KEY;
window.AUTH_START_URL = window.AUTH_START_URL || cfg.AUTH_START_URL;
window.REQUEST_ACCESS_URL = window.REQUEST_ACCESS_URL || cfg.REQUEST_ACCESS_URL;
window.DEVTOOLS_HOME_URL = window.DEVTOOLS_HOME_URL || cfg.DEVTOOLS_HOME_URL;
