
const secretnumber = Math.floor(Math.random() * 100) + 1

let attempts = 0
let won = false
let quit = false

while (attempts < 7) {

let guess = (prompt('Guess a number from 1-100'))  
  if (guess === null) {
    console.log('you quit')
    quit = true
    break
  }

  guess = Number(guess)
attempts++  
if (guess === secretnumber) {  
    console.log('Correct')  
    console.log(`you got it in ${attempts} attempts`)
  won = true
    break  
}  
else if (guess > secretnumber) {  
    console.log('Too High')  
}  
else {  
    console.log('Too low')  
}


}
  if (won === false && quit === false) {
console.log('you ran out of attempts')
    console.log(secretnumber)
  }
