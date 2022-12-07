

function change() {
    let x = String(Math.floor((Math.random() * 1000000)));
    document.body.style.backgroundColor = "#" + x;
  }
  
  setTimeout(change, 5000);
  
  function bold() {
    document.body.style.fontWeight = "bold";
  
  }
  
  function italic() {
    document.body.style.fontStyle = "italic";
  
  }
  
  function underline() {
    document.body.style.textDecoration = "underline";
  }