// src/components/MqttReceiver.js
import React, { useState, useEffect } from 'react';
import mqtt from 'mqtt';

const qttReceiver = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const client = mqtt.connect(''); // Substitua pelo seu endereço do broker MQTT

    client.on('connect', () => {
      console.log('Conectado ao broker MQTT');
      client.subscribe('bananaOmastar'); // Substitua pelo seu tópico MQTT
    });

    client.on('message', (topic, payload) => {
      console.log('Mensagem recebida:', payload.toString());
      setMessage(payload.toString());
    });

    return () => {
      client.end();
    };
  }, []);

  return (
    <div>
      <h2>Informações MQTT</h2>
      <p>Mensagem: {message}</p>
    </div>
  );
};

export default qttReceiver;
