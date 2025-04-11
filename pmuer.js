const characters = [
  "eliwood",
  "hector",
  "lyn",
  "kent",
  "sain",
  "florina",
  "wil",
  "serra",
  "erk",
  "dorcas",
  "rath",
  "marcus",
  "oswin",
  "lowen",
  "lucius",
  "matthew",
  "rebecca",
  "bartre",
  "guy",
  "priscilla",
  "raven",
  "canas",
  "dart",
  "fiora",
  "legault",
  "nils/ninian",
  "isadora",
  "heath",
  "hawkeye",
  "geitz",
  "wallace",
  "renault",
  "pent",
  "louise",
  "karel",
  "harken",
  "nino",
  "jaffar",
  "vaida",
]
const hectorExclusive = ["farina", "karla"]
const picked = characters.splice(0, 1)
for (let i = 1; i < 15; i++) {
  let index = Math.floor(Math.random() * characters.length)
  let pick = characters.splice(index, 1)[0]
  console.log(pick)
  picked.push(pick)
  if (pick == "karel") {
    characters.splice(characters.indexOf("harken"), 1)
    console.log(characters.toString())
  } else if (pick == "harken") {
    characters.splice(characters.indexOf("karel"), 1)
    console.log(characters.toString())
  } else if (pick == "wallace") {
    characters.splice(characters.indexOf("geitz"), 1)
    console.log(characters.toString())
  } else if (pick == "geitz") {
    characters.splice(characters.indexOf("wallace"), 1)
    console.log(characters.toString())
  } else if (pick == "matthew") {
    characters.splice(characters.indexOf("legault"), 1)
    console.log(characters.toString())
  } else if (pick == "legault") {
    characters.splice(characters.indexOf("matthew"), 1)
    console.log(characters.toString())
  }
}
document.write(picked.toString())
