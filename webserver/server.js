// Create a web-server using NodeJS

// import 
import * as net from "net";

// when new connection is created
function newConn(socket) {
    
    //log the r-address and r-port
    console.log("new connection", socket.remoteAddress, socket.remotePort); 

    //when end log the message
    server.on('end', () => {
        console.log("EOG. ");
    });
    
    //log and write the data, if it includes "q", end the connection
    server.on( 'data', (data) => {
        console.log("DATA :", data.toString());
        socket.write(data);

        if(data.includes("q")) {
            console.log('closing');
            socket.end();
        }
    });


}

// initialization
let server = net.createServer();

//create new connection
server.on('connection', newConn);

//exception
server.on('err',  (err) => {throw err});

//listen with the host address and port
server.listen({host: '127.0.0.1', port: 1234});
