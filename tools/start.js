/**
 * Created by nap on 16/12/17.
 */

const exec = require('child_process').exec;
//const app = require('../server/app');
const config = require('../server/local/config');


let {platform} = process;
process.chdir(__dirname);

let command = [
    `SET PORT=${config.server.port + 1} && roadhog server`,
    `PORT=${config.server.port + 1} roadhog server`
];

platform = platform === 'win32' ? platform = 0 : platform = 1;

const roadhog = exec(command[platform], {
    cwd: './../'
});

roadhog.stdout.on('data', (data) => {
    console.log(data);
});

roadhog.stderr.on('data', (data) => {
    console.log(data);
});

roadhog.on('close', (code) => {
    console.log(`roadhog process exited with code ${code}`);
});
