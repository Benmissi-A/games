// on cree un jeu de cartes 
let card_id = [];
let card_name = [];
let card_color = [];
let card_value = [];

for (let i = 0 ; i <52 ; ++i){
  card_id[i] = i ;
  
  //on nomme les cartes
  if((i % 13) < 1){
    card_name[i] = 'ace';
    card_value[i] = 1;
  }else if((i % 13)< 10){
    card_name[i] = (i % 13) + 1;
    card_value[i] = (i % 13) + 1;
  }else if((i % 13)< 11){
    card_name[i]= 'jack';
    card_value[i] = 10;
  }else if((i % 13)< 12){
    card_name[i]= 'queen';
    card_value[i] = 10;
  }else if((i % 13)< 13){
    card_name[i]= 'king';
    card_value[i] = 10;
  }
  
  if(i < 13){
    card_color[i]= 'spades';
  }else if(i < 26){
    card_color[i]= 'hearts';
  }else if(i < 39){
    card_color[i]= 'diamonds';
  }else if(i < 52){
    card_color[i]= 'clubs';
  }
}
// on tire une carte au hazard

//console.log(nb);

let nb1 = Math.floor(Math.random() * (51));
let nb2 = Math.floor(Math.random() * (51));
let nb3 = Math.floor(Math.random() * (51));


// on calcule les scores et on affiche
let value1 = card_value[nb1];
let value2 = card_value[nb2];
let value3 = card_value[nb3];
let sum = value1+value2+value3;

console.log(`the first card is:  the ${card_name[nb1]} of ${card_color[nb1]}`);
console.log(`the second card is:  the ${card_name[nb2]} of ${card_color[nb2]}`);
console.log(`the third card is:  the ${card_name[nb3]} of ${card_color[nb3]}`);

if(sum < 21){
  console.log(`your total is : ${sum} points`);
}else if(sum > 21){
  console.log(`your total is : ${sum} points you loose`);
}else if(sum === 21){
  console.log(`Black Jack !!! : ${sum} points`);
}
