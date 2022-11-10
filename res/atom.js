const atom = (value, base) => {
  let x = "";
  value.split("").map((l) => {
    if (base.hasOwnProperty(l.toUpperCase())) x += base[l.toUpperCase()] + " ";
    else if (l == " ") x += "	";
  });
  return x;
};

export default atom;
