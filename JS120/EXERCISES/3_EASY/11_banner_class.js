class Banner {
  constructor(message, size = 'flex') {
    this.message = message;
    
    this.size = size === 'flex' ? this.message.length : this.checkLength(size);
    this.extra = null;
  }

  checkLength (size) {
    return size <= this.message.length ? this.message.length : size;
  }

  displayBanner() {
    console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
  }

  fixedSize(size) {
    this.extra = size % 2 === 0 ? 0 : 1;
    return (size - this.message.length) / 2;
  }

  horizontalRule() {
    return `+${"-".repeat(this.size + 2)}+`;
  }

  emptyLine() {
    return `|${" ".repeat(this.size + 2)}|`;
  }

  messageLine() {
    return `| ${" ".repeat(this.fixedSize(this.size))}${this.message}${" ".repeat(this.fixedSize(this.size) + this.extra)} |`
  }
}

let banner1 = new Banner('To boldly go where no one has gone before.', 150);
banner1.displayBanner();
