function getColor(){
  const red = randomNum();
  const green = randomNum();
  const blue = randomNum();

  return changePage(red, green, blue)
}


function randomNum(){ 
  return Math.floor(Math.random() * 256)
}

function changePage(r, g, b){
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  document.getElementById('paragraphRGB').innerHTML = `rgb(${r}, ${g}, ${b})`;
}