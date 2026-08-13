// INTENTIONAL VULNERABILITY TEST — do not merge.
// This fixture is deliberately insecure so VibeSane should flag it.
export function generateTestToken(): string {
  return Math.random().toString(36).slice(2);
}
