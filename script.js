// for(let i = 0;i<10;i++){
//     console.log("누나", i)
// }

///나는 짝수의 결과만 보고싶어 그럼 어떻게 식을 해야할까? -> 첫번째 방법이 더 빠른 처리가 되므로 더 효율적이라고 볼 수 있음
// for(let i = 0;i<10;i+=2){
//     console.log("누낭",i)
// }

// for (let i=0;i<10;i++){
//     if(i%2==0){
//         console.log("누나",i)
//     }
// }

//구구단식 만들기//
for(let i = 2; i<10; i++){
    for(let k = 1; k<10; k++){
        console.log(i+'*'+k+'='+i*k)
    }
}

//while문//
let j = 2
while(j<10){
    console.log("while문 실행", j)
    j++;
}

//for랑 찰떡궁합인 배열..배열과 함께 잘씀
let fruit = ["banana", "apple", "grape", "mango"]

for(let f = 0;f<fruit.length;f++){
    console.log(fruit[f])
}

//숙제1번 1부터 100까지 더하는 for문을 만들고 결과를 출력하시오//
let sum = 0
for(let a=1;a<101;a++){
    sum+=a;
}
console.log(sum);
//선생님답//
// let sum = 0
// for(let i=1;i<100;i++){
//     sum+=i
// }
// console.log(sum)




///숙제2번 1부터 100까지 홀수만 출력하자//
for(let b=1;b<101;b+=2){
    console.log(b)
}
//선생님답//
// for(let i=1;i<100;i+=2){
//     console.log(i)
// }




//숙제3번 1부터 50까지 369결과를 프린트하자//(틀렸음. 잘못알아들어서 3단을 만드는건줄..)
for(let c=1;c<17;c++){
    console.log(c*3)
}
//선생님답//
// for(let i=1;i<50;i++){
//     let stringValue = i.toString()
//     let result = ""
//     for(let j=0;j<stringValue.length;j++){
//         if(stringValue[j] == "3" ||stringValue[j] == "6" ||stringValue[j] == "9"){
//             result+="짝"
//         }
//     }
//     console.log(result.length>0?result:i)
// }




//숙제4번 주어진 숫자가 소수이면 true 아니면 false를 출력하는 프로그램을 짜시오.(못했음)
//선생님답//
let n = 11
let isPrime = true
if (n ===1){
    isPrime = false
}else{
    for(let i=2;i<n;i++){
        if(n % i ==0){
            isPrime = false
        }
    }
}
console.log(isPrime)