// Posibles estados de los items
export const status = {
  Unplayed: 'Unplayed',
  Skipped: 'Skipped',
  Failed: 'Failed',
  Success: 'Success'
}

// Obtener todos los estados
export function getStatus () {
  const arrayStatus = []
  for (let s = 0; s < Object.keys(status).length; s++) {
    arrayStatus.push(Object.keys(status)[s])
  }
  return arrayStatus
}

// Obtener el estilo según el estado
export function getColor (t) {
  switch (t) {
    case 'Skipped':
      return 'bg-orange-500'
    case 'Failed':
      return 'bg-red-500'
    case 'Success':
      return 'bg-green-500'
    default:
      return 'bg-violet-500'
  }
}

// Todos los personajes
export const chars = [
  'Ash Ketchum',
  'Lara Croft'
]

// Nombres falsos para rellenar
const fakeNames = [
  'Prueba Jorge'
]

// Obtener imagen según el personaje
export function getImage (n) {
  return require(`./assets/chars/${chars[n].replace(' ', '_')}.jpg`)
}

// Obtener un array combinao de los personajes y los nombres falsos
export function getNames () {
  const names = []

  // Personajes
  for (let n = 0; n < chars.length; n++) {
    names.push({
      value: n,
      label: chars[n]
    })
  }

  // Nombres falsos
  for (let n = 0; n < fakeNames.length; n++) {
    names.push({ value: chars.length + n, label: fakeNames[n] })
  }

  return names
}

// Función para mezclar un array
export function shuffle (item) {
  for (let i = item.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [item[i], item[j]] = [item[j], item[i]]
  }
  return item
}

// Obtener la posición del intento actual el item
export function getActualPos (item) {
  let n = 0
  for (let t = 0; t < 5; t++) {
    if (item.try[t] === status.Unplayed) {
      break
    }
    n++
  }
  return n
}
