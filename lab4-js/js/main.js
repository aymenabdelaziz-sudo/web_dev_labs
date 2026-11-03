//EXO1
const city = "Algiers" ;
const celsius = 21.5 ;
const fahrenheit = celsius*9/5+32 ;
let isWarm=false ;
if(celsius>=20){
    isWarm = true ;
}

console.log(`Algiers: C = ${celsius} , fahrenheit = ${fahrenheit.toFixed(1)}`) ;

console.log(typeof(city),typeof(celsius),typeof(isWarm)) ;

const sentence = isWarm? "Warm Day" : "Cold day" ;
console.log(sentence) ;
const form="21.5" ;
console.log(form+1,Number(form)+1) ;

//EXO2

function mention(grade){
    if(grade<0 || grade>20){
         return "invalid great" ;
    }else if(grade<10){
            return "Fail" ;
    }else if(grade<12){
            return "Pass" ;
    }else if(grade<14){
            return "Good" ;
    }else if(grade < 16){
            return "Very good" ;
    }else{
            return "Excellent" ;
    }
}


console.log(mention(9.5),mention(12),mention(15.75),mention(18),mention(21)) ;

//EXO3

let message =`` ;
for(let x=1;x<=15;x++){
    if(x%3 === 0 && x%5===0){
        message+=`FizzBuzz ` ;
    }else if(x%3 === 0){
        message+=`Fizz ` ;
    }else if(x%5 === 0){
        message+=`Buzz ` ;
    }else{
        message+=`${x} ` ;
    }
}

console.log(message) ;

let amount = 10000 ;
let year = 0 ;
while(amount<20000){
    year++ ;
    amount*=1.05 ;

}


console.log(`${year} years to double (${Math.round(amount)})`) ;

//EXO 4

let grades = [12,8.5,15,17.25,9,14] ;
const result = grades.reduce((sum,p)=>sum+p,0) ;
console.log((result/grades.length).toFixed(2)) ;


console.log(`Best: ${Math.max(...grades)}  worst: ${Math.min(...grades)}`) ;

console.log(grades.filter((p)=> p>=10)) ;

console.log([...grades].sort((a,b)=>b-a));

console.log(grades) ;

console.log(grades.map((p)=>mention(p))) ;

//EXO5

let students = [{
    name:"Amina",group:"G1",grades:[14,16,12]
},{
    name:"Yacine",group:"G2",grades:[9,11,10]
},{
    name:"Lina",group:"G1",grades:[18,17,19]
},{
    name:"karim",group:"G2",grades:null
}]

function AverageOf(list){
    if(list.length===0){
        return 0 ;
    }
    let result = list.reduce((sum,p)=>sum+p,0) ;
    return (result/list.length).toFixed(2) ;

}

const averagestudents = students.map((s)=>{
    
    return {
        name : s.name ,
        average : AverageOf(s.grades?? []) ,

    }
     


})

console.table(averagestudents) ;

const beststudent = averagestudents.reduce((current,best)=>{
   return current.average > best.average? current : best ;
},averagestudents[0])


console.table(beststudent) ;

const g1students = students.filter((s)=> s.group==="G1").map((s)=>s.name) 

console.table(g1students) ;

console.log(JSON.stringify(students[0])) ;

function parseStudent(json){

    try{

        return  JSON.parse(json) ;
        
    }

    catch(error){
        console.error(error.message) ;
        return null ;
    }
}

console.log(parseStudent(JSON.stringify(students[0]))) ;
console.log(parseStudent(`{name: ’Lina’}`)) ;

//Bonus

function isPalindorm(text){
    text = text.toLowerCase().replaceAll(" ","") ;
    let array = text.split("") ;
    let reversedtext = array.reverse().join("") ;

    return text === reversedtext  ;
}

if(isPalindorm(`Never odd or even`)){
    console.log(`Palindorm`) ;
}else{
    console.log(`not Palindorm`) ;
}