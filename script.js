// variable Assigment
let poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
poem = poem.split(' ');
let timeLeft = 5
let wordCount = 0;
let interval,interval2;
let display = document.createElement('h1');
let container = document.querySelector('div');
display.setAttribute('style', 'text-align: center; color: red; display: block;');
display.textContent = 'click here';
container.appendChild(display);

// function Declarations
const setBg = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  container.style.backgroundColor = "#" + randomColor;
 //color.innerHTML = "#" + randomColor;
}
function numberCountDown(){
  display.textContent = timeLeft;
  timeLeft--;
  if(timeLeft < 0){
    clearInterval(interval);
    wordCountDown();
  }
} 
function speedReader(){
  display.textContent = poem[wordCount];
  wordCount++;
  setBg();
  if(wordCount === poem.length){
    clearInterval(interval2);
    display.textContent = 'Thanks for reading!';
  }
}
function wordCountDown(){
  interval2 = setInterval(speedReader, 1000);
}
function countDown(){
  interval = setInterval(numberCountDown, 1000);
}

// trigger with onclick event of with addEventListener
container.onclick = countDown;
// container.addEventListener('click', countDown);








// let poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
// poem = poem.split(' ');
// let timeLeft = 1;
// let wordCount = 0;
// let interval,interval2;

// function countdown() {
//   if (timeLeft >= 0) {
//     // display.textContent = timeLeft;   
//     console.log(timeLeft);
//   }
//   else if (timeLeft < 0){
//     clearInterval(interval);
//     startTime2();
//     } 
//     timeLeft--; 
// }
// function speedReader() {
// console.log(poem[wordCount]);
//     wordCount++;
//     if(wordCount === poem.length){
//       clearInterval(interval2);
//     } 
// }

// function startTime2(){
//  interval2 = setInterval(speedReader, 1000);
// }
// function startTime() {
//   interval = setInterval(countdown, 1000);
// }

// startTime();