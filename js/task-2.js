function formatMessage(message, maxLength) {
    textLenght = message.length;
    if (textLenght <= maxLength) {
      text = message;
    } else {
      text = message.slice(0, maxLength) + "...";
    }
    return text;
  }

console.log(formatMessage('Curabitur ligula sapien', 16));
console.log(formatMessage('Curabitur ligula sapien', 23));
console.log(formatMessage('Vestibulum facilisis purus nec', 20));
console.log(formatMessage('Vestibulum facilisis purus nec', 30));
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15));
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41));
