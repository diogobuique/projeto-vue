new Vue({
    el:'#desafio',
    data: {
        nome: 'Diogo',
        idade: 33,
        imagem:'http://www.itec.al.gov.br/images/brasao.png'
    },
    methods:{
        idadeVezes3(){
            return this.idade * 3
        },
        random(){
            return Math.random()
        }
    }

})