export const status = {
    Unplayed: 'Unplayed',
    Skipped: 'Skipped',
    Failed: 'Failed',
    Success: 'Success'
}

export function getStatus() {
    let arrayStatus = []
    for(let s = 0;s < Object.keys(status).length;s++){
        arrayStatus.push(Object.keys(status)[s])
    }
    return arrayStatus
}

export function getColor(t) {
    switch(t){
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

import Ash_Ketchum from './assets/chars/Ash_Ketchum.jpg'
import Lara_Croft from './assets/chars/Lara_Croft.jpg'

export const images = [
    Ash_Ketchum,
    Lara_Croft
]

export function getImage(n) {
    return images[n]
}

export function getName(n) {
    return images[n].split(/(\\|\/)/g).pop().split('.')[0].replace('_',' ')
}

export function getNames() {
    let names = []
    for(let n=0;n<images.length;n++){
        names.push({
            value: n,
            label: getName(n)
        })
    }
    const fakeNames = ['Prueba Jorge']
    for(let n=0;n<fakeNames.length;n++){
        names.push({ value:images.length + n, label:fakeNames[n] })
    }
    return names
}

export function shuffle(item) {
    for (let i = item.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [item[i], item[j]] = [item[j], item[i]];
    } 
    return item
}

export function getActualPos(item){
    let n = 0
    for(let t=0;t<5;t++){
      if(item.try[t] == status.Unplayed) {
        break
      }
      n++
    }
    return n
}