'use strict';

const field = document.querySelector('.app__field');
const searchBTN = document.querySelector('.app__search-btn');
const nameContainer = document.querySelector('.name');
const apiPath = 'https://api.github.com/users/';

const getUserInfo = () => {
  const user = field.value;
  const url = apiPath + user;
  
  fetch(url)
    .then(r=>r.json())
    .then(data=>{
      const fullName = data.name; // Carlos Mañas
      const arrName = fullName.split(' '); // ['Carlos', 'Mañas']
      const userName = arrName[0]; // 'Carlos'

      let items = '';
      
      for (let i=0; i<userName.length;i++) {
        items += `<li class="name__item">${userName[i]}</li>`;
      }
      nameContainer.innerHTML = items;
    });

};

searchBTN.addEventListener('click', getUserInfo);