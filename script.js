let fruit = ["apple", "mango", "strawberry", "pineapple"]

// for(let i=0;i<fruit.length;i++){
//     console.log("누나가 좋아하는 과일은", fruit[i])
// }

for(let item of fruit){
    console.log("누나가 좋아하는 과일은", item)
}

let sentence = "누나는 코딩을 좋아해"

for(let char of sentence){
    console.log("char", char)
}

let person = {
    name: "누나",
    age: 30,
    cute: true,
}

for(let key in person){
    console.log("key", key)
    if(key === "cute"){
        console.log("누나는 귀엽니?", person[key])
    }
}

let color = ["Red", "Black", "Pink"]

for(let key in color) {
    console.log("배열의 키값은?", key)
}

//// 전시간 369 문제 풀이/////
///반복문 좌절하지마~ 원래 반복문이 제일 어려워
///문제 1부터 50까지 숫자중 369 결과를 프린트 하자. 369 숫자에는 짝 이라는 문자가 나와야해..주의해야할것은? 30대에 들어가면 33, 36, 39이럴땐 짝짝 두번이지? 주의해~ 
//내가 착각한게 있는데 3의 배수가 아니고 3,6,9 들어간 숫자에만 짝 치는거임
//힌트를 주면 우리는 33을 볼때 3이니까 짝 뒤에 또 3이니까 짝.. 이런식으로 하나하나 떨어뜨려서 문자로 보고 짝을 한거야. 즉 숫자를 문자로 분리해줘야해.

for(let i=1;i<=50;i++){ //참고로 i++ 는 i=i+1이랑 같아 알쥐?
    let stringValue = i.toString()
    let result = ""
    for(let j=0;j<stringValue.length;j++){ //j는 결국 숫자의 인덱스를 뽑아 내기 위해 만든거야.
        if(stringValue[j] === "3" || stringValue[j] === "6" || stringValue[j] === "9"){
            result = result+"짝"
        }
    }
    console.log(result.length>0?result:i)
}