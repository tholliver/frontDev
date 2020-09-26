$(window).scroll(function () {
  $(".scroll-down").css("opacity", 1 - $(window).scrollTop() / 200);
});

function realTiming() {
  //THE displaying CLOCK
  var rClock = new Date();
  var hora = rClock.getHours();
  var mins = rClock.getMinutes();
  var secs = rClock.getSeconds();

  var AP = hora < 12 ? "AM" : "PM";
  hora = hora > 12 ? hora - 12 : hora;
  hora = ("0" + hora).slice(-2);
  mins = ("0" + mins).slice(-2);
  secs = ("0" + secs).slice(-2);

  document.getElementById('datetime').innerHTML =
    hora + " : " + mins + " : " + secs + " " + AP;
  var t = setTimeout(realTiming,500);
}

//The focus the cursor in the search bar
document.getElementById("realbox").focus();
document.getElementById("realbox").select();


/*//Context no selecction
document.addEventListener(
  "contextmenu",
  function (e) {
    e.preventDefault();
  },
  false
);*/
