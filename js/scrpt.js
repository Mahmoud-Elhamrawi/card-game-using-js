

document.querySelector("#stratBtn").addEventListener('click',function(){

  document.querySelector(".startLayer").remove();

 })

//card
let cradAll = document.querySelector(".card_game");
//childs 
let cradChilds = Array.from(cradAll.children);


let orderOfChlidern = [...cradChilds.keys()]

console.log(orderOfChlidern);

shufle(orderOfChlidern);
console.log(orderOfChlidern);


cradChilds.forEach((ele,ind)=>{

    ele.style.order = orderOfChlidern[ind];

    ele.addEventListener("click",function(e){
      flibed(ele);


    });
    
});

/// to add class flibed
function flibed(item)
{
   item.classList.add("flibed");  
   let allFlibedBlock = cradChilds.filter(  (ele)=>ele.classList.contains('flibed'))
 if(allFlibedBlock.length === 2 )
 {
   console.log('2');
   stopClick();
   chechItems(allFlibedBlock[0],allFlibedBlock[1])
 }
  
  
 function chechItems(fItem,sItem)
 {

  let tries = document.querySelector(".wrong_try span");
  let triesRight = document.querySelector(".Right_try span");
  if(fItem.dataset.game === sItem.dataset.game )
  {
    triesRight.innerHTML= parseInt(triesRight.innerHTML)+1;
    fItem.classList.remove("flibed");
    sItem.classList.remove("flibed");

    fItem.classList.add("match");
    sItem.classList.add("match");
    document.getElementById("success").play()
  }else{
    tries.innerHTML = parseInt(tries.innerHTML)+1;
    setTimeout(()=>{
      fItem.classList.remove("flibed");
      sItem.classList.remove("flibed");
    },1000)
    document.getElementById("fail").play()
  
  }
 }



}

//no select card
function stopClick()
{
  cradAll.classList.add("noClick");
  setTimeout(() => {
    
    cradAll.classList.remove("noClick");

  }, 1000);
}

//change value of order in flex to change orders of cards
function shufle(array)
{
  //[0,1,2,3,4,5,6,7,8,9,10,11]
  let curentInd = array.length;
  let temp , random ;

  while(curentInd > 0)
  {
    random = Math.floor(Math.random()*curentInd);
    curentInd --;
    temp  = array[curentInd];
    array[curentInd] = array[random];
    array[random] = temp;

  }



return array;






}




