# cordova-wss-test
## Overview

This is a Cordova WebSocket server which uses WebSocket Server Plugin. This server is mainly for confirming how the WebSocker server works. The WebSocket Server plugin is

https://www.npmjs.com/package/cordova-plugin-websocket-server

## Plugin installation

        $ cordova plugin add cordova-plugin-websocket-server

Some settings of xcode's build options are required. Please check the plugin's page.

## Test
To confirm that the server works, [wscat](https://www.npmjs.com/package/wscat) is very useful.
To connect the server,

        $ wscat -s my-protocol -c ws://<server_address>:<server_port>

The subprotocol is optional. But on iOS, the subprotocol is necessary in WebSockerServer's option. 
