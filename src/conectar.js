console.log("Ae caralhooo");


const mqtt = require('mqtt')

const host = 'test.mosquitto.org'
const port = '1883'
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`
//https
//const connectUrl = `https://${host}:${port}`
//mqtt
const connectUrl = `mqtt://${host}:${port}`

const planta = mqtt.connect(connectUrl, {
    clientId,
    clean: true,
    connectTimeout: 4000,
    username: 'bananaaaaoooo',
    password: 'public',
    reconnectPeriod: 1000,
})

const pubTopic = 'bananaOmastar'
const subTopic = 'bananaOmastar'

planta.on('connect', () => {
    console.log('Conectado')
    planta.subscribe([subTopic], () => {
        console.log(`Subscribe para o tópico ${subTopic}`)
    })
    
})

planta.on('message', (subTopic, payload) => {
    console.log(`Recebida mensagem do tópico "${subTopic}", que diz ${payload}`)
})

