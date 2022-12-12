const {location, html} = require('./src/html');
const {schema} = require('./src/schema');
const {Parser} = require("./src/parser");
const {JSDOM} = require("jsdom");

const execute = () => {
  const content = new JSDOM(html);
  const parser = new Parser({content, location, schema});

  return parser.parse();
};

console.log(execute());
