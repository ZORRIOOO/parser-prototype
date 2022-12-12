const {selectorQueryTypes} = require('./enums');

class Parser {
  content;

  location;

  schema;

  constructor({content, location, schema}) {
    this.content = content;
    this.location = location;
    this.schema = schema;
  }

  parse = () => {
    const {content} = this;
    const result = new Map();

    this.schema.forEach(({key, type, selector}) => {
      const structure = this.structureByQuerySelector(content, type, selector);
      const formatted = this.format(key, structure);

      if (formatted) {
        result.set(key, formatted);
      }
    })

    return result;
  }

  structureByQuerySelector = (content, type, selector) => {
    switch (type) {
      case selectorQueryTypes.ONE: return content.window.document.querySelector(selector);
      case selectorQueryTypes.ALL: return content.window.document.querySelectorAll(selector);
    }
  }

  format = (key, value) => {
    switch (key) {
      case 'title':
        return value.textContent;
      case 'fullName':
        return value.textContent;
      case 'age':
        const text = value.textContent;

        return text.replace(/\D/g,'');
      case 'gender':
        return value.textContent;
      case 'keySkills':
        return [...value[0].childNodes].map((node) => node.textContent.trim());
      default:
        return null;
    }
  }
}

module.exports = {Parser};