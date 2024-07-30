let fruit = ["banana", "apple", "grape", "mango"];
console.log(fruit);
console.log(fruit[0]);

fruit[0] = "cherry";
console.log(fruit);
fruit[2] = "tomato";
console.log(fruit);

fruit.pop()
console.log(fruit);
fruit.push("pineapple");
console.log(fruit);

console.log(fruit.includes("apple"));
console.log(fruit.indexOf("apple"));

console.log(fruit.slice(1));
console.log(fruit.slice(1,3));

let extrafruit = fruit.slice(1,3);
console.log(extrafruit);
console.log("original fruit", fruit);

//배열숙제//
let animals= [
    "Aardvark",
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Cat",
    "Caterpillar",
    "Cattle",
    "Chamois",
    "Cheetah",
    "Chicken",
    "Chimpanzee",
    "Chinchilla",
    "Chough",
    "Clam",
    "Cobra",
    "Cockroach",
    "Cod",
    "Cormorant",
    "Dugong",
    "Dunlin",
    "Eagle",
    "Echidna",
    "Eel",
    "Eland",
    "Elephant",
    "Elk",
    "Emu",
    "Falcon",
    "Ferret",
    "Finch",
    "Fish",
    "Flamingo",
    "Fly",
    "Fox",
    "Frog",
    "Gaur", 
    "Gazelle",
    "Gerbil",
    "Giraffe",
    "Grasshopper",
    "Heron",
    "Herring",
    "Hippopotamus",
    "Hornet",
    "Horse",
    "Kangaroo",
    "Kingfisher",
    "Koala",
    "Kookabura",
    "Moose",
    "Narwhal",
    "Newt",
    "Nightingale",
    "Octopus",
    "Okapi",
    "Opossum", 
    "Quail",
    "Quelea",
    "Quetzal",
    "Rabbit", 
    "Raccoon",
    "Rail",
    "Ram",
    "Rat",
    "Raven",
    "Red deer",
    "Sandpiper",
    "Sardine",
    "Sparrow",
    "Spider",
    "Spoonbill",
    "Squid",
    "Squirrel",
    "Starling",
    "Stingray",
    "Tiger",
    "Toad",
    "Whale",
    "Wildcat",
    "Wolf",
    "Worm",
    "Wren",
    "Yak",
    "Zebra"
];

//1번 : 어레이 마지막아이템 "Zebra" 제거하기//
animals.pop();
console.log(animals);
//2번 : 주어진 어레이에 "Dog" 추가하기//
animals.push("Dog");
console.log(animals);
//3번 : 주어진 어레이에 "Mosquito", "Mouse", "Mule" 추가하기//
//푸쉬로 맨 뒤에 추가하는건 위처럼 하니까 알겠는데.. 엠부분에 어케 추가하는지 모르겠음//
//4번 : 해당 어레이에 "Human"이 있는가 확인//
console.log(animals.includes("Human"));
//5번 : 해당 어레이에 "Cat"이 있는가 확인//
console.log(animals.includes("Cat"));
//6번 : "Red deer"를 "Deer"로 바꾸시오//
console.log(animals.indexOf("Red deer"));
animals[77] = "Deer";
console.log(animals);
console.log(animals.includes("Deer"));
console.log(animals.includes("Red deer"));
//7번 : "Spider"부터 3개의 아이템을 기존 어레이에서 제거하시오//
console.log(animals.indexOf("Spider"));
animals.splice(81,3);
console.log(animals);
//8번 : "Tiger"부터 그 이후의 값을 제거하시오(타이거포함임)//
console.log(animals.indexOf("Tiger"));
console.log(animals.slice(0, 84));
//9번 : "B"로 시작되는 아이템인 "Baboon"부터 "Bison"까지 새로운 어레이에 저장하시오//
console.log(animals.indexOf("Baboon"));
console.log(animals.indexOf("Bison"));
console.log(animals.slice(8, 16));
let B = animals.slice(8, 16);
console.log(B);
