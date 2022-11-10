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
        btnText: `what d'ya prefer??? !!!!!!!`,
        dinamicClass: ['loan', 'classAdded'],
    },
   
    methods: {
        clickItAtAll: function(){
            if( this.dinamicClass.includes('loan') ){
                this.dinamicClass =  ['sea', 'classAdded'];
                this.message = 'Hey, you clicked me !!!'
            } else {
                this.dinamicClass = ['loan', 'classAdded'];
                this.message += 'again'
            }
        }
    }
})

