const {createApp} =Vue;

createApp({
    data() {
        return {
            key:'값1',
            key2:'값2',
            message:'안녕하세요',
            htmlString:'<p style="color:blue;">맑게 겐 푸른 하늘</p>',
            su1:'0',
            su2:'0',
            txtMsg:'',
            googleDoodle:'https://www.google.com/logos/doodles/2024/paris-games-artistic-swimming-day-2-6753651837110563-law.gif'
        }
    },
    methods: {
        myFunc(){
            console.log(this.message);
        },
        myChange1(){
            this.message = "안녕";
        },
        myChange2(){
            this.message = "반가워";
        },
    },
}).mount('#app');
