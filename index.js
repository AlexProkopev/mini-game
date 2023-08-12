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
  
  if ((stepLeft >= 29 && stepLeft <= 31) && (stepDown >= 29 && stepDown <= 31)) {
    alert("Вы проиграли");
    location.reload()
} else if ((stepLeft >= 44 && stepLeft <= 46) && stepDown === 50) {
    alert("Вы проиграли");
    location.reload()
} else if ((stepLeft >= 14 && stepLeft <= 16) && (stepDown >= 23 && stepDown <= 25)) {
    alert("Вы проиграли");
    location.reload()
} else if ((stepLeft >= 23 && stepLeft <= 25) && stepDown === 59) {
    alert("Вы проиграли");
    location.reload()
} else if ((stepLeft >= 9 && stepLeft <= 11) && stepDown === 34) {
    alert("Вы проиграли");
    location.reload()
} else if (stepLeft === 50 && stepDown === 50) {
    alert("Вы выиграли");
    location.reload()
}
    

};

document.addEventListener('keydown', checkedKey);
