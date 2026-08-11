# VibeSane 50-Rule Security Test Fixture

This repository intentionally contains **50 fake, non-functional vulnerability fixtures** for testing VibeSane's 50-rule scanner.

**Do not use any value here as a real credential.** All tokens, keys, passwords, URLs, and credentials are fabricated test strings.

## Expected test

Run VibeSane against this repository and verify:

- `checksRun` reports 50 when the extended engine is enabled.
- Findings identify the relevant fixture and line.
- The scanner does not crash when multiple categories are present.

## Fixture map

1. RLS disabled table
2. Public GRANT
3. Anonymous GRANT
4. Public storage bucket
5. Over-broad storage policy
6. SECURITY DEFINER function
7. JWT secret
8. Google API key
9. GitHub token
10. Private key
11. Database credential URL
12. Hardcoded password
13. Bearer token
14. SendGrid key
15. Twilio credential
16. Slack token
17. npm token
18. Vercel token
19. Netlify token
20. Shell command execution
21. eval()
22. new Function()
23. innerHTML
24. dangerouslySetInnerHTML
25. document.write()
26. wildcard postMessage target
27. user-controlled redirect
28. wildcard CORS
29. insecure cookie
30. missing HttpOnly review marker
31. SameSite=None cookie
32. insecure HTTP URL
33. exposed debug endpoint
34. exposed admin endpoint
35. unbounded dependency
36. git dependency
37. npmrc credential
38. Docker socket exposure
39. MD5
40. SHA-1
41. Math.random for security
42. path traversal
43. command injection
44. insecure deserialization marker
45. weak password hashing
46. hardcoded encryption key
47. permissive filesystem access
48. SSRF-style URL fetch
49. prototype pollution assignment
50. disabled TLS verification
