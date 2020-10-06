const styleMap = {
  debug: {
    background: "#424242",
    text: "#fff"
  },
  info: {
    background: "#1976D2",
    text: "#fff"
  },
  warn: {
    background: "#F57C00",
    text: "#fff"
  },
  error: {
    background: "#D32F2F",
    text: "#fff"
  },
  fatal: {
    background: "#c700ff",
    text: "#fff"
  },
  log: {
    background: "#512DA8",
    text: "#fff"
  }
}

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
    this._render("fatal", component, ...content);
  }
  static log (component, ...content) {
    this._render("log", component, ...content)
  }
  /**
   * @static
   * @private
   */
  static _render (level, component, ...content) {
    const styles = styleMap[level]
    const prefix = [
      `%c${level}%c${component}`,
      `background: ${styles.background}; color: ${styles.text}; padding: 2px 4px; border-radius: 4px; margin-right: 4px; font-weight: 900; font-size: 10px;`,
      "background: #673AB7; color: #fff; padding: 2px 4px; border-radius: 4px; font-weight: 700; font-size: 10px;"
    ];

    if (console[level]) {
      console[level](...prefix, ...content)
    } else {
      console.log(...prefix, ...content)
    }
  }
}

export default Console