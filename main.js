const linkInterruptor = document.querySelector("#interruptor");
let header = document.querySelector(".header");
let box = document.querySelector("#checkbox"),
  interruptor = document.querySelector("#interruptor");

function changeMode() {
  var r = document.querySelectorAll(".change"),
    o = document.querySelectorAll(".BgChange");
  let t = 0;
  for (t = 0; t < r.length; t++) {
    let e = r[t];
    box.checked
      ? ((e.style.color = "#FFF"), (interruptor.innerHTML = "Mudar Tema"))
      : (e.style.color = "#000");
    // (interruptor.innerHTML = "Apagar as Luzes"));
  }
  for (t = 0; t < o.length; t++) {
    let e = o[t];
    box.checked
      ? (e.style.backgroundColor = "#000")
      : (e.style.backgroundColor = "#FFF");
  }
  if (box.checked) {
    header.style.backgroundColor = "#000"; // ou a cor do tema escuro
  } else {
    header.style.backdropFilter = "blur(1.5px)";
    header.style.backgroundColor = "transparent";
  }
}
interruptor.addEventListener("click", function (e) {
  e.preventDefault();
  ((box.checked = !box.checked), changeMode());
});
