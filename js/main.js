const nav_link = document.querySelectorAll(".nav-link");
console.log(nav_link);


nav_link.forEach(element => {
    console.log(element);
       element.onclick=()=>{
        this.classList.toggle("active");
        this.classList.add("fw-bold")
       }

});

