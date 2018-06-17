//define variables for user answers, correct answers, wrong answers,
var correct = 0;
var wrong = 0;

   /* $(document).ready(function(){
        var qObs = [
        {
                mainq:"Who runs the Kwik-E-Mart?",
                ans1:"Montgomery Burns",
                ans2:"Timothy Lovejoy",
                ans3:"Apu Nahasapeemapetilon",
                ans4:"Weylon Smithers",
                ansKey:"Apu Nahasapeemapetilon",
            },
        
            {
                mainq:"Who was Lisa's saxophone mentor?",
                ans1:"Eleanor Abernathy",
                ans2:"Lurleen Lumpkin",
                ans3:"Marcus 'Marbles' Le Marquez",
                ans4:"Oscar Murphy 'Bleeding Gums' Hibbert",
                ansKey:"Oscar Murphy 'Bleeding Gums' Hibbert",
            },
            {
                mainq:"Who Maggie Simpson's nemesis?",
                ans1:"Gerald Samson",
                ans2:"Sashi Amelia Nahasapeemapetilon",
                ans3:"Normal Head Joe Spuckler",
                ans4:"Stewie Griffin",
                ansKey:"Gerald Samson",
            },
            {
                mainq:"Who is Maggie Simpson's nemesis?",
                ans1:"Gerald Samson",
                ans2:"Sashi Amelia Nahasapeemapetilon",
                ans3:"Normal Head Joe Spuckler", 
                ans4:"Stewie Griffin",
                ansKey:"Gerald Samson",    
            },
            {
                mainq:"Although uncredited, who voiced Leon Kompowski's character?",
                ans1:"George Clooney",
                ans2:"Michael Jackson",
                ans3:"Hugh Jackman", 
                ans4:"Prince",
                ansKey:"Michael Jackson",
            },
            {
                mainq:"Who has the tattoos 'Die Bart, Die', Bart's decapitated head with a speech bubble saying 'Ouch, Man!'?",
                ans1:"Comic Book Man",
                ans2:"Sideshow Mel",
                ans3:"Sideshow Bob", 
                ans4:"Moe Szyslak",
                ansKey:"Sideshow Bob",               
            },
            {
                mainq:"What is the name of the Comic Book Guy's store",
                ans1:"Lard Lad",
                ans2:"Bloodbath & Beyond Gun Shop",
                ans3:"Jeff's Comics Store", 
                ans4:"The Android's Dungeon",
                ansKey:"The Android's Dungeon",               
            },
            {
                mainq:"What did Homer smuggle to the space shuttle?",
                ans1:"Beef Jerky",
                ans2:"Tang Orange Juice",
                ans3:"Potato Chips", 
                ans4:"Donuts",
                ansKey:"Potato Chips",               
            },
            {
                mainq:"What is Homer's email address?",
                ans1:"ChunkyLover53@aol.com",
                ans2:"HomerRocks@thesimpsons.com",
                ans3:"doh@yahoo.com", 
                ans4:"donutsrule@gmail.com",
                ansKey:"ChunkyLover53@aol.com",               
            },
             {
                mainq:"What was the title of the Star Trek movie that Bart, Lisa and Grampa watch?",
                ans1:"Star Trek XIV: Dawn of Something",
                ans2:"Star Trek XIII: A Prequel To A New Beginning",
                ans3:"Star Trek XII: So Very Tired", 
                ans4:"Star Trek XV: It Can't Be That Bad",
                ansKey:"Star Trek XII: So Very Tired",               
            }  
        ]});*/
    

        var qObj1={
            mainq:"Who runs the Kwik-E-Mart?",
            ans1:"Montgomery Burns",
            ans2:"Timothy Lovejoy",
            ans3:"Apu Nahasapeemapetilon",
            ans4:"Weylon Smithers",
            ansKey:"Apu Nahasapeemapetilon",
        }
    
        var qObj2={
            mainq:"Who was Lisa's saxophone mentor?",
            ans1:"Eleanor Abernathy",
            ans2:"Lurleen Lumpkin",
            ans3:"Marcus 'Marbles' Le Marquez",
            ans4:"Oscar Murphy 'Bleeding Gums' Hibbert",
            ansKey:"Oscar Murphy 'Bleeding Gums' Hibbert",
        }
        var qObj3={
            mainq:"Who Maggie Simpson's nemesis?",
            ans1:"Gerald Samson",
            ans2:"Sashi Amelia Nahasapeemapetilon",
            ans3:"Normal Head Joe Spuckler",
            ans4:"Stewie Griffin",
            ansKey:"Gerald Samson",
        }
        var qObj4={
            mainq:"Who is Maggie Simpson's nemesis?",
            ans1:"Gerald Samson",
            ans2:"Sashi Amelia Nahasapeemapetilon",
            ans3:"Normal Head Joe Spuckler", 
            ans4:"Stewie Griffin",
            ansKey:"Gerald Samson",    
        }
        var qObj5= {
            mainq:"Although uncredited, who voiced Leon Kompowski's character?",
            ans1:"George Clooney",
            ans2:"Michael Jackson",
            ans3:"Hugh Jackman", 
            ans4:"Prince",
            ansKey:"Michael Jackson",
        }
        var qObj6={
            mainq:"Who has the tattoos 'Die Bart, Die', Bart's decapitated head with a speech bubble saying 'Ouch, Man!'?",
            ans1:"Comic Book Man",
            ans2:"Sideshow Mel",
            ans3:"Sideshow Bob", 
            ans4:"Moe Szyslak",
            ansKey:"Sideshow Bob",               
        }
        var qObj7 = {
            mainq:"What is the name of the Comic Book Guy's store",
            ans1:"Lard Lad",
            ans2:"Bloodbath & Beyond Gun Shop",
            ans3:"Jeff's Comics Store", 
            ans4:"The Android's Dungeon",
            ansKey:"The Android's Dungeon",               
        }
        var qObj8 = {
            mainq:"What did Homer smuggle to the space shuttle?",
            ans1:"Beef Jerky",
            ans2:"Tang Orange Juice",
            ans3:"Potato Chips", 
            ans4:"Donuts",
            ansKey:"Potato Chips",               
        }
        var qObj9 = {
            mainq:"What is Homer's email address?",
            ans1:"ChunkyLover53@aol.com",
            ans2:"HomerRocks@thesimpsons.com",
            ans3:"doh@yahoo.com", 
            ans4:"donutsrule@gmail.com",
            ansKey:"ChunkyLover53@aol.com",               
        }
        var qObj10 = {
            mainq:"What was the title of the Star Trek movie that Bart, Lisa and Grampa watched?",
            ans1:"Star Trek XIV: Dawn of Something",
            ans2:"Star Trek XIII: A Prequel To A New Beginning",
            ans3:"Star Trek XII: So Very Tired", 
            ans4:"Star Trek XV: It Can't Be That Bad",
            ansKey:"Star Trek XII: So Very Tired",               
        }    
        
    var qObsjArray = [qObj1, qObj2, qObj3, qObj4, qObj5, qObj6, qObj7, qObj8, qObj9, qObj10]; 


//countdown timer function

var count=30;
function cdTimer() {

var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

function timer(){
  count=count-1;
  if (count <= 0)
  {
     wrong++ 
     clearInterval(counter);
     
     return;
  }
  //to display remaining time
  $("#timer").text("Time left: " + count);
}
}

//choosing question set to display from array


$("#goBtn").on('click', function(){
    cdTimer(); 
    $("#r2").hide();
    
    for(i=0; i < qObsjArray.length; i++){
        var mQ = qObsjArray[i].mainq;
        $("#questionBox").text(qObsjArray[i].mainq);
        $("#option1").text(qObsjArray[i].ans1)
        $("#option2").text(qObsjArray[i].ans2)
        $("#option3").text(qObsjArray[i].ans3)
        $("#option4").text(qObsjArray[i].ans4)
        $("#answerBox").show();

        console.log(qObsjArray[i].mainq);
    }



});
    





//create win function

//create loss function

//create function for time over. display answer, pause between pages

//create functions for game start, display first question, display answer options on buttons(jquery), listen to click event for answer, timer countdown, compare user answer to answer key from object model in array.

 

