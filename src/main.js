/*
Exercícios: Módulo 03

Todos os exercícios abaixo necessitam que você esteja com o plugin do Async/Await do Babel e obabel-polyfill 
devidamente configurados. Em alguns exercícios é necessário instalar o Axios.

Exercício

Transforme os seguintes trechos de código utilizando async/await:

// Funão delay aciona o .then após 1s
    const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
    
    function umPorSegundo() {  
        delay().then(() => {    
            console.log('1s');    
            delay().then(() => {      
                console.log('2s');      
                delay().then(() => {        
                    console.log('3s');      
                });    
            })  
        })
    ;}
    
    umPorSegundo();
*/

const minhaPromisse1 = (tempo) => new Promise((resolve, reject) => {
    setTimeout((tempo) => {
        console.log(tempo + 's');
    },1000);
});

async function umPorSegundo() {
    for (let i = 1; i < 4; i++) {
        await minhaPromisse1(i);
    }
}

umPorSegundo();


/*

minhaPromisse().then(response => {
    comsole.log(response);
})
.catch(err => {

});

async function executaPromise() {
    //const response = await minhaPromisse();

   /* console.log(await minhaPromisse());
    console.log(await minhaPromisse());
    console.log(await minhaPromisse());
    console.log(await minhaPromisse());
}

executaPromise();

const executaPromise2 = async () => {
   /* console.log(await minhaPromisse());
    console.log(await minhaPromisse());
    console.log(await minhaPromisse());
    console.log(await minhaPromisse());
}

executaPromise2();


import axios from 'axios';

class Api {
    static async getUserInfo(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        }catch(err) {
            console.warn('Erro na API');
        }
    }
}

Api.getUserInfo('enilton');
*/



