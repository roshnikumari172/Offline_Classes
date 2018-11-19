// Get the HTML Elements
var originalTextElement = document.querySelector('.text-section-div p');
var textAreaElement = document.querySelector('#text-area');
var textAreaBorder = document.querySelector('#text-area');
var minutesElement = document.querySelector('#minutes');
var secondsElement = document.querySelector('#seconds');
var resetButton = document.querySelector('#reset');
var congratsMessage = document.querySelector('.cong-section');
var textArray = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur autem culpa,',
    'deleniti fugit labore laudantium nobis odit porro praesentium quasi quia sapiente ',
    'sed suscipit tempore ut? Dignissimos eos molestiae nihil pariatur temporibus. Animi',
    'cumque doloremque eligendi, facere obcaecati optio perferendis voluptatum. ',
    'Accusamus accusantium ad, assumenda, eius et fugiat inventore ipsam maxime minima ',
    'minus nesciunt optio provident quisquam quod saepe sed suscipit totam. Accusantium',
    'consectetur dolorem ducimus earum iste laborum molestias porro tempora. A amet,',
    'animi, consectetur cumque dolore exercitationem explicabo ipsa iure maiores odit',
    'perspiciatis provident quisquam quod ratione repellendus saepe tempora vel veniam ',
    'quisquam quod ratione repellendus saepe tempora vel veniam voluptas voluptatum! Labore obcaecati sequi veniam.',
    'tempore ut? Dignissimos eos molestiae nihil pariatur temporibus. Animi cumque doloremque eligendi'];

var timer = 0;
var minutes = 0;
var seconds = 0;
var interval = 0;
var timerRunning = false;

// keyPress Event for TextArea
textAreaElement.addEventListener('keypress',function() {
   var textEnteredLength = textAreaElement.value.length;
   if(textEnteredLength === 0 && !timerRunning){
       // start timer
       interval = setInterval(startTimer,10);
       timerRunning = true;
   }
});

// Keyup Event for TextArea
textAreaElement.addEventListener('keyup',function() {
   var originalText =  originalTextElement.textContent;
   var textEntered = textAreaElement.value;
   var partialText = originalText.substr(0,textEntered.length);
   if(textEntered === ''){
       // gray
       textAreaBorder.style.borderColor = 'gray';
   }
   else{
       if(textEntered === originalText){
           // green
           textAreaBorder.style.borderColor = 'seagreen';
           // stop the Timer
           clearInterval(interval);
           // display the Congrats Message
            congratsMessage.style.display = 'block';
       }
       else{
           if(textEntered === partialText){
               // blue
               textAreaBorder.style.borderColor = 'lightblue';
           }
           else{
               // red
               textAreaBorder.style.borderColor = 'orangered';
           }
       }
   }
});

// click on Reset Button
resetButton.addEventListener('click',function() {
    // Stop timer
    clearInterval(interval);
    timer = 0;
    minutes = 0;
    seconds = 0;
    interval = 0;
    timerRunning = false;

    textAreaBorder.style.borderColor = 'gray';
    textAreaElement.value = '';
    minutesElement.textContent = '00';
    secondsElement.textContent = '00';

    // hides the congrats Message
    congratsMessage.style.display = 'none';

    // get the random Text
    getRandomString();

});

// start Timer
function startTimer() {
    minutes = Math.floor((timer/100)/60);
    seconds = Math.floor((timer/100) - (minutes * 60));

    minutesElement.textContent = leadingZero(minutes);
    secondsElement.textContent = leadingZero(seconds);

    timer++;
}

// leading Zero
function leadingZero(time) {
    if(time <= 9){
        return '0' + time;
    }
    else{
        return time;
    }
}

// get the random String
function getRandomString() {
    var randomIndex = Math.round(Math.random() * 10);
    var randomString = textArray[randomIndex];
    originalTextElement.textContent = randomString;
}