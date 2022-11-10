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
        image: `https://img.freepik.com/premium-photo/bright-green-lawn-close-up-view-from-acid-green-color_96872-896.jpg?w=740`,
    },

    methods: {
        clickItAtAll: function(){
            return this.bgc = ".green";
        }
    }
})

