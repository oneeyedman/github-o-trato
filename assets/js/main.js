'use strict';

const field = document.querySelector('.app__field');
const searchBTN = document.querySelector('.app__search-btn');
const nameContainer = document.querySelector('.name');

const api = 'https://api.github.com/users/';


const getUserName = () => {
  const nick = field.value;
  const url = api + nick;

  fetch(url)
    .then(r=>r.json())
    .then(data=>{
      const fullName = data.name.split(' '); // ["Carlos", "Mañas"]
      const userName = fullName[0]; // "Carlos"

      let names = '';
      for (let i=0;i<userName.length;i++) {
        names += `<li class="name__item">${userName[i]}</li>`;
      }
      nameContainer.innerHTML = names;
    });
  
};


searchBTN.addEventListener('click', getUserName);