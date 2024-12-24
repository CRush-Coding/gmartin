function dropDown() {
    console.log("hello");
    if (document.querySelector('.dropdown-container').style.display === "flex") {
        console.log("yippeeeee");
        document.querySelector('.dropdown-container').style.display = "none";
    } else {
        document.querySelector('.dropdown-container').style.display = "flex";
    }
}