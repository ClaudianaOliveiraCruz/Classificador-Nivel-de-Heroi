// Defindo as váriaveis do nome de héroi e do XP, e a variavel que vai armazenar o level

let nome = "Claudy";
let xp = 6200;
let level = "";

// Definindo a classificação do héroi usando estrutura if e else

if (xp < 1001) {
  level = "Ferro";
} else if (xp <= 2000) {
  level = "Bronze";
} else if (xp <= 6000) {
  level = "Prata";
} else if (xp <= 7000) {
  level = "Ouro";
} else if (xp <= 8000) {
  level = "Platina";
} else if (xp <= 9000) {
  level = "Ascendente";
} else if (xp <= 10000) {
  level = "Imortal";
} else if (xp >= 10001) {
  level = "Radiante";
}

// Saida no Console

console.log(`O Herói de nome ${nome} está no nível de ${level}`);
