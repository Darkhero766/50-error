// Intentional test fixture for VibeSane active protection.
// This should trigger the Math.random security check.
export function generateTestToken(): string {
  return Math.random().toString(36).slice(2);
}
