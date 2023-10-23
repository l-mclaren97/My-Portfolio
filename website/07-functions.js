/*
function greet(name)
{
  if (!name) 
  {
    console.log(`Hi there!`)
  }
  else
  {
    console.log(`Hello ${name}!`)
  }
  
}
greet(`Millie`)
greet()
*/

/*
function convertToFarenheit(celsius)
{
  let fahrenheit = (celsius*9/5) + 32
  return fahrenheit
}




console.log(convertToFarenheit(25))

console.log(convertToFarenheit(5))

console.log(convertToFarenheit(50))

*/


function meow(number = 1)
{
  for (let i = 0; i < number; i++)
  {
    console.log("meow")
  }
}


meow(8)
