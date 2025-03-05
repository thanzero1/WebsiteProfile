const linkInterruptor = document.querySelector("#interruptor");
let box = document.querySelector("#checkbox"),
  interruptor = document.querySelector("#interruptor");
function changeMode() {
  var r = document.querySelectorAll(".change"),
    o = document.querySelectorAll(".BgChange");
  let t = 0;
  for (t = 0; t < r.length; t++) {
    let e = r[t];
    box.checked
      ? ((e.style.color = "#F9F6EE"),
        (interruptor.innerHTML = "Mudar Tema"))
      : ((e.style.color = "##353935"));
        // (interruptor.innerHTML = "Apagar as Luzes"));
  }
  for (t = 0; t < o.length; t++) {
    let e = o[t];
    box.checked
      ? (e.style.backgroundColor = "#353935")
      : (e.style.backgroundColor = "#F9F6EE");
  }
}
interruptor.addEventListener("click", function () {
  (box.checked = !box.checked), changeMode();
});
