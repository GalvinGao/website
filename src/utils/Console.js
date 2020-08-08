class Console {
  static debug (component, ...content) {
    this._render("debug", component, ...content)
  }
  static info (component, ...content) {
    this._render("info", component, ...content)
  }
  static warn (component, ...content) {
    this._render("warn", component, ...content);
  }
  static error (component, ...content) {
    this._render("error", component, ...content);
  }
  static fatal (component, ...content) {
    this._render("error", component, ...content);
  }
  static log (component, ...content) {
    this._render("log", component, ...content)
  }
  /**
   * @static
   * @private
   */
  static _render (level, component, ...content) {
    const PROD_IGNORE = ["debug"];
    if (
      process.env.NODE_ENV === "production" &&
      (PROD_IGNORE.includes(level))
    ) return;
    // const now = new Date();
    // const date = `${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}.${now.getMilliseconds()}`;

    let prefix;

    if (process.env.NODE_ENV === "production") {
      prefix = [`(${level})`, `[${component}]`];
    } else {
      prefix = [
        `%c${level}%c${component}`,
        "background: #FF9800; color: #000; padding: 2px 4px; border-radius: 4px; margin-right: 4px; font-weight: 900; font-size: 10px;",
        "background: #673AB7; color: #fff; padding: 2px 4px; border-radius: 4px; font-weight: 700; font-size: 10px;"
      ];
    }

    if (console[level]) {
      console[level](...prefix, ...content)
    } else {
      console.log(...prefix, ...content)
    }
  }
}

export default Console