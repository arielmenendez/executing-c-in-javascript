import { exec } from 'child_process';

const argValue = 'Hello World!';
const command = `./main ${argValue}`;

exec(command, (error, stdout) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }

  console.log(`${stdout}`);
});
