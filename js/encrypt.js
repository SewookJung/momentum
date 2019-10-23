function Encrypt(theText) {
  output = new String();
  Temp = new Array();
  Temp2 = new Array();
  TextSize = theText.length;
  for (i = 0; i < TextSize; i++) {
    rnd = Math.round(Math.random() * 122) + 68;
    Temp[i] = theText.charCodeAt(i) + rnd;
    Temp2[i] = rnd;
  }
  for (i = 0; i < TextSize; i++) {
    output += String.fromCharCode(Temp[i], Temp2[i]);
  }
  return output;
}

function unEncrypt(theText) {
  output = new String();
  Temp = new Array();
  Temp2 = new Array();
  TextSize = theText.length;
  for (i = 0; i < TextSize; i++) {
    Temp[i] = theText.charCodeAt(i);
    Temp2[i] = theText.charCodeAt(i + 1);
  }
  for (i = 0; i < TextSize; i = i + 2) {
    output += String.fromCharCode(Temp[i] - Temp2[i]);
  }
  return output;
}
