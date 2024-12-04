let suffixIndex = 0; // Global index for generating the repetitive suffix

export function generateVisaId() {
  const timestamp = Date.now().toString(36).toUpperCase(); // Base36 timestamp in uppercase
  const randomPart = Math.random().toString(36).substring(2, 8).toUpperCase(); // Random string in uppercase

  // Get the current year
  const currentYear = new Date().getFullYear();

  // Generate a repetitive two-letter suffix
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const repetitiveSuffix =
    letters[Math.floor(suffixIndex / 26) % 26] + letters[suffixIndex % 26];
  suffixIndex = (suffixIndex + 1) % (26 * 26); // Increment and cycle suffixIndex through all combinations

  return `AA${timestamp}${randomPart}${currentYear}${repetitiveSuffix}`;
}
