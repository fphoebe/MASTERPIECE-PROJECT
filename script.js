var questions = [
    {
          prompt: "Which number should come next in the pattern 37, 34, 31, 28?\n a.30\n\
          b.25\n c.22",
          answer: "b"
    },
    {
        prompt: "Which is not a member of the big five?\n(a) Lion\n\ (b) Elephant\n(c) Tiger",
        answer: "c"
   },
   {
    prompt: "Find the answer that best completes the analogy:Book is to Reading as Fork is to:\n a. drawing\n\  b.writing\n c.stirring\n d.eating",
    answer: "d"
},
{
    prompt: ".Find two words, one from each group, that are the closest in meaning:Group A talkative, job, ecstatic Group B angry, wind, loquacious?\n a. talkative and wind\n\ b. job and angry\n c. talkative and loquacious\n d. ecstatic and angry",
    answer: "c"
},
{
    prompt: "Which of the following can be arranged into a 5-letter English word? \n a. H R G S T\n b. R I L S A",
    answer: "b"

},
];
var score = 0;

for(var i = 0; i < questions.length; i++){
     var response = window.prompt(questions[i].prompt);
     if(response == questions[i].answer){
          score++;
          alert("Correct!");
     } else {
          alert("WRONG!");
     }
}
alert("you got " + score + "/" + questions.length +"You are smart");
