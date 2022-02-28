class Templator {

  static TEMPLATE_REGEXP =/\{\{(.*?)\}\}/gi;

  constructor(template) {
    this._template = template;
  }

  compile(ctx) {
    return this._compileTemplate(this._tempaltectx);
  }

  _get(obj, path, defaultValue) {
    const keys = path.split('.');
    console.log(obj)
    let result = obj;
    for (let key of keys) {
      result = result[key];

      if (result === undefined) {
        return defaultValue;
      }
    }

    return result ?? defaultValue; // "??" — [оператор нулевого слияния](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator) (не поддерживается старыми браузерами, для них нужен полифилл)
  }

  _compileTemplate(template, ctx) {
    console.log(ctx)
    let tmpl = this._template;
    let key = null;
    const regExp = Templator.TEMPLATE_REGEXP;

    // Важно делать exec именно через константу, иначе уйдёте в бесконечный цикл
    while ((key = regExp.exec(tmpl))) {
      if (key[1]) {
        const tmplValue = key[1].trim();
        // get — функция, написанная ранее в уроке
        const data = this._get(ctx, tmplValue);
        tmpl = tmpl.replace(new RegExp(key[0], "gi"), data);
      }
    }
    return tmpl;
  }
}

export default Templator;
