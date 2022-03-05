//Advise slip API URL
const url = 'https://api.adviceslip.com/advice';

//DOM nodes
const number = document.getElementById('advice-num');
const quote = document.getElementById('advice-quote');
const btn = document.getElementById('advice-btn');

//Advise rendering function
const renderAdvice = res =>{
    number.innerHTML = `ADVICE #${res.slip.id}`;
    quote.innerHTML = `"${res.slip.advice}"`;
}

//AJAX function using XHR
/*
const getAdvice = () =>{
    const xhr = new XMLHttpRequest();

xhr.responseType='json';
xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE){
        renderAdvice(xhr.response);
    }
}

xhr.open('GET', url);
xhr.send();
}
*/

//AJAX fetching function
const getAdvice = async () =>{
    try {
        const response = await fetch(url, {cache: "no-cache"});
        if (response.ok){
            const jsonResponse = await response.json();
            renderAdvice(jsonResponse);
        } else {
            throw new Error ('Request Failed!');
        }  
    } catch(error){
        console.log(error);
    }
}

//Event handler
btn.addEventListener('click', ()=>{
    getAdvice();
});

