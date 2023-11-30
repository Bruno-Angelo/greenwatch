function startConnect() {

    clientID = "clientID - "+parseInt(Math.random() * 100);
   
    host = "wss://broker.emqx.io/mqtt"
    port = "8084"
    username = "Alguém"
    console.log("Host: "+host);
    console.log("Porta: "+port);
    client = new Paho.Client("wss://broker.emqx.io:8084/mqtt", clientID);


    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;
    

    client.connect({
        onSuccess: onConnect,
        userName: username
    })
}

function onConnect() {
    // document.getElementById("messages").innerHTML += "<span> Conectado ao Broker '" + host + "', com a porta " + port + "<span><br>"; 
    // document.getElementById("messages").innerHTML += "<span> Seu ID gerado é: '" + clientID + "' e seu nome de usuário é '" + username + "'<span><br>"; 

    console.log('Conectado ao broker '+host+":"+port);
    //topic = document.getElementById("topic").value;
    topic = "bananaOmastar";
    // var joinmessage = new Paho.Message(username+" entrou no chat");
    // joinmessage.destinationName = "bananaOmastar";
    // client.send(joinmessage);
    client.subscribe(topic);
    
}

function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:" + responseObject.errorMessage);
    }
}

function onMessageArrived(message) {
    
    console.log(message.payloadString);
    //document.getElementById("messages").innerHTML += "<span>" + "[Tópico - "+ topic + "] " + message.payloadString + "<span><br>";
    if (message.payloadString.slice(0,3) === "ART") {
        console.log("if resolvido - " + message.payloadString)
        document.getElementById("tempAr").innerHTML = message.payloadString.slice(3);
    } else if (message.payloadString.slice(0,3) === "ARU") {
        console.log("if resolvido - " + message.payloadString)
        document.getElementById("umiAr").innerHTML = message.payloadString.slice(3);
    } else if (message.payloadString.slice(0,3) === "SOU") {
        console.log("if resolvido - " + message.payloadString)
        document.getElementById("umiSolo").innerHTML = message.payloadString.slice(3);
    }
}

function pubTemperaturaAr() {
    //var message = new Paho.Message(document.getElementById("mensagem").value);
    var message = new Paho.Message("TAR"+document.getElementById("pubTemperaturaAr").value);
    message.destinationName = "bananaOmastar";
    client.send(message);
}

function pubUmidadeAr() {
    //var message = new Paho.Message(document.getElementById("mensagem").value);
    var message = new Paho.Message(username+": "+document.getElementById("mensagem").value);
    message.destinationName = "bananaOmastar";
    client.send(message);
}

function pubUmidadeSolo() {
    //var message = new Paho.Message(document.getElementById("mensagem").value);
    var message = new Paho.Message(username+": "+document.getElementById("mensagem").value);
    message.destinationName = "bananaOmastar";
    client.send(message);
}

/*function startConnect() {

    clientID = "clientID - "+parseInt(Math.random() * 100);

    host = document.getElementById("brokerhost").value;
    port = document.getElementById("porthost").value;
    userId = document.getElementById("nada").value;
    passwordId = document.getElementById("nada").value;


    cliente = new Paho.Client(host,Number(port), clientID);

    cliente.OnConnectionLost = OnConnectionLost;
    cliente.OnMessageArrived = OnMessageArrived;
    

    cliente.connect({
        onSuccess: OnConnect()
    })
}

function OnConnect() {
    console.log('Conectado ao broker '+host+":"+port)
    topic = document.getElementById("topic").value;
    console.log('Inscrito no tópico: '+ topic);
    cliente.subscribe(topic);
}


function OnConnectionLost(responseObject) {
    if (responseObject != 0) {
        console.log("ERRO "+ responseObject.errorMessage);
    }
}

function OnMessageArrived(message) {
    console.log(message.payloadString);
}

*/