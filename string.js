const client = require('./client')

async function init() {
  await client.set("age", "21");
  await client.expire("age", 10)
  const result = await client.get("name");
  console.log("Result->", result)
}
init()
