import * as net from "net";


function newConn(socket) {
    console.log("new connection", socket.remoteAddress, socket.remotePort); 

    server.on('end', () => {
        console.log("EOG. ");
    });

    server.on( 'data', (data) => {
        console.log("DATA :", data.toString());
        socket.write(data);

        if(data.includes("q")) {
            console.log('closing');
            socket.end();
        }
    });


}

let server = net.createServer();
server.on('connection', newConn);
server.on('err',  (err) => {throw err});


server.listen({host: '127.0.0.1', port: 1234});
