window.onload=()=>{
    //variables
    const getQuote=document.querySelector('#get-quote'),tweet=document.querySelector('#tweet');
    let quote=document.querySelector("#quote"),author=document.querySelector('#author'),y,z;
    //get the quote and the author
    const f=fetch('https://gist.githubusercontent.com/dmakk767/9375ff01aff76f1788aead1df9a66338/raw/491f8c2e91b7d3b8f1c8230e32d9c9bc1a1adfa6/Quotes.json%2520').then(resp=>resp.json());
    //set a default quote
    f.then(data=>{
        y=quote.textContent=data[Math.floor(Math.random()*data.length)].quote;
        z=author.innerHTML = data[Math.floor(Math.random() * data.length)].name;
    });
    //get a new quote
    getQuote.addEventListener('click',e=>{
        e.preventDefault();
        f.then(data => {
        y=quote.textContent = data[Math.floor(Math.random() * data.length)].quote;
           z= author.innerHTML = data[Math.floor(Math.random() * data.length)].name;});
    })
    //tweet the quote
    tweet.addEventListener('click',()=>{
        tweet.setAttribute('href',`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${y}" ${z}`)
    })
}