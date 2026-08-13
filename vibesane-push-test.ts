// Safe test fixture for VibeSane active protection.
// Uses a cryptographically secure token generator.
// Clean PR verification: harmless documentation-only change.
import { randomUUID } from "node:crypto";

export function generateTestToken(): string {
  return randomUUID();
}
