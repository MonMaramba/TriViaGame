//define variables for user answers, correct answers, wrong answers,
var correct = 0;
var wrong = 0;

var qObj1 = {
    mainq: "1. Who runs the Kwik-E-Mart?",
    ans1: "2. Montgomery Burns",
    ans2: "3. Timothy Lovejoy",
    ans3: "3. Apu Nahasapeemapetilon",
    ans4: "4. Weylon Smithers",
    ansKey: "3",
}

var qObj2 = {
    mainq: "Who was Lisa's saxophone mentor?",
    ans1: "1. Eleanor Abernathy",
    ans2: "2. Lurleen Lumpkin",
    ans3: "3. Marcus 'Marbles' Le Marquez",
    ans4: "4. Oscar Murphy 'Bleeding Gums' Hibbert",
    ansKey: "4",
}
var qObj3 = {
    mainq: "Who is Maggie Simpson's nemesis?",
    ans1: "1. Gerald Samson",
    ans2: "2. Sashi Amelia Nahasapeemapetilon",
    ans3: "3. Normal Head Joe Spuckler",
    ans4: "4. Stewie Griffin",
    ansKey: "1",
}
var qObj4 = {
    mainq: "What part of the opening credits are different every week?",
    ans1: "1. Grocery scene with Marge & Maggie",
    ans2: "2. Bart riding his skateboard",
    ans3: "3. The family on the couch",
    ans4: "4. Homer at the nuclear plant",
    ansKey: "3",
}
var qObj5 = {
    mainq: "Although uncredited, who voiced Leon Kompowski who sang Lisa a birthday song?",
    ans1: "1. George Clooney",
    ans2: "2. Michael Jackson",
    ans3: "3. Hugh Jackman",
    ans4: "4. Prince",
    ansKey: "2",
}
var qObj6 = {
    mainq: "Who has the tattoos 'Die Bart, Die' and Bart's decapitated head with a speech bubble saying 'Ouch, Man!'?",
    ans1: "1. Comic Book Man",
    ans2: "2. Sideshow Mel",
    ans3: "3. Sideshow Bob",
    ans4: "4. Moe Szyslak",
    ansKey: "3",
}
var qObj7 = {
    mainq: "What is the name of the Comic Book Guy's store",
    ans1: "1. Lard Lad",
    ans2: "2. Bloodbath & Beyond Gun Shop",
    ans3: "3. Jeff's Comics Store",
    ans4: "4. The Android's Dungeon",
    ansKey: "4",
}
var qObj8 = {
    mainq: "What did Homer smuggle on to the space shuttle?",
    ans1: "1. Beef Jerky",
    ans2: "2. Tang Orange Juice",
    ans3: "3. Potato Chips",
    ans4: "4. Donuts",
    ansKey: "3",
}
var qObj9 = {
    mainq: "What is Homer's email address?",
    ans1: "1. ChunkyLover53@aol.com",
    ans2: "2. HomerRocks@thesimpsons.com",
    ans3: "3. doh@yahoo.com",
    ans4: "4. donutsrule@gmail.com",
    ansKey: "1",
}
var qObj10 = {
    mainq: "What was the title of the Star Trek movie that Bart, Lisa and Grampa watched?",
    ans1: "1. Star Trek XIV: Dawn of Something",
    ans2: "2. Star Trek XIII: Please Make it Stop!",
    ans3: "3. Star Trek XII: So Very Tired",
    ans4: "4. Star Trek XV: It Can't Be That Bad",
    ansKey: "3",
}

var qObsjArray = [qObj1, qObj2, qObj3, qObj4, qObj5, qObj6, qObj7, qObj8, qObj9, qObj10];


//countdown timer function with built-in 0 time condition
var counter;
var count = 31;
function cdTimer() {
    
    counter = setInterval(timer, 1000); 

    function timer() {
        count = count - 1;
        if (count <= 0) {
            wrong++
            $("#questionBox").text("Sorry. You ran out of time. The answer is " + qObsjArray[i].ansKey);
            clearInterval(counter);
            
            setTimeout(function() {
                nxtChoice();
              }, 3000);
              $("#timer").hide();
              count = 31;
              //clearTimeout(windowTimeout);
                       
        }
        //to display remaining time
        $("#timer").text("Time left: " + count);
    }
}


//choosing question-set to display from array

var i = 0;


    function qChoice() {
        
        $("#questionBox").text(qObsjArray[i].mainq);
        $("#option1").text(qObsjArray[i].ans1);
        $("#option2").text(qObsjArray[i].ans2);
        $("#option3").text(qObsjArray[i].ans3);
        $("#option4").text(qObsjArray[i].ans4);
        $("#answerBox").show();
        cdTimer();
         
        console.log(i);
    };

    

    function nxtChoice() {
        i = i + 1; 
        if (i > 9) {
            gameOver();
        } else {          
        $("#questionBox").text(qObsjArray[i].mainq);
        $("#option1").text(qObsjArray[i].ans1)
        $("#option2").text(qObsjArray[i].ans2)
        $("#option3").text(qObsjArray[i].ans3)
        $("#option4").text(qObsjArray[i].ans4)
        $("#answerBox").show();
        $("#timer").show();
        cdTimer();
        
        console.log(i);
    }
    }
    

$("#goBtn").on('click', function () {
    correct = 0;
    wrong = 0;
    $("#r2").hide();
    qChoice();
    
});


//listen for user input and compare to answer key
/*var userChoice*/ 
var userChoice = "";

$(".button").on("click", function(e){
    userChoice = $(this).attr("value")
    console.log(userChoice);
    if (userChoice == qObsjArray[i].ansKey) {
        clearInterval(counter);
        winner();
        
        $("answerBox").hide();
        /*setTimeout(function() {
            nxtChoice();
          }, 6000);*/
    } else {
        //clearInterval(counter);
        loser();
    }
    
    });
  

//create win function
function winner() {
    correct++;
    clearInterval(counter);
    $("#r2").hide();
    $("#timer").hide();
    count = 31;
    $("answerBox").hide();
    $("#questionBox").text("Good job!");
    if (i > 9){
        gameOver();
    }else setTimeout(function() {
        nxtChoice();
      }, 3000);
      console.log(correct);
    console.log(wrong);
    
};

//create loss function
function loser(){
    wrong++; 
    clearInterval(counter);
    $("#timer").hide();
    count = 30;
    $("#r2").hide();
    $("#questionBox").text("Sorry... the correct answer is " + qObsjArray[i].ansKey);
    if (i > 9){
        gameOver();
    }else setTimeout(function() {
        nxtChoice();
      }, 3000);
      console.log(correct);
    console.log(wrong);
}

//create function for time over. display answer, pause between pages

function gameOver() {
    $("#r2").hide();
    $("#timer").hide();
    $("#answerBox").hide();
    /*$("#questionBox").text("That was fun! Here are your scores:");
    $("#questionBox").text("Correct choices: " + correct + "        " + "Incorrect guesses: " + wrong + ". Do you want to play again?");*/
    $("#questionBox").text("");
    var lastScreen = $("<div>");
    var parOne = $("<p>").text("Correct Choices: " + correct);
    lastScreen.append(parOne);
    var parTwo = $("<p>").text("Wrong Choices: " + wrong);
    lastScreen.append(parTwo);
    var parThree = $("<p>").text("Would you like to Play again?");
    lastScreen.append(parThree);
    $("#questionBox").prepend(lastScreen);
    $("#r2").show();
    i = 0;
    count = 30;
    

    //$("#questionBox").text("Incorrect choices: " + wrong);
    
};

