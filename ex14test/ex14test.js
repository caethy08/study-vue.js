const {createApp} = Vue;

createApp({
    data() {
        return {
            jikdatas:[],
            count:0,
            averpay:0
        };
    },
    methods: {
        onClick(){
            fetch('http://localhost/web_react/jikwoninfo.jsp')
                    .then(response => {
                    if(response.ok){
                        return response.json();
                    }
                    throw new Error('Ajax 에러');
                })
                .then(data => {
                    console.log(data.jikwon.name);
                })
                .catch(error => {
                    console.log('읽기 오류 : ', error);
                });
            },
        }
    }).mount('#app')