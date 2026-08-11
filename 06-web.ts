// VULN-26: wildcard postMessage target
window.postMessage({ test: true }, '*');

// VULN-27: request-controlled redirect
function redirect(next) { window.location.href = next; }

// VULN-28: wildcard CORS
app.use(cors({ origin: '*' }));

// VULN-29: insecure cookie
res.cookie('session', token, { secure: false });

// VULN-30: cookie missing HttpOnly
res.cookie('auth', token, { secure: true });

// VULN-31: SameSite=None
res.cookie('cross', token, { sameSite: 'none', secure: true });

// VULN-32: insecure HTTP URL
fetch('http://api.example.invalid/data');
