const numA = document.getElementById('numA');
const numB = document.getElementById('numB');
const form = document.getElementById('form');
const message = document.getElementById('message');

function validaNum(A, B) {
  if(A > B){
    return false;
  } else {
    return true;
  }
}

form.addEventListener('submit', function(e){
  e.preventDefault();

  if(!validaNum(numA.value, numB.value)){
    console.log('estou aqui');
    message.innerHTML = 'O número A deve ser menor que o número B, tente novamente!';
    message.classList.add('error-msg');
    message.classList.remove('sucess-msg');
    message.style.display = 'block';
  } else {
    console.log('agora estou aqui');
    message.innerHTML = 'Correto!! O número A é menor que o número B';
    message.classList.add('sucess-msg');
    message.classList.remove('error-msg');
    message.style.display = 'block';
  }
})
