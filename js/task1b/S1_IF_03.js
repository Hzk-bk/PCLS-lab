function normalizeName(input) {
  if (!input || input.trim() === "") return "Anonymous";
  return input.trim();
}

// Tests
console.log(normalizeName(""));        // Anonymous
console.log(normalizeName(" "));       // Anonymous
console.log(normalizeName(null));      // Anonymous
console.log(normalizeName(" Ola "));   // Ola
