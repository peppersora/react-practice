function increase(number) {
    const promise = new Promise((resolve,reject) => {
        // resolve는 성공, reject는 실패
        setTimeout(() => {
           const result = number+10;
           if(result>50){
            //50보다 높으면 에러발생시키기
            const e = new Error("NumberTooBig");
            return reject(e);
           } 
           resolve(result);
        //number값에 +10후 성공 처리
        }, 1000);
    });
    return promise;
}

// increase(0)
// .then(number => {
//     // promise에서 resolve된 값은 .then을 통해 받아 올 수 있음
//     console.log(number);
//     return increase(number);
//     // promise를 리턴하면
// })
// .then(number => {
//     console.log(number);
//     return increase(number);
// })
// .then(number => {
//     console.log(number);
//     return increase(number);
// })
// // 에러가 발생하면 .catch를 통해 알 수 있다.

// .catch(e => {
//     console.log(e);
    
// });
// 함수 앞부분에 async 키워드 사용하고, 해당 함수 내부에서 promise의 앞부분에
// await 키워드를 사용
async function runTasks() {
    try{
        let result = await increase(0);
        console.log(result);
        result = await increase(0);
        console.log(result);
    }catch(e){
        console.log(e);
    }
}




