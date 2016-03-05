cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-websocket-server/www/wsserver.js",
        "id": "cordova-plugin-websocket-server.WebSocketServer",
        "pluginId": "cordova-plugin-websocket-server",
        "clobbers": [
            "cordova.plugins.wsserver"
        ]
    },
    {
        "file": "plugins/cordova-plugin-networkinterface/www/networkinterface.js",
        "id": "cordova-plugin-networkinterface.networkinterface",
        "pluginId": "cordova-plugin-networkinterface",
        "clobbers": [
            "window.networkinterface"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{}
// BOTTOM OF METADATA
});