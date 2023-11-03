let a,b,c;

a= Number(prompt("Enter the leg a value of the triangle (cm)"));
b= Number(prompt("Enter the leg b value of the triangle (cm)"));
c= Number(prompt("Enter the hypotenuse value of the triangle (cm)"))

  //2.	Then we continue with the conditionals to get the answer.

  //Equilateral Triangle (All its legs are equal)
  if(a==b && b==c && c==a)
	  alert("Its an equilateral triangle")

//Isosceles Triangle (Two of its legs are equal)
  else if(a==b || b==c | a==c)
	  alert("Its an isosceles triangle")

//If the answer is not found yet, the only answer can be a scalene triangle.
  else {
    alert("Its a scalene triangle")
  }




