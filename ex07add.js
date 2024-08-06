const {createApp} = Vue;

createApp({
    data() {
        return {
            list : ['아이스 커피', '오렌지 쥬스', '밀크 티', '아바라'],
            objArr : [
                {site:'양양', taketime:'3시간'},
                {site:'청산도', taketime:'6시간'},
                {site:'인천', taketime:'1.5시간'},
            ],
            myArr : ['일', '이', '삼', '사', '오'],
            numArr : [1, 2, 3, 4, 5],
        }
    },
    methods: {
        addList(){
            this.myArr.push('추가');
        },
        addEventListener(arg){
            this.myArr.push(arg, 0, '삽입'); //배열 요소를 제거하고, 새로운 요소로 대체하는 함수
        },
        changeList(arg){
            this.myArr.splice(arg, 1, '수정');
        },
        deleteList(arg){
            this.myArr.splice(arg, 1);
        },
    },
}).mount('#app');