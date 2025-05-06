let backTop = document.querySelector(".backtop")
let menu_bgd= document.querySelector(".menu_bg")



// backTop.addEventListener("click",function(){
//     window.scrollTo({
//         top:0,
//         behavior:"smooth"
//     })
// })
window.addEventListener("scroll",function(){
    let scrolling = window.scrollY
        
        
    if(scrolling > 50){
        backTop.style.display ="block"

    }else{                               
        backTop.style.display="none"
    }
    if(menu_bgd && scrolling >30){
        menu_bgd.classList.add("bggg")

    }else{
        menu_bgd.classList.remove("bggg")

    }
   
})


document.querySelector('.backtop').addEventListener('click', function() {
    const phoneNumber = '+8801620748557'; // WhatsApp number with country code, no '+'
    const message = 'Hello, I would like to chat!';
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    window.location.href = url; // <-- use location.href instead of window.open
  });

//skill

var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var distance = countDownDate - now;

 var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo1").innerHTML = days + "d "
  document.getElementById("demo2").innerHTML = hours + "h "
  document.getElementById("demo3").innerHTML = minutes + "m "
  document.getElementById("demo4").innerHTML =  seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
//