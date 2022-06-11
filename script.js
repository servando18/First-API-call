async function consoleCall() {
 const rawRes = await fetch("https://catfact.ninja/fact") 
 const json = await rawRes.json()
  console.log(json)
}

function paragraphCall() {
  fetch("https://catfact.ninja/fact")
  .then( (rawRes) =>rawRes.json() )
  .then( (json) => document.getElementById("target").innerText = json.fact)
  
}