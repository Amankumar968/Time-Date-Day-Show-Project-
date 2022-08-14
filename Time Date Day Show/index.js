 // 1. Ways to print in javaScript
    //  console.log("Hello World");
    //  alert("me");
    //  document.write("this is document write");

    // 2.Javascript console API
   //  console.log ("Hello World ",4+6 ,"Another log");
   //  console.warn("this is an Warning");
   //  console.error("This is an error");


   //  3.Javascript VARIABLES
   //What are variable ? Containers to store data valuers
// var number1 =35;
// var number2=38;
// console.log (number1+ number2);

// 4. DATA TYPES IN JAVASCRIPT
var num1=455;
var num2=55.56;
// console.log(num1);
// console.log(num2);

//STRING
var str1="THhis is a string ";
var str2="This is also a string";

// console.log (str1);
// console.log (str2);
    
// OBJECTS
var marks ={
   ravi:34,
   shubham:78,
   harry:99.987
}
// console.log (marks);

//BOOLEAN
var a=true;
var b=false;
// console.log(a,b);


// var und=undefined;
var und;
// console.log (undefined);

var n=null;
// console.log (n);

/*
At a very high level ,there are two types of data in javascript

1. Primitive data types: undefiend,null,number ,string,boolean,symbol

2. Reference data types: Arrays and objects

*/

/**********************************Arrays************************************************************* */
var arr=[1,2,3,4,5,"aman"];
// console.log(arr);                      
// console.log (arr[1])  //->2

// console.log (arr[4]); //->5

// console.log (arr[3]);//->4
// console.log (arr[5]);//->aman



/***************************************OPERATORS IN JAVASCRIPT*********************** */
//Arithmetic Operators
var a=100;
var b=10;

// console.log ("The value of a+b is ",a+b);
// console.log ("The value of a-b is ",a-b);
// console.log ("The value of a*b is ",a*b);
// console.log ("The value of a/b is ",a/b);


//ASSIGNMENT OPERATOR
var c=b;
// c+=2;

// c-=2; //c=c-2

// c*=2;

// c/=2;
// console.log(c);


//Comparison Operator

var x=34;
var y=56;

// console.log (x==y);
// console.log (x>=y);
// console.log (x<=y);
// console.log (x>y);
// console.log (x<y);

//LOGICAL OPERATOR (Logical AND)

// console.log (true && true);
// console.log (true && false);
// console.log (false && true);
// console.log (false && false);

//LOGICAL OR
// console.log (true || true);
// console.log (true || false);
// console.log (false || true);
// console.log (false || false);

//LOGICAL NOT
// console.log (!false);
// console.log (!true);


/******************************FUNCTION  IN JAVASCRIPT**************************************** */
// function avg(a,b)
// {
//    return a+b/2;
// }
// c1=avg(4,6);
// c2=avg(4,9);
// console.log (c1);
// console.log (c2);

 
/********************CONDITIONALS IN JAVASCRIPT**************************************************** */
var age=19;
// // if (age>8)
// // {
// //    console.log ('you are not a kid');
// // }
// // else 
// // {
// //    console.log ('I am kid');
// // }

// //if -else ladder
var age=36;
// if (age>32)
// {
//    console.log ("your are not a kid");
// }
// else if (age>26)
// {
//    console.log ("Bachhe nhi rehe");
// }
// else if (age>18)
// {
//    console.log ("18 bache nhi rhe");
// }
// else 
// {
//    console.log ("Bache rahe");
// }

// console.log ("end of ladder");


/********************************************LOOPS IN JAVASCRIPT**************************************/

 var arr =[1,2,3,4,5,6,7];
// console.log (arr);
// for (var i=0;i<arr.length;i++)
// {
//    console.log (arr[i]);
// }

// arr.forEach(function(element)
// {
//    console.log (element);
// })


let j=5;
// const a=0;
// a=a+1;

// while (j<arr.length)
// {
//    console.log (arr[j]);
//    j++;
// }

// do {
//    console.log(arr[j]);
//    j++;

// }while (j <arr.length);

/*************************BREAK AND CONTINUE************************************************************** */
// var arr=[1,2,3,4,5,6,7];
// for (var i=0;i<arr.length;i++)
// {
//    if (i==2)
//    {
//    //break; //12
//    continue; //1245697
//    }
//    console.log (arr[i]);
// }


/*************************************ARRAY METHODS************************************************ */
// let myArr=["fan","camera",34,null,true];

// console.log (myArr.length);
// myArr.pop(); // last ka ek element hat jaega true hat jaega
// myArr.push("aman"); //last me add ho jaega aman
// myArr.shift()  //fan hat jaega
// myArr.unshift ('AMAN'); //AMAN first me add ho jaega

// const newLen =myArr.unshift("Harry");
// console.log(newLen);
// console.log (myArr);

/********************************STRING METHODS IN JAVASCRIPT******************************** */
let mylovelyString="Harry is a good boy good good";
// console.log (mylovelyString.length);
// console.log (mylovelyString.indexOf("good"));
// console.log (mylovelyString.lastIndexOf("good"));

// console.log (mylovelyString.slice(1,3));
d=mylovelyString.replace("harry","Rohan")
// d=d.replace("good","bad");
// console.log (d,mylovelyString);

/**************************************DATES IN JAVASCRIPT*********************************************** */
let myDate=new Date ();
// console.log (myDate.getTime());
// console.log (myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

/********************************DOM MANUPULATION IN JAVASCRIPT***************************************** */
let elem=document .getElementById('click')
// console.log (elem);

let elemClass=document .getElementsByClassName("container");
// console.log (elemClass);
//elemClass[0].style.background="yellow"
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success")
// console.log(elem.innerHTML);
// console.log(elem.innerText);

//console.log(elementClass[0].innerHTML);
//console.log(elemClass[0].innerText);

// tn=document.getElementsByTagName('div');
// console.log(tn);
// createdElement=document.createElement('p');
// createdElement.innerText="This is a created para";
// tn[0].appendChild(createdElement);

// createdElement2=document.createElement('b');
// createdElement2.innerText="This is a created bold";
// tn[0].replaceChild(createdElement2,createdElement);
// // removeChild(element); -->removes an element


// //Selecting using Query
// sel=document.querySelector('.container');
// console.log(sel);

// sel=document.querySelectorAll('.container');
// console.log(sel);

/******************************************* EVENTS IN JAVASCRIPT***************************************** */
// function clicked()
// {
//    console.log ("The button was clicked" )
// }

// window.onload=function()
// {
//    console.log('The document was loaded');
// }

// firstContainer.addEventListener('click',function(){
//    document.querySelectorAll('.container')[1].innerHTML="<b> we hava clicked <b/>"
// console.log("clicked on Container");
// })

// firstContainer.addEventListener('mouseover',function(){
//    console.log("Mouse on container on Container");
//    })

//    firstContainer.addEventListener('mouseout',function(){
//       console.log("Mouse out container ");
//       })
 

/**********************very important************************************* 
// let prevHTML =document.querySelectorAll('.container')[1].innerHTML;
//       firstContainer.addEventListener('mouseup',function(){
//          document.querySelectorAll('.container')[1].innerHTML=prevHTML;
//          console.log("Mouse up when click on container on ");
//          })


//          firstContainer.addEventListener('mousedown',function(){
//          document.querySelectorAll('.container')[1].innerHTML="<b> We have clciked <b/>"
//             console.log("Mouse down when click  on Container");
//             })    */


/****************************************JAVASCRIPT SETTIMEOUT AND SETINTERVAL************************** */
  
// sum=(a,b)=>{
//    return a+b;
// }
// logkaro=()=>{
//    document.querySelectorAll('.container')[1].innerHTML="<b> Set interval fired <b/>"
//    console.log ("I am your log");
// }

//SETTIME OUT
 //clr=setTimeout(logkaro ,5000);  //2000 mean 2 sec

// clr=setInterval(logkaro ,2000);
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout

/*******************************LOCAL STORAGE IN JAVASCRIPT******************************************* */

// localStorage.setItem('name','harry');
// localStorage
// localStorage.getItem('name');
//localStorage.removeItem('name')
//localStorage.clear();



/*************************************JASON IN JAVASCRIPT******************************************* */
// obj={name:"Aman",length:1};
// jso=JSON.stringify(obj);
// console.log(typeof jso);
// parsed =JSON.parse('{"name":"harry","length":1,"a":{"this":"that"}}');
// console.log(parsed);

/*********************************TEMPLETE LITRALS-BACKTICKS************************************************************** */

a=34;
console.log('this is my ${a}');
/*********************************************JAVASCRIPT VERSION******************************************** */
