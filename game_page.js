var player1=localStorage.getItem("player1Id");
var player2=localStorage.getItem("player2Id");
var P1score=0;
var P2score=0;
document.getElementById("player1_name").innerHTML=player1+": "
document.getElementById("player2_name").innerHTML=player2+": "
document.getElementById("P1Score").innerHTML=P1score;
document.getElementById("P2Score").innerHTML=P2score;
var Qturn="player1";
var Aturn="player2";
document.getElementById("PlayerTurnQ").innerHTML=player1+" will be asking the question";
document.getElementById("PlayerTurnA").innerHTML=player2+" will be answering the question";
function send() {
    num1=document.getElementById("num1").value;
    num2=document.getElementById("num2").value;
    OurAns=parseInt(num1)*parseInt(num2);
    Ques_Num="<h4>"+num1+"x"+num2+"</h4>";
    InputBx="<br>Answer : <input type='text' id='input_check_box'>";
    check_Button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row= Ques_Num+InputBx+check_Button;
    document.getElementById("output").innerHTML=row;
    num1=document.getElementById("num1").value="";
    num2=document.getElementById("num2").value="";
}
function check(){
    Ans=document.getElementById("InputBx").innerHTML;
    if (Ans==OurAns) {
        if (Aturn=="player1") {
            P1score=P1score+1;
            document.getElementById("P1Score").innerHTML=P1score;
        }
        else {
            P2score=P2score+1;
            document.getElementById("P2Score").innerHTML=P2score;
        }
    }
    if (Qturn=="player1") {
        Qturn="player2"
        document.getElementById("PlayerTurnQ").innerHTML=player2+" will be asking the question";
    } 
    else {
        Qturn="player1"
        document.getElementById("PlayerTurnQ").innerHTML=player1+" will be asking the question";
    }
    if (Aturn=="player1") {
        Aturn="player2"
        document.getElementById("PlayerTurnA").innerHTML=player2+" will be answering the question";
    } 
    else {
        Aturn="player1"
        document.getElementById("PlayerTurnA").innerHTML=player1+" will be answering the question";
    }
    document.getElementById("output").innerHTML="";
}