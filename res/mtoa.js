const mtoa = (value, base) => {
  let x = "";
  value.split(" ").map((l) => {
    if (base.hasOwnProperty(l)) x += base[l];
    else if (l == " ") x += "   ";
  });
  return x;
};

export default mtoa;
