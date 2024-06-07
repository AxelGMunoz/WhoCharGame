// Para agregar un nuevo personaje
// 1: Agregar el nombre al array chars
// 2: Agregar la imagen .jpg a la carpeta assets/chars con el mismo nombre

// Todos los personajes
export const chars = [
  'Ash Ketchum',
  'Lara Croft',
  'Mario Bros',
  'Ezio Auditore',
  'Arthur Morgan',
  'Samus Aran',
  'Link',
  'Leon Scott Kennedy',
  'Geralt of Rivia',
  'Gordon Freeman',
  'Joel Miller',
  'Master Chief'
]

// Nombres falsos para rellenar
const fakeNames = [
  'Pacman',
  'Harry Potter',
  'Sonic',
  'Prince of Persia',
  'Marcus Fenix',
  'Rayman',
  'Sora',
  'Zelda',
  'Dante',
  'Spyro the Dragon',
  'Mega Man',
  'Crash Bandicoot',
  'Cloud Strife',
  'Kratos',
  'Donkey Kong',
  'Nathan Drake',
  'Snake'
]

// Obtener imagen según el personaje
export function getImage (n) {
  return require(`./assets/chars/${chars[n]}.jpg`)
}

// Posibles estados de los items
export const status = {
  Unplayed: 'Unplayed',
  Skipped: 'Skipped',
  Failed: 'Failed',
  Success: 'Success'
}

// Obtener el estilo según el estado
export const getColor = {
  Skipped: 'bg-orange-500',
  Failed: 'bg-red-500',
  Success: 'bg-green-500',
  Unplayed: 'bg-violet-500'
}

// Estructura al generar un nuevo item
export function structNewItem (n) {
  return {
    id: n,
    try: [status.Unplayed, status.Unplayed, status.Unplayed, status.Unplayed, status.Unplayed],
    status: status.Unplayed
  }
}

// Obtener un array combinado de los personajes y los nombres falsos
export function getNames () {
  return chars.map((char, index) => ({ value: index, label: char }))
    .concat(fakeNames.map((name, index) => ({ value: chars.length + index, label: name })))
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
  return item.try.indexOf(status.Unplayed)
}
