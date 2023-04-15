myFunc = function(title, bookRating) {
    for (let i=0; i<5; i++) {
        let star = document.createElement("SPAN");
        let parent = document.getElementById(title);
        star.classList.add("fa")
        star.classList.add("fa-star")
        if (i <= bookRating-1 ) {
            star.classList.add("checked")
        }
        parent.appendChild(star);
    }
}