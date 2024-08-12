let age = 10
let licence = false

if(age > 20){
    if(licence == true){
        console.log("운전이 가능합니다")
    } else {
        console.log("면허를 따세용")
    }
} else {
    console.log("운전이 불가능합니다")
}

/////숙제/////////

//문제1//
//유저가 입력하는 숫자가 0인지 음수인지 양수인지 판단하는 프로그램을 만드시오//

let input = 5

if(input >= 0){
    if(input == 0){
        console.log("0입니다.")
    } else {
        console.log("양수입니다.")
    }
} else {
    console.log("음수입니다.")
}

///문제1 선생님 정답/////
let number = -1

if(number<0){
    console.log("음수입니다")
}else if(number > 0){
    console.log("양수입니다")
}else {
    console.log("0입니다")
}







//문제2//
//나는 대학교 교수다. 레포트 점수에 따라 등급을 매기는 프로그램을 만드시오//
// 90~100: A //
// 80~89: B //
// 70~79: C //
// 60~69: D //
// less than 59: F //

let point = 100

if(point >59){
    if(90 <= point && point <= 100 ){
        console.log("A")
    }else if(80 <= point && point <=89){
        console.log("B")
    }else if(70 <= point && point <=79){
        console.log("C")
    }else if(60 <= point && point <= 69){
        console.log("D")
    }
} else {
    console.log("F")
}

//선생님 2번 정답//
let score = 60
let grage = ''
if(90<=score && score<=100){
    grade = "A"
}else if(80<=score && score<=89){
    grade = "B"
}else if(70<=score && score<=79){
    grade = "C"
}else if(60<=score && score<=69){
    grade = "D"
}else if(0<=score && scpre<=59){
    grade = "F"
}else {
    console.log("잘못된 범위의 점수입니다")
}
console.log(grade)







//문제3//
//한 지원자가 우리 회사에 지원을 했다. 지원자가 사용 가능한 스킬은 배열에 제공이 된다.
// let skills = ["HTML". "CSS", "Javascript", "React"]
//Javascript와 React 둘다 할줄 알면 "합격!" Jacascript와 React 둘중 하나만 할줄 안다면 "예비", 두 스킬 둘다 없으면 "탈락" 프로그램을 짜시오.//

let having = ["HTML", "CSS"]

if(having = ["Javascript"] && ["React"]){
    console.log("합격")
} else if(having = ["Javascript"] || ["React"]){
    console.log("예비")
} else {
    console.logß("탈락")
}

//선생님 정답3번 이거 헷갈렸음//
let skills = ["HTML", "CSS", "Javascript", "React"]

if(skills.includes("Javascript") && skills.includes("React")){
    console.log("합격!")
}else if(skills.includes("Javascript") || skills.includes("React")){
    console.log("예비")
}else {
    console.log("탈락")
}