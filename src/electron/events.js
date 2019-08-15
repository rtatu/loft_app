const {ipcMain} = require('electron')


const events = (function(){
    console.log("run")

    ipcMain.on('yolo', function(e,el){
        console.log(el)
    })
})()

module.exports = events

