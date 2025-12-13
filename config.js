// Centralized DevTools config. Edit these values for your deployment.
window.DEVTOOLS_CONFIG = window.DEVTOOLS_CONFIG || {
    SUPABASE_URL: 'https://iddvvefpwgwmgpyelzcv.supabase.co',
    SUPABASE_ANON_KEY: 'YOUR_ANON_KEY',
    AUTH_START_URL: 'https://devtools.yogique.life/tools/auth-callback/index.html?start=1',
    REQUEST_ACCESS_URL: 'https://yogique.life/request-access',
    DEVTOOLS_HOME_URL: 'https://devtools.yogique.life/'
};

// Map config values to backwards-compatible globals (do not redeclare locals)
window.SUPABASE_URL = window.SUPABASE_URL || window.DEVTOOLS_CONFIG.SUPABASE_URL;
window.SUPABASE_ANON_KEY = window.SUPABASE_ANON_KEY || window.DEVTOOLS_CONFIG.SUPABASE_ANON_KEY;
window.AUTH_START_URL = window.AUTH_START_URL || window.DEVTOOLS_CONFIG.AUTH_START_URL;
window.REQUEST_ACCESS_URL = window.REQUEST_ACCESS_URL || window.DEVTOOLS_CONFIG.REQUEST_ACCESS_URL;
window.DEVTOOLS_HOME_URL = window.DEVTOOLS_HOME_URL || window.DEVTOOLS_CONFIG.DEVTOOLS_HOME_URL;
