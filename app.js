/** Khởi tạo electron */
const {app, BrowserWindow} = require('electron')

/**
 * @type {Electron.BrowserWindow}
 * Khởi tạo màn hình
 */
let Screen

app.on('ready', () => {
    Screen = new BrowserWindow({
        width: 1000, height: 600,
        transparent: true,
        autoHideMenuBar: true,
        minHeight: 500, minWidth: 600
    })
})