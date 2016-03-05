cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-networkinterface/www/networkinterface.js",
        "id": "cordova-plugin-networkinterface.networkinterface",
        "clobbers": [
            "window.networkinterface"
        ]
    },
    {
        "file": "plugins/cordova-plugin-websocket-server/www/wsserver.js",
        "id": "cordova-plugin-websocket-server.WebSocketServer",
        "clobbers": [
            "cordova.plugins.wsserver"
        ]
    },
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-networkinterface": "1.0.8",
    "cordova-plugin-websocket-server": "1.1.0",
    "cordova-plugin-whitelist": "1.2.1"
};
// BOTTOM OF METADATA
});