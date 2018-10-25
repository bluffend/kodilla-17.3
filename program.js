process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function () {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/language':
                process.stdout.write('Your computer is set to language ');
                process.stdout.write(process.env.LANG);
                process.stdout.write('\n');
                break;
            case '/version':
                process.stdout.write('Your node.js version is ');
                process.stdout.write(process.version);
                process.stdout.write('\n');
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
                break;
        }
    }
});