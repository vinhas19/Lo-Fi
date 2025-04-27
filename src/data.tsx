import { DataType } from "./types/type"



const data:DataType = {
    background: [
        {
            id: 'nightMode',
            isOn: false
        },
        {
            id: 'timeDetails',
            isOn: false
        },
        {
            id: 'controlPanelBoard',
            isOn: false
        },
    ],
    soundState: false,
    mood: [
        {
            id: 'sleepy',
            name: 'Sono',
            isPlayed: false,
            icon: 'moon'
        },
        {
            id: 'jazzy',
            name: 'Jaz',
            isPlayed: false,
            icon: 'guitar'
        },
        {
            id: 'chill',
            name: 'Chill',
            isPlayed: true,
            icon: 'cookie-bite'
        },
    ],
    effects: [
        {
            id: 'rain',
            name: 'Chuva',
            volume: 0,
         },
         {
            id: 'keyboard',
            name: 'Teclado',
            volume: 0,
         },
         {
            id: 'city',
            name: 'Cidade',
            volume: 0,
         },
         {
            id: 'campfire', 
            name: 'Lareira',
            volume: 0
         },
         {
            id: 'fan', 
            name: 'Ventoinha',
            volume: 0
         },
         {
            id: 'river', 
            name: 'Rio',
            volume: 0
         },
         {
            id: 'storm', 
            name: 'Tempestade',
            volume: 0
         },
         {
            id: 'waves', 
            name: 'Ondas',
            volume: 0
         },
         {
            id: 'wind', 
            name: 'Vento',
            volume: 0
         },
         {
            id: 'people', 
            name: 'População',
            volume: 0
         }     
    ],

}

export default data