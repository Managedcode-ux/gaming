const start = document.getElementById('conformation')

const fire = document.getElementById('fire')
const table = document.getElementById('table1')
const sc = document.getElementById("score");

let score_one = [];
let score_two = [];
round=0


//FUNCTION FOR GENERATING POWER B/W (0,5)
let generatePower = () =>{
    return(Math.floor(Math.random() * 6))
}

// FUNCTION FOR ADDING TABLE AND MATCHES WON DYNAMICALLY
let generateTemplate = (one,two) => {
    const html = `
        <tr >
            <td>Round ${round+1}</td>
            <td>${one}</td>
            <td>${two}</td>
        </tr>
    `;
    table.innerHTML += html;

    sc.innerHTML = " "
    temp = `
    <button type="button" class="btn btn-info" id="score1">Player 1 Won :- ${score_one.length}</button>
    <button type="button" class="btn btn-info "id="score2">Player 2 Won:- ${score_two.length}</button>
    `
    sc.innerHTML +=temp; 
}

//FUNCTIONS FOR CALCULATING WINNERS
const oneWon = () =>{
    score_one.push(1);
    generateTemplate("WON","LOST");
}
const twoWon = () =>{
    score_two.push(1);
    generateTemplate("LOST","WON");
}


let winnerCheck = () => {
    if(score_one.length == 3){
        document.getElementById("result").style.display="block";
        document.getElementById("result").innerText = "PLAYER 1 HAS WON THE GAME";
        return true;
    }
    if(score_two.length == 3){
        document.getElementById("result").style.display="block";
        document.getElementById("result").innerText = "PLAYER 2 HAS WON THE GAME";
        return true;
    }

    return false;
}


//START OF PROGRAM
fire.addEventListener("click",() => {

    if(round <= 4 ){
        let health_one = 100;
        let health_two = 100;
       
        while(health_one > 0 && health_two > 0){
            let p1_hitPoint = generatePower();
            let p2_hitPoint = generatePower();
            health_one = health_one - p2_hitPoint;
            health_two = health_two - p1_hitPoint
        }
        if(health_one > health_two){
            oneWon();
        }
        else if(health_one < health_two){
            twoWon();
        }
        round++;
        if(winnerCheck() == true){
            document.getElementById('fire').style.display='none';
        }
    }    
});




