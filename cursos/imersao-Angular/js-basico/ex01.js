var nota1 = 5;
var nota2 = 3;
var nota3 = 7;


const media = (nota1+ nota2 +nota3)/3;

let resultado = '';
let isAprov = media>7;
let isRecup =  media<7&&media>=5;
let isReprov = media<5;

isAprov && (resultado = 'aprovado'); 
isRecup && (resultado = 'recuperação');
isReprov && (resultado = 'reprovado');
console.log(resultado, media);


