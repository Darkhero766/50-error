// VULN-44: insecure deserialization marker
const restored = insecureDeserialize(userControlledData);

// VULN-45: weak password hashing
const digest = md5(password);

// VULN-46: hardcoded encryption key
const ENCRYPTION_KEY = 'FAKE_TEST_ENCRYPTION_KEY_32_BYTES_LONG';

// VULN-47: permissive filesystem access
chmodSync(userPath, 0o777);

// VULN-50: disabled TLS verification
const httpsOptions = { rejectUnauthorized: false };
https.request({ ...httpsOptions, host: 'example.invalid' });
