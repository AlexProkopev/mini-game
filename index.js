const container = document.querySelector('[data-start]');
const divStartRef = document.querySelector('[data-box]');
const divEndtRef = document.querySelector('[data-end]');

//* нужно что бы квадрат добрался до другого квадрата, будем делать просто плюс несколько шагов кцели,через фор или что то другое будем добавлять значение

let stepLeft = 1;
let stepDown = 1;

const checkedKey = event => {
    event.preventDefault()
    let currentTargetKey = event.key;

  switch (currentTargetKey) {
    case `ArrowRight`:
      stepLeft += 1;
      divStartRef.style.left = `${stepLeft}%`;
      break;
    case `ArrowDown`:
      stepDown += 1;
      divStartRef.style.top = `${stepDown}%`;
      break;
    case `ArrowUp`:
      divStartRef.style.top = `${stepDown}%`;
      stepDown -= 1;
      break;
    case `ArrowLeft`:
      divStartRef.style.left = `${stepLeft}%`;
      stepLeft -= 1;
      break;
  }
  

  if (stepLeft === 50 && stepDown === 50) {
    alert("Вы выиграли");
    location.reload()
  }  else if ((stepLeft >= 8.5 && stepLeft <= 11) && (stepDown >= 31 && stepDown <= 39)) {
    alert("Вы проиграли");
    location.reload()
} else if ((stepLeft > 13.5 && stepLeft < 18.5) && stepDown > 20.5 && stepDown < 28.5) {
    alert("Вы проиграли");
    location.reload()
} else if ((stepLeft >= 27.5 && stepLeft < 32.5) && (stepDown >= 25.5 && stepDown <= 35.5)) {
    alert("Вы проиграли");
    location.reload()
}  else if ((stepLeft >= 43 && stepLeft <= 47) && (stepDown >= 46 && stepDown <= 54)) {
    alert("Вы проиграли");
    location.reload()
} else if ((stepLeft >= 22 && stepLeft <= 26) && (stepDown >= 56 && stepDown <= 64)) {
    alert("Вы проиграли");
    location.reload()
    
} 
    

};

document.addEventListener('keydown', checkedKey);
