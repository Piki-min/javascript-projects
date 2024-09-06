const userInput = document.getElementById("userInput");
const submit = document.getElementById("submit");
const resultShow = document.getElementById("resultShow");
const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum) + 1) + minNum;

let attempts = 0;
let running = true;

submit.onclick = function(){
    if(running){
        let inputValue = Number(userInput.value);

        if(isNaN(inputValue)){
            resultShow.textContent = "Invalid Input !";
        }
        else if(inputValue > maxNum || inputValue < minNum){
            resultShow.textContent = "Invalid Input !";
        }
        else{
            attempts++;
            if(inputValue > answer){
                resultShow.textContent = "Too High";
            }
            else if(inputValue < answer){
                resultShow.textContent = "Too Low";
            }
            else{
                resultShow.textContent = "Congratulations! You guessed the right answer.";
                running = false;
            }
        }
    }
}
