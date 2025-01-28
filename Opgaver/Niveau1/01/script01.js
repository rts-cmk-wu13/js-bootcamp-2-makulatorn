function start() {
    var submit = document.getElementById("my-button");
    submit.addEventListener("click", toggle);
  };
  
  function toggle() {
    var color = document.getElementById("my-button");
    var backColor = color.style.backgroundColor;
    color.style.backgroundColor = backColor === "red" ? "green" : "red";
  };
  
  
  start();