//palindrome number or not

w=document.createElement("Button")
w.setAttribute("onclick","addition();");
w.innerHTML="click Me"
document.body.appendChild(w);

function addition(){
   x=document.createElement("Button");
   x.setAttribute("onclick","single();"); 
   x.innerHTML="start";
   document.body.appendChild(x)
}

function single(){
	var y = document.createElement("input");
    y.setAttribute("type", "text");
    y.setAttribute("placeholder", "Enter the number:");
    y.setAttribute("id","n");
    document.body.appendChild(y);

    z=document.createElement("Button");
    z.setAttribute("onclick","run();");
    z.innerHTML="run";
    document.body.appendChild(z)
} 

function run()
{
num1 = Number(document.getElementById("n").value);
var rev = 0;
while(num1>0){
	rem=num1%10;
	rev=(rev*10)+rem
	num1=(num1-rem)/10;
}
document.write("The reversed number is"+ " "+rev);
alert(rev)


if(num1==rev)
{
	console.log("The given number is palindrome");
}
else
{
	console.log("The given number is not a palindrome");
}
}

