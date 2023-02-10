let btnopenmodal = document.querySelectorAll(".cbutton");
let mondal = document.querySelector(".modal");
let bgd = document.querySelector(".bground");

bgd.addEventListener('click',function () {


    console.log("background div clicked")
    mondal.classList.add("hidden");
})


// console.log(mondal);
// console.log(btnopenmodal);
// console.log(typeof(btnopenmodal));
// console.log(btnopenmodal.length);


btnopenmodal.forEach(function(ev){

    
    console.log("clicked");
    console.log(typeof(ev));
    ev.addEventListener('click', function() {

        console.log("Button Clicked "+ ev.textContent);
        mondal.classList.remove("hidden");


    })
})



