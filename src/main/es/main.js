const simpleDigits = [
  ` _ 
|/|
|_|`,
  `   
  |
  |`,
  ` _ 
 _|
|_ `,
  ` _ 
 _|
 _|`,
  `   
|_|
  |`,
  ` _ 
|_ 
 _|`,
  ` _ 
|_ 
|_|`,
  ` _ 
  |
  |`,
  ` _ 
|_|
|_|`,
  ` _ 
|_|
 _|`
];

export const lcdConverter = {
  toLCD(number) {
    let word = number.toString();
    let res = "";

    for (let index = 0; index < word.length; index++) {
      res += simpleDigits[word[index]];
    }
    return res;
    // Conseil de l'equipe 6: pour multipleDigits -> %10 puis /10 pour afficher les chiffres précédents. Boucler tant que Nb =/= 0.
  },
  fromLCD(lcdStringRepresentation) {
    return /*your code here*/ undefined;
  }
};
