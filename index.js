let li = document.querySelectorAll(".faq-text li");
for (var i = 0;i < li.length;i++){
    li[i].addEventListener("click", (e) => {
        let clickli;
        if (e.target.getElementsByClassName("question-arrow")) {
            clickli=e.target.parentElement.parentElement;
        }
        else {
            clickli=e.target.parentElement.parentElement.parentElement;
        }
        clickli.classList.toggle("showanswer");
        

    })
}
