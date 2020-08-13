const si = require('systeminformation');

// promises style - new since version 3
// si.cpu()
//     .then(data => console.log(data))
//     .catch(error => console.error(error));


// console.log(si.cpu().then((data) => console.log(data)));
// console.log(si.bios().then((data) => console.log(data)));
// console.log(si.mem().then((data) => console.log(data)));
// console.log(si.battery().then((data) => console.log(data)));
// console.log(si.graphics().then((data) => console.log(data)));
// console.log(si.osInfo().then((data) => console.log(data)));
// console.log(si.uuid().then((data) => console.log(data)));
// console.log(si.networkInterfaces().then((data) => console.log(data)));
// console.log(si.wifiNetworks().then((data) => console.log(data)));
// console.log(si.vboxInfo().then((data) => console.log(data)));



async function cpuData() {
    try {
        // GENERAL
        const version = await si.version();
        const time = await si.time();
        // SYSTEM
        const system = await si.system()
        const bios = await si.bios();
        const baseboard = await si.baseboard();
        const chassis = await si.chassis();
        // CPU
        const cpu = await si.cpu()
        const cpuFlags = await si.cpuFlags()
        const cpuCache = await si.cpuCache()
        const cpuCurrentspeed = await si.cpuCurrentspeed()
        const cpuTemperature = await si.cpuTemperature()
        // MEMORY
        const mem = await si.mem()
        const memLayout = await si.memLayout()
        // BATTERY
        const battery = await si.battery() 
        // GRAPHICS 
        const graphics = await si.graphics()
        // OS
        const osInfo = await si.osInfo()
        const uuid = await si.uuid()
        // const versions = await si.versions()
        // const shell = await si.shell()
        const users = await si.users()
        // PUT CONSOLE LOG VALUE HERE
        console.log(cpu);


    } catch (e) {
        console.log(e)
    }
}

cpuData()