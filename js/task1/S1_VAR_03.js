const user = { name: "Ala", tags: [] };
user.tags.push("student", "js");

console.log("After adding tags:", user);

try {
  user = {};
} catch(e) {
  console.log("Cannot reassign const:", e.message);
}
