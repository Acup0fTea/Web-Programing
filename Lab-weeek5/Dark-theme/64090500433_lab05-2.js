function btn() {
    var element = document.body;
   element.classList.toggle("dark-mode");
    var txt1 = document.getElementById("txt1");
    var txt2 = document.getElementById("txt2");
    var color = document.getElementById("color");
    var txt3 = document.getElementById("txt3");
    var button = document.getElementById("button");

    if (txt1.innerHTML === "GOOD MORNING") {
        txt1.innerHTML = "GOOD NIGHT";
        txt2.innerHTML = "night";
        color.style.color = "blue";
        txt3.innerHTML = "day";
        button.innerHTML = "Active the day mode";
    }
    else {
        txt1.innerHTML = "GOOD MORNING";
        txt2.innerHTML = "day";
        color.style.color = "red";
        txt3.innerHTML = "night";
        button.innerHTML = "Active the night mode";
    }



}