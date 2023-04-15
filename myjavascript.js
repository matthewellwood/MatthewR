function check(){
    answer = document.querySelector('[name="freeanswer"]').value
    let user_answer = answer.toLowerCase();
    correct_answer = "doctor"

    if(user_answer === correct_answer){
        document.querySelector('#freeanswer').innerHTML="Correct!"
        document.querySelector('#Answer').style.backgroundColor = 'limegreen';
        document.querySelector('#Answer').style.backgroundimage = './images/carry-on/left.jpg';

    }else {
        document.querySelector('#freeanswer').innerHTML="Incorrect"
        document.querySelector('#Answer').style.backgroundColor = 'red';
     }
    }

function changecolor(event) {
    var triggerObject = event.srcElement;
    if(triggerObject.innerHTML == 'Charles Hawtrey'){
    document.querySelector('#answer1').innerHTML="Correct!";
    document.querySelector('#answer1').style.backgroundColor = 'limegreen';
    triggerObject.style.backgroundColor = 'limegreen';
    myfunction();
    }
    else {
        document.querySelector('#answer1').innerHTML="Incorrect";
        document.querySelector('#answer1').style.backgroundColor = 'red';
        triggerObject.style.backgroundColor = 'red';
        }
    }

    function q2(event) {
        var triggerObject = event.srcElement;
        if(triggerObject.innerHTML == '6'){
        document.querySelector('#answer2').innerHTML="Correct!";
        document.querySelector('#answer2').style.backgroundColor = 'limegreen';
        triggerObject.style.backgroundColor = 'limegreen';
        }
        else {
        document.querySelector('#answer2').innerHTML="Incorrect";
        document.querySelector('#answer2').style.backgroundColor = 'red';
        triggerObject.style.backgroundColor = 'red';
        }
    }
    function myfunction() {
        var x = document.getElementById("id1");
        x.setAttribute("src", "./images/carry-on/Charles-Hawtrey.jpg");
        x.setAttribute("width", "150");
        x.setAttribute("height", "150");
        // x.setAttribute("width", "304");
        // x.setAttribute("height", "228");
        x.setAttribute("alt", "Charles Hawtrey");
        document.body.appendChild(x);
    }
