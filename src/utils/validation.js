// Basic email test
export function isEmailValid(email) {
  // Simple, safe pattern for this lab
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).trim());
}

// Canadian postal code: A1A 1A1 (space or no space, case-insensitive)
export function isPostalCodeCA(code) {
  const re = /^[A-Za-z]\d[A-Za-z][\s-]?\d[A-Za-z]\d$/;
  return re.test(String(code).trim());
}
