//문제1 "안녕 내 이름은 제시카야"라는 문장을 프린트 하는 함수 'greet'을 만드시오//
// function greet(){
//     console.log("안녕 내 이름은 제시카야")
// }

//문제2 이름을 매개변수로 전달받아 다양한 이름을 프린트 할 수 있게 함수를 수정하시오 예)"안녕 내이름은 에밀리야", "안녕 내이름은 할리야"
// function greet(name){
//     console.log("안녕 내 이름은 "+name+"야");
// }

// greet("에밀리")

//문제3 매개변수로 전달 받은 이름을 반환하게 함수를 수정하시오.
function greet(nickname){
    // console.log("안녕 내 이름은 " + nickname + "야");
    return nickname;
    }
    
let returnname = greet("에밀리")
console.log(returnname);

//문제4 meetAt 함수를 만들어주세요
//인자를 세개 받습니다. 
//  첫번째 인자는 년도에 해당하는 숫자입니다.
//  두번째 인자는 월에 해당하는 숫자입니다.
//  세번째 인자는 일에 해당하는 숫자입니다.
// 년도 인자만 받았을 경우 -> 1234년 같은 형식의 문자열을 리턴해주세요
// 년도, 월의 인자를 받았을 경우 -> 1234년 5월 같은 형식의 문자열 리턴
// 년, 월, 일 모두 받았을 경우 -> 1234/5/4 같은 형식의 문자열 리턴
// 결과 예시
// meetAt(2022) -> 2022년
// meetAt(2032, 3) -> 2032년 3월
// meetAt(2032, 10, 29) -> 2032/10/29 
// 내가쓴답
// function meetAt(year, month, day){
//     if(year !== undefined && month == undefined && day == undefined){
//         return year + "년"  
//     }else if(year !== undefined && month !== undefined && day == undefined){
//         return year + "년" +  month + "월"
//     }else {
//         return year + "/" +  month +  "/" + day
//     }
// }

function meetAt(year, month, date){
    if(date) {
        return `${year}/${month}/${date}`;
    }
    else if(month) {
        return `${year}년 ${month}월`;
    }
    else if(year) {
        return `${year}년`;
    }
}

console.log(meetAt(2022, 1, 7))



//문제5번 findSmallestElement 함수를 구현해주세요. 
//findSmallestElement의 arr인자는 숫자 값으로만 이루어진 배열입니다.
//arr 의 값들 중 가장 작은 값을 리턴해주세요
//만일 arr가 비어있으면 0을 리턴해주세요
//예를 들어, 다음과 같은 배열이 인자(input)으로 들어왔다면 0이 리턴 되어야 합니다.
// [100, 200, 3, 0, 2, 1] --> 0이 리턴 되어야 함


// function findSmallestElement(arr){
//     if(arr === 0){
//         return 0;
//     }else if(arr.length == 0){
//         return 0;
//     }
//     else {
//         return min;
//     }
// }

// let arr = [];
// let min = Math.min(...arr);

// console.log(min);

// 이렇게 하면 계속 값이 infinity가 나오는데 왜 그런지 모르겠어.. 내 생각엔 배열이 비어있으니까 0이 나와야 하지 않아??
//위에가 내 첫번째 코드고 코드에서 발생하는 문제는 

// gpt 답변 ->>문제는 코드에서 min 변수에 Math.min(...arr)을 할당했기 때문에 발생합니다. 
// 빈 배열에 대해 Math.min을 사용했기 때문입니다. Math.min은 전달된 숫자들 중 가장 작은 값을 반환하지만, 
// 전달된 배열이 비어 있으면 Infinity를 반환합니다. 이는 자바스크립트의 Math.min 함수의 특성입니다.
// 이때 배열이 비어 있으므로 Math.min은 비교할 값이 없어서 Infinity를 반환하는 것입니다
//내 답
// function findSmallestElement(arr){
//     if(arr.length === 0){
//         return 0;
//     }
//     else {
//         return Math.min(...arr); ///math.min은 배열에서 제일 작은수를 찾아주는 함수야. 근데 배열이 비어있으면 안돼 비어있으면 infinity가 나옴
//     }
// }

// let arr = [100, 0, 1];
// let min = findSmallestElement(arr); //아까와 다르게 먼저 배열이 비어있는지를 확인하고 나서 min을 찾는 것으로 변경

// console.log(min);
function findSmallestElement(arr) {
    let result = arr[0];
    if (arr.length === 0){
        return 0;
    }
    for(let i = 1; i < arr.length; i++){
        if(result > arr[i]){
            result = arr[i];
        }
    }
    return result;
}

let smallestNumber = findSmallestElement([100,200,3,0,2,1])
console.log(smallestNumber)



//문제 6 돈을 매개변수로 받으면 몇개의 지폐와 동전이 필요한지 최소 개수를 계산해주는 함수를 만드시오
//출력 예)
// 12,300인 경우
// 50,000 * 0
// 10,000 * 1
// 5,000 * 0
// 1,000 * 2
// 500 * 0
// 100 * 3
//하다가 만 답
// function money (number){
//    let values = [50000, 10000, 5000, 1000, 500, 100];
//    for(let i = 0; i<values.length; i++){
//     let k =  number % i;
//     console.log(parseInt(number / i));
//     for(let k = 0; k<values.length; k++){
//                                            ////마지막 문제는 진짜 모르겠다.. 이중 포문인것 같은데..
//                                           /////나머지값을 다시 데리고 와서 몫은 개로 냅두고 나머지를 또 내려서 계산하고싶은데..d
//     }
//    }
// }

// let solution = money(48600)
// console.log(solution)

let unit = [50000, 10000, 5000, 1000, 500, 100]
function changeCalculate(money){
    for(let i=0;i<unit.length;i++){
        let num = Math.floor(money / unit[i])
        console.log(unit[i]+"X"+num)
        money = money - (unit[i]*num)
    }
}
changeCalculate(46800)