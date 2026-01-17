function runCommand(cmd) {
  switch(cmd) {
    case "start": return "System started";
    case "stop": return "System stopped";
    case "status": return "System status: OK";
    default: return "Unknown command";
  }
}

// Tests
console.log(runCommand("start"));  // System started
console.log(runCommand("stop"));   // System stopped
console.log(runCommand("status")); // System status: OK
console.log(runCommand("reset"));  // Unknown command
