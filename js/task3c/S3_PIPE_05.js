const pipe = (...fns) => x => fns.reduce((v,f) => f(v), x);

// Log lines pipeline
const logPipeline = pipe(
  lines => lines.map(line => {
    const [level, rest] = line.split(": ");
    return {level, rest};
  }),
  arr => arr.filter(l => l.level === "INFO"),
  arr => arr.map(l => {
    const match = l.rest.match(/user=(\d+)/);
    return match ? +match[1] : null;
  }),
  arr => arr.filter(x => x !== null)
);

// Tests
const logs = ["INFO: user=42","WARN: disk full","INFO: user=7"];
console.log(logPipeline(logs)); 
