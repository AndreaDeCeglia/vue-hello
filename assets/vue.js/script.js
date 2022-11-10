/*
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, 
utilizzando i data.

Bonus:
Aggiungere alla pagina un’immagine, 
presa anch’essa da un data.
*/

var app = new Vue({

    el: '#root',

    data: {
        message: `Hey, I'm your first vue.js' sheet!!!!!!!`,
        btnText: `clickMe At All !!!!!!!`,
        image: `https://img.freepik.com/premium-photo/bright-green-lawn-close-up-view-from-acid-green-color_96872-896.jpg?w=740`,
        dinamicClass: `green`,
    },

    methods: {
        clickItAtAll: function(){
            if( this.dinamicClass == 'green' ){
                return this.dinamicClass ='blue';
            } else {
                return this.dinamicClass ='green';
            }
        }
    }
})

