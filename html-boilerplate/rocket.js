// Loop practice from MDN
const output = document.querySelector(".output");
output.textContent = "";

for(let i = 10; i >= 0; i--){
const para = document.createElement('p');
  if(i === 10){
    para.textContent = `Countdown ${i}`;
  }else if(i === 0){
    para.textContent = "Blast Off!"
  }else{
    para.textContent = `${i}`
  }
output.appendChild(para);
console.log(output);}






