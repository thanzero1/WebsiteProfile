const linkInterruptor = document.querySelector("#interruptor");
let box = document.querySelector("#checkbox");
let interruptor = document.querySelector("#interruptor");

interruptor.addEventListener("click", function () {
  box.checked = !box.checked;
  changeMode();
});

function changeMode() {
  let changesList = document.querySelectorAll(".change");
  let BgchangesList = document.querySelectorAll(".BgChange");

 
  let i = 0;

  for (i = 0; i < changesList.length; i++) {
    let itemChange = changesList[i];
    
    
    if (box.checked) {
      itemChange.style.color = "#FFF";
    } else {
      itemChange.style.color = "#000001";
    }
  };
  
  for (i = 0; i < BgchangesList.length; i++) {
    let BgChange = BgchangesList[i];
    
    if (box.checked) {
      BgChange.style.backgroundColor = "#000001";
    } else {
      BgChange.style.backgroundColor = "#FFF";
    }
  };
   
}
