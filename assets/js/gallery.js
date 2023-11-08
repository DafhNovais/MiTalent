casas = 4

for(i=0;i<casas;i++){
  for(j=0;j<casas;j++){
    if(i%2 ==0){
      if(j%2 == 0){
        tabuleiro.innerHTML += "<div class='black'></div>"
      }else{
        tabuleiro.innerHTML += "<div></div>"
      }
    }else{
      if(j%2 == 0){
        tabuleiro.innerHTML += "<div></div>"
      }else{
        tabuleiro.innerHTML += "<div class='black'></div>"
      }
    }
  }
}