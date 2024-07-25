// argv
// console.log(process.argv);
// console.log(process.argv[3]);

// process.env
console.log(process.env.COMPUTERNAME);

// pid
console.log(process.pid);

// cwd()
console.log(process.cwd());

// title
console.log(process.title);

// memoryUsage()
console.log(process.memoryUsage());

// uptime()
console.log(process.uptime());


process.on('exit', (code) => {
    console.log("About to exit with code: ", code);
});

// exit()
process.exit(0); // 0 means success
console.log("Hello after exit");
