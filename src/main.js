localStorage.player = 'A';
localStorage.clickcount= 0;
let datas = document.querySelectorAll('#hello td');
// console.log(datas);

for(let i = 0 ; i < datas.length ; i++){
    // console.log(datas[i]);
    datas[i].addEventListener('click', () => {

        if(datas[i].classList.length === 0){
            localStorage.clickcount++
            if(localStorage.player === 'A'){

                datas[i].innerText = '0';
                datas[i].className = 'A';
                setTimeout(() => {
                    checkWinner('A');
                    localStorage.player = 'B'
                }, 10)
                

            }else{

                datas[i].innerText = 'X ';
                datas[i].className = 'B';
                setTimeout(() => {
                    checkWinner('B');
                    localStorage.player = 'A'
                }, 10)

            }
        }else{
            alert('Already Checked')
        }
        checkDraw();
    })
}

function checkWinner(player){
    let combinations = [ ["1","2","3"], ["4","5","6"], ["7","8","9"], ["1","4","7"], ["2","5","8"], ["3","6","9"], ["1","5","9"], ["3",'5',"7"] ]
    let checkBoxes = document.querySelectorAll(`#hello td.${player}`)
    // console.log(checkBoxes,  player);
    let playerCombo = []
    for(let i = 0; i < checkBoxes.length; i++){
        playerCombo.push(checkBoxes[i].id);
    }
    
    let possiblePlayerCombination = subset(playerCombo, 3)

    for(let j =0 ; j < combinations.length; j++){
        for(let k = 0 ; k < possiblePlayerCombination.length; k++){
            if(JSON.stringify(combinations[j]) === JSON.stringify(possiblePlayerCombination[k])){
                winner(player);
            }
        }
    }


}

function winner(player){
    alert(`Winner is Player ${player}`);
    window.location.reload();
}

function subset(arra, arra_size)
 {
    var result_set = [], 
        result;
    
   
for(var x = 0; x < Math.pow(2, arra.length); x++)
  {
    result = [];
    i = arra.length - 1; 
     do
      {
      if( (x & (1 << i)) !== 0)
          {
             result.push(arra[i]);
           }
        }  while(i--);

    if( result.length === arra_size)
       {
           result.sort(function(a, b){return a - b});
          result_set.push(result);
        }
    }

    return result_set; 
}

function checkDraw(){
    console.log(localStorage.clickcount);
    if(localStorage.clickcount === "9"){
        setTimeout(() => {
            alert('Draw');
            window.location.reload();
        }, 10)
        console.log('hello')
    }
}