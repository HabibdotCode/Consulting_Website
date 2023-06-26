function myFunction1() {
    var dots = document.getElementById("dot");
    var moreText = document.getElementById("moree");
    var btnText = document.getElementById("myBtnn");

    if(dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
    }
    else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
}

}