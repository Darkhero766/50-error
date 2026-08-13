// Intentional test fixture for VibeSane active protection.
// This should trigger the Math.random security check.
// Active protection verification: push event test #2.
export function generateTestToken(): string {
  return Math.random().toString(36).slice(2);
}
