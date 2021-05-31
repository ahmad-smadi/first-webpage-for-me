/*var userName = "pet";

var userName = prompt("What is your pet name ?");
alert("welcome to pet world " + userName );

var petColor = prompt("What is your pet color  ?");

if( petColor === "white") { 
  alert (" Welcome to white world ");
  } else if (petColor === "black"){
    alert("welcome to black world");
  }else {
    document.write( '<img src="https://cf.ltkcdn.net/dogs/images/orig/264655-1600x1030-couple-white-dog.jpg" width="250px" alt="whit dog" />'  );
  }


var petAge = prompt("How old is your pet");{
  alert("please let it happy");
}
*/

/* alert("welcome to the dog world");
let userInput = prompt("how many dogs you have");
while (userInput !=3){
  userInput = prompt("lets try again ! how many dogs you have? hint:choose 3!!");
  if(userInput==3)break;
}

for(var i=0;i<3;i++)
{    document.write("<img src='https://www.logocowboy.com/wp-content/uploads/2020/05/ED1.png'>");
}
*/

/*function sumTotal(a1, a2, a3, a4){
  let total = (a1+a2+a3+a4);
  console.log("the total is", total);
}

sumTotal(1000, 800, 666, 93)

*/

let name1 = prompt("what your dog name");
let dogeFamely = prompt("what is the taype of your dog");


function dogName(name1, dogeFamely) {
  console.log("the dog name is", name1, dogeFamely);
  document.write(`Fullname is <b> ${name1} </b> ${dogeFamely} <br>`);
}

dogName(name1, dogeFamely);