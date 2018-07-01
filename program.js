process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function () {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        /* if (instruction === '/exit') {
             process.stdout.write('Quitting app!\n');
             process.exit();
         } else if
         (instruction === '/version') {
             process.stdout.write('The system language: ' + process.env.LANG + '\nThe node version: ' + process.versions.node + '\n');
         }
         else {
             process.stderr.write('Wrong instruction!\n');
         }*/
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;

            case '/version':
                process.stdout.write('The system language: ' + process.env.LANG + '\nThe node version: ' + process.versions.node + '\n');
                break;

            default:
                process.stderr.write('Wrong instruction!\n');
                break;
        }
    }
});



