// In build module in node js

// 1) Operating system module

const os=require("os");

console.log(os.userInfo()); //provide the information about the users

console.log(`The system uptime is ${os.uptime()} seconds`);//provide the information about the uptime time after the last boot

const personinfo={
        Name:os.type(),
        release:os.release(),
        version:os.version(),
        totalmemory:os.totalmem(),
        freememory:os.freemem(),
        platform:os.platform(),
        architecture:os.arch()
}

console.log(personinfo);

/* Output:
        
        uid: -1,
        gid: -1,
        username: 'heman',
        homedir: 'C:\\Users\\heman',
        shell: null
        }
        The system uptime is 44925.234 seconds
        {
        Name: 'Windows_NT',
        release: '10.0.22621',
        version: 'Windows 11 Home Single Language',
        totalmemory: 8245334016,
        freememory: 1815363584
        platform: 'win32',
        architecture: 'x64'
        }
*/
