var navbar = document.getElementById("navbar")
var content = document.getElementById("content")

window.onscroll = function(){
    if(window.pageYOffset >= content.offsetTop){
        navbar.classList.add("nav-sticky");
    }else{
        navbar.classList.remove("nav-sticky");
    }
}

// const btnToggle = document.querySelector('#btn-toggle').addEventListener('click', function(){
//    const change =  document.querySelector('.fa-bars').classList.toggle('fa-times')
//     if(change != document.querySelector('.fa-bars')){
//         document.querySelector('.nav-toggle').classList.toggle('show')
//     }

//     if(document.getElementsByClassName('fa-bars')){
//         document.getElementById('nav-toggle').style.display = 'none'
//     }
// })

// const btnToggle = document.getElementById('btn-toggle')
// const navContent = document.getElementById('nav-toggle')

// if(btnToggle.style.display == 'none'){
//     navContent.style.display = 'none'
// }


function display(x) {
    if (x.matches) { // If media query matches
      document.getElementById('nav-toggle').style.display = 'none'
    }
  }
  
  var x = window.matchMedia("(min-width: 769px)")
  display(x) 
