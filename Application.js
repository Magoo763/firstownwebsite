


function Action(){
console.log("hello");
var age;
var name;
var time;
var have
age=document.getElementById("flo").value;
name=document.getElementById("coo").value;
time=document.getElementById("yo").value;
var danimation=document.getElementById("yos");
//check for names

var ac=0;
var a=0;
var b=0;
var c=0;
var d=0;


if (isNaN(age))
{

	a=1;

}
	else
	{
		if (age<18)
		{



		b=1;
		ac=1;
		}


	}




if (isNaN(time))
{
	c=1;



}
	else {
		if (time>10 || time<1)
			d=1;



	}


	if (a==1 && c==1){


		alert("Both variables for time and age are not numbers.  Please enter in a number");


	}

	else if (a==1 || c==1)
	{
		alert("Please check your time and age input to see if they are both numbers!");


	}

	else {
			if (ac==1 && d==1)
			{
				alert("Not only are you not old enough, but you choose wrong time variables");

			}

			else if (ac==1)
				alert("You are not old enough");

			else if (d==1)
				alert("Please enter a number between 1 and 10");

		}





if (a==0 && b==0 && c==0 && d==0)
{

	console.log("Alright, this is correct");
	document.getElementById("results").innerHTML="Alright  "+name+ ", this will run for "+time + " seconds";

	danimation.setAttribute("animation-duration", "4s");

}




}
