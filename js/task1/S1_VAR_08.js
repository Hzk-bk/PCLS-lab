function safeAdd(a, b) {
  if (Number.isInteger(a) && Number.isInteger(b)) {
    if (Math.abs(a) > Number.MAX_SAFE_INTEGER || Math.abs(b) > Number.MAX_SAFE_INTEGER) {
      const result = BigInt(a) + BigInt(b);
      console.log(result, "type:", typeof result);
      return result;
    } else {
      const result = a + b;
      console.log(result, "type:", typeof result);
      return result;
    }
  }
  return a + b;
}

safeAdd(1, 2);
safeAdd(Number.MAX_SAFE_INTEGER, 1);
