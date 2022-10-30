const translate = (value, morse) => {
  let x = "";
  value.split("").map((l) => {
    if (morse.hasOwnProperty(l.toUpperCase()))
      x += morse[l.toUpperCase()] + " ";
    else if (l == " ") x += "   ";
  });
  return x;
};

export default translate;
