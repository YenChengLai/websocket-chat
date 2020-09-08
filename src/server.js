const express = require('express');
const SocketServer = require('ws').Server;

const PORT = 3000;

const server = express.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});

//將 express 交給 SocketServer 開啟 WebSocket 的服務
const wss = new SocketServer({ server })

//當 WebSocket 從外部連結時執行
wss.on('connection', ws => {

    //連結時執行此 console 提示
    console.log('Client connected')

    //當 WebSocket 的連線關閉時執行
    ws.on('close', () => {
        console.log('Close connected')
    })
})