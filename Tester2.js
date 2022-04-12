function closeImg() {
    var notchecked = document.getElementById("checkNatalie").checked;
 
  
        document.getElementById("coachNathalie").style.display = "none";
        document.getElementById("closeBtnNathalie").style.display = "none";
        document.getElementById("txtNathalie").style.display = "none";
        document.getElementById("bigCoach").style.display = "none";
        document.getElementById("checkNatalie").checked = false;

      




console.log(notchecked);

console.log(document.getElementById("checkNatalie"));

}

function truc(){
    console.log("coché");

   
    document.getElementById("bigCoach").style.display = "block";
    document.getElementById("bigCoach").style.position = "relative";
    document.getElementById("bigCoach").style.height = "80vh";
    document.getElementById("bigCoach").style.width = " 62vw";
    document.getElementById("bigCoach").style.top = " 50%";
    document.getElementById("bigCoach").style.left = " 50%";
    document.getElementById("bigCoach").style.transform = "translate(-50%, -50%)";


    document.getElementById("coachNathalie").style.display = "inline-block";
    document.getElementById("coachNathalie").style.position = "absolute";
    document.getElementById("coachNathalie").style.maxHeight = "80vh";
    document.getElementById("coachNathalie").style.maxWidth = "62vw";
    document.getElementById("coachNathalie").style.top = " 50%";
    document.getElementById("coachNathalie").style.left = " 50%";
    document.getElementById("coachNathalie").style.transform = "translate(-50%, -50%)";

    document.getElementById("closeBtnNathalie").style.display = "block";
    document.getElementById("closeBtnNathalie").style.position = "absolute";
    document.getElementById("closeBtnNathalie").style.top = " 70%";
    document.getElementById("closeBtnNathalie").style.left = " 70%";
    document.getElementById("closeBtnNathalie").style.transform = "translate(-50%, -50%)";
    document.getElementById("closeBtnNathalie").style.maxWidth = "50px";
}