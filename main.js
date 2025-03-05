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
      ? ((e.style.color = "#FAF9F6"),
        (interruptor.innerHTML = "Mudar Tema"))
      : ((e.style.color = "#1c1c1c"));
        // (interruptor.innerHTML = "Apagar as Luzes"));
  }
  for (t = 0; t < o.length; t++) {
    let e = o[t];
    box.checked
      ? (e.style.backgroundColor = "#1c1c1c")
      : (e.style.backgroundColor = "#FAF9F6");
  }
}
interruptor.addEventListener("click", function () {
  (box.checked = !box.checked), changeMode();
});
