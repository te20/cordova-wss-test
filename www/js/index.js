/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var output = function (text) {
    var con = document.getElementById('console');
    con.innerHTML += '<br>' + text;
};

var _startWebsocketServer = function (port) {
    // console.log(websocket_protocol);
    output('start websocket server on port: ' + port);

    var wsserver = cordova.plugins.wsserver;

    wsserver.start(port, {
        // WebSocket Server
        'onStart': function (addr, port) {
            output('Listening on ' + addr + ':' + port);
            console.log('Listening on %s:%d', addr, port);
        },
        'onStop': function (addr, port) {
            output('Stopped listening on ' + adder + ':' + port);
            console.log('Stopped listening on %s:%d', addr, port);
        },
        // WebSocket Connection
        'onOpen': function (conn) {
            /* conn: {
             'uuid' : '8e176b14-a1af-70a7-3e3d-8b341977a16e',
             'remoteAddr' : '192.168.1.10',
             'acceptedProtocol' : 'my-protocol-v1',
             'httpFields' : {...}
             } */
            output('A user connected from ' + conn.remoteAddr);
            console.log('A user connected from %s', conn.remoteAddr);
        },
        'onMessage': function (conn, msg) {
            output(JSON.stringify(conn) + ' ' + msg);
            console.log(conn, msg);
            //broadcast
            wsserver.broadcast = function broadcast(data) {
                wsserver.clients.forEach(function each(client) {
                    client.send(msg);
                });
            };

        },
        'onClose': function (conn) {
            output('A user disconnected from ' + conn.remoteAddr);
            console.log('A user disconnected from %s', conn.remoteAddr);
        },
        // 'origins': ['ws://'], // optional. validates the 'Origin' HTTP Header.
        // NOTE On iOS, protocols is required, not optional.
        'protocols': ['my-protocol'] // optional. validates the 'Sec-WebSocket-Protocol' HTTP Header.
    });
};

var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);

        networkinterface.getIPAddress(function (ip) {
            console.log(ip);
            output('IP address: ' + ip);
            _startWebsocketServer(8000);
        }, function (e) {
            output(e);
        });
    }
};

app.initialize();
