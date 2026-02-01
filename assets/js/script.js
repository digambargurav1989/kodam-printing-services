const slides=document.querySelectorAll('.slide');let i=0;
setInterval(()=>{slides[i].classList.remove('active');i=(i+1)%slides.length;slides[i].classList.add('active')},4000);

function calc(){
  const p=document.getElementById('product').value;
  const q=document.getElementById('qty').value;
  const f=document.getElementById('finish').value;
  document.getElementById('total').innerText=(p*q*f).toFixed(0);
}
product.onchange=qty.oninput=finish.onchange=calc;calc();
