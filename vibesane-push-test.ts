// Safe test fixture for VibeSane active protection.
// Uses a cryptographically secure token generator.
import { randomUUID } from "node:crypto";

export function generateTestToken(): string {
  return randomUUID();
}
