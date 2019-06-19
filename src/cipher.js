window.cipher = {
 encode : (offset,string) => {
   let result = '';
   string = string.toUpperCase();
   for (let i = 0; i<string.length;i++){
    const ascii = string[i].charCodeAt();
    const formula = (ascii-65+offset)%26+65;
    const letter = String.fromCharCode(formula)
    result = result + letter
   }
   return result
 },
 decode: (offset2,string2) => {
  let result2 = '';
  string2 = string2.toUpperCase();
  for (let i = 0; i<string2.length;i++){
   const ascii = string2[i].charCodeAt();
   const formula = (ascii-90-offset2)%26+90;
   const letter = String.fromCharCode(formula)
   result2 = result2 + letter
  }
  return result2
 }
};
