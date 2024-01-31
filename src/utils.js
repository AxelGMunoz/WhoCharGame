export const status = {
    Unplayed: 'Unplayed',
    Skipped: 'Skipped',
    Failed: 'Failed',
    Success: 'Success'
}

export function getStatus(){
    let arrayStatus = []
    for(let s = 0;s < Object.keys(status).length;s++){
        arrayStatus.push(Object.keys(status)[s])
    }
    return arrayStatus
}

export function getColor(t){
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

const images = [
    Ash_Ketchum,
    Lara_Croft
]

export function getImage(n){
    return images[n]
}