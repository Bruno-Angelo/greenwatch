import React from 'react';
import { useEffect} from 'react';
import mqtt from 'mqtt';
 
const topico1 = 'bananaOmastar'

export default function UltimoTeste() {
    useEffect(() => {
        const client = mqtt.connect('mqtt://test.mosquitto.org:1883')
        //const client = mqtt.connect('ws://broker.emqx.io:8083')
        client.on('connect', handleConnection)

        function handleConnection() {
            client.subscribe(topico1)
            console.log(`Conectado ao Broker, inscrito no tópico ${topico1}`)
        
            client.on('message', (topic, message) => {
                console.log(`Mensagem recebida no tópico ${topic}, que diz ${message}`)
            })
            
        }
    }, [])
    return <div></div>
} 

