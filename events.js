

const scoreDolphins = (96 + 108 + 100) / 3;
const scoreKoalas = (96 + 108 + 100) / 3;

console.log(scoreDolphins, scoreKoalas);


if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log("The Dolphin team is a winner!!!")
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log("Wow, teams have same score. Both win!!")
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
    console.log("The Koalas team is a winner!!!")
}
else {
    console.log("no one wins the trophy :( ")
}


























// Test data : Dolphins score 96,108,89. Koalas score 88,91,110