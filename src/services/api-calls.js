const baseUrl = 'https://www.dnd5eapi.co'

export function getClassList() {
  return fetch(`${baseUrl}/api/classes`)
  .then(res => res.json())
}
// fetch to https://www.dnd5eapi.co/api/races/whateverRace
// fetch to https://www.dnd5eapi.co/api/classes/whateverClass
// fetch to https://www.dnd5eapi.co/api/monsters/whateverMonster
export function getDetails(apiUrl) {
  return fetch(`${baseUrl}${apiUrl}`)
  .then(res => res.json())
}

export function getStore() {
  return fetch(`${baseUrl}/api/equipment-categories`)
  .then(res => res.json())
}

export function getMonsterList() {
  return fetch(`${baseUrl}/api/monsters`)
  .then(res => res.json())
}

export function spellSearch(formData) {
  return fetch(`${baseUrl}/api/spells/?name=${formData.query}`)
  .then(res => res.json())
}

export function getSpellDetails(spellName) {
  return fetch(`${baseUrl}/api/spells/${spellName}`)
  .then(res => res.json())
}

export function getRaceList() {
  return fetch(`${baseUrl}/api/races`)
  .then(res => res.json())
}

export function getClassStats(charClassName) {
  return fetch(`${baseUrl}/api/classes/${charClassName}`)
  .then(res => {return res.json()})
  .then(data => data)
}
export function getRaceStats(charRaceName) {
  return fetch(`${baseUrl}/api/races/${charRaceName}`)
  .then(res => {return res.json()})
  .then(data => data)
}

export function getRules() {
  return fetch(`${baseUrl}/api/rule-sections`)
  .then(res => {return res.json()})
  .then(data => data)
}