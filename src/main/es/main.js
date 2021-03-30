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
    return simpleDigits[number];
    // Conseil de l'equipe 6: pour multipleDigits -> %10 puis /10 pour afficher les chiffres précédents. Boucler tant que Nb =/= 0.
  },
  fromLCD(lcdStringRepresentation) {
    return /*your code here*/ undefined;
  }
};
