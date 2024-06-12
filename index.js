let cards =  document.getElementById('cards')
let url =  'https://jsonplaceholder.typicode.com/users'

fetch(url)
  .then((response) => response.json() ) 
  .then((res) => getData((res)) ) 
  .catch((err) => console.log(err) )


  function getData(data) {
    for (const iterator of data) {
        let card = document.createElement('div')
        let btn = document.createElement('button')
        let p = document.createElement('p')
        let h3 = document.createElement('h3')


        btn.innerHTML = 'More ' + iterator?.name;
        h3.innerHTML = 'More ' + iterator?.username;
        p.innerHTML = 'More ' + iterator?.email;
        card.classList.add('card')
        card.appendChild(h3)
        card.appendChild(p)
        card.appendChild(btn)
        cards.appendChild(card)

    }
    
  }