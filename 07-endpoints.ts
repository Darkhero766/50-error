// VULN-33: exposed debug endpoint
app.get('/debug', (req, res) => res.json({ env: process.env }));

// VULN-34: exposed admin endpoint
app.get('/admin', (req, res) => res.json({ admin: true }));

// VULN-42: path traversal
app.get('/file', (req, res) => res.sendFile(req.query.path));

// VULN-43: command injection
app.get('/run', (req, res) => exec(`echo ${req.query.command}`));

// VULN-48: SSRF-style arbitrary URL fetch
app.get('/proxy', async (req, res) => res.json(await fetch(req.query.url)));

// VULN-49: prototype pollution
Object.assign({}, req.body);
