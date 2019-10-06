const program = require('commander');

/**
 * Command line argument structure
 -V, --version              output the version number
 --sourceLatitude <value>   Latitude of source
 --sourceLongitude <value>  Longitude of source
 -R, --radius <value>       Radius to find near by user
 -O, --order <value>        order of the result
 -U, --unit <value>         Unit km - K, miles- M, nutical mile- N
 -S, --src <value>          Source file
 -h, --help                 output usage information
 */
program
    .version('0.0.1')
    .description('An application for finding near by user')
    .option('--sourceLatitude <value>', 'Latitude of source')
    .option('--sourceLongitude <value>', 'Longitude of source')
    .option('-R, --radius <value>', 'Radius to find near by user ')
    .option('-O, --order <value>', 'Order of the result')
    .option('-U, --unit <value>', 'Unit km - K, miles- M, nutical mile- N')
    .option('-S, --src <value>', 'Source file')
    .parse(process.argv);

module.exports = program;