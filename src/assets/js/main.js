$(document).ready(function () {
    $("#owl-demo").owlCarousel({

        loop: false,
        responsiveClass: true,
        dots: false,
        nav : true,
        autoplay: false,
        smartSpeed: 1000,

        responsive: {
            0: {
                items: 1,
                nav:true
            },
            600: {
                items: 2,
                nav:true
            },
            1000: {
                items: 3,
                nav:true
            },
            1200: {
                items: 4,
                nav:true
            }
        }

    })
    $("#owl-demo1").owlCarousel({

        loop: false,
        responsiveClass: true,
        dots: false,
        nav : true,
        autoplay: false,
        smartSpeed: 1000,

        responsive: {
            0: {
                items: 1,
                nav:true
            },
            600: {
                items: 2,
                nav:true
            },
            1000: {
                items: 3,
                nav:true
            },
            1200: {
                items: 4,
                nav:true
            }
        }

    })
//     $("#compagn-banner-slider").owlCarousel({

//         loop: true,
//         responsiveClass: true,
//         nav: false,
//         dots: true,
//         autoplay: true,
//         responsive: {
//             0: {
//                 items: 1,
//             },
//             600: {
//                 items: 1,
//             },
//             1000: {
//                 items: 1,
//             }
//         }

//     })
//     $("#mobile-slider").owlCarousel({

//         loop: true,
//         responsiveClass: true,
//         nav: false,
//         dots: false,
//         autoplay: true,
//         responsive: {
//             0: {
//                 items: 1,
//             },
//             600: {
//                 items: 1,
//             }
//         }

//     })
//     $("#product-slider").owlCarousel({

//         loop: true,
//         responsiveClass: true,
//         nav: false,
//         dots: true,
//         autoplay: true,
//         responsive: {
//             0: {
//                 items: 1,
//             },
//             600: {
//                 items: 1,
//             },
//             1000: {
//                 items: 1,
//             }
//         }

//     });
//         // $('#produto').zoom();
});

// //first template

// // function openNav() {
// //     document.getElementById("mySidenav").style.width = "80%";
// // }
// // function closeNav() {
// //     document.getElementById("mySidenav").style.width = "0";
// // }


// //first main nav
// function openNav() {
//     document.getElementById("mySidenav").style.width = "100%";
// }
// function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
// }
// // 2nd nav
// function opendrop(){   
//     document.getElementById("mydrop").style.width = "87%";
//     document.getElementById("mydrop").style.opacity = "1";  
// }
// function closedrop(){
//     document.getElementById("mydrop").style.width = "0";
// }
// //3rd nav
// function opendrop2(){   
//     document.getElementById("mydrop2").style.width = "87%";
//     document.getElementById("mydrop2").style.opacity = "1";
// }
// function closedrop2(){
//     document.getElementById("mydrop2").style.width = "0";
// }

// //4th nav
// function opendrop3(){   
//     document.getElementById("mydrop3").style.width = "87%";
//     document.getElementById("mydrop3").style.opacity = "1";
// }
// function closedrop3(){
//     document.getElementById("mydrop3").style.width = "0";
// }


// function myFunction(imgs) {
//     let thumbnails = document.getElementsByClassName('thumbnail');
//     let activeImages = document.getElementsByClassName('active');
//     for (var i=0; i < thumbnails.length; i++){
//         thumbnails[i].addEventListener('click', function(){
// 				if (activeImages.length > 0){
// 					activeImages[0].classList.remove('active')
//                 }
//                 this.classList.add('active')

//                 document.getElementById('expandedImg').src = this.src;
                
                
//     })
// }

// }

// function myFunction(imgs) {
//     let thumbnails = document.getElementsByClassName('thumbnail');
//     let activeImages = document.getElementsByClassName('active');
//     for (var i=0; i < thumbnails.length; i++){
//         thumbnails[i].addEventListener('click', function(){
// 				if (activeImages.length > 0){
// 					activeImages[0].classList.remove('active')
//                 }
//                 this.classList.add('active')

//                 document.getElementById('expandedImg').src = this.src;
                
//     })
// }

// }
function showimg1() 
{
        document.getElementById("expandedImg").src = "../../assets/images/card_1.webp";  
}
var countDownDate = new Date("aug 25, 2020 16:37:52").getTime();

// Run myfunc every second
var myfunc = setInterval(function() {

var now = new Date().getTime();
var timeleft = countDownDate - now;  
// Calculating the days, hours, minutes and seconds left
var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    
// Result is output to the specific element
document.getElementById("days").innerHTML = days + " "
document.getElementById("hours").innerHTML = hours + " " 
document.getElementById("mins").innerHTML = minutes + " " 
document.getElementById("secs").innerHTML = seconds + " " 
    
// Display the message when countdown is over
if (timeleft < 0) {
    clearInterval(myfunc);
    document.getElementById("days").innerHTML = ""
    document.getElementById("hours").innerHTML = "" 
    document.getElementById("mins").innerHTML = ""
    document.getElementById("secs").innerHTML = ""
    document.getElementById("end").innerHTML = "TIME UP!!";
   
 
}
}, 1000);


var myfunc2 = setInterval(function() {

    var now = new Date().getTime();
    var timeleft = countDownDate - now;  
    // Calculating the days, hours, minutes and seconds left
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    
        
    // Result is output to the specific element
    document.getElementById("days1").innerHTML = days + " "
    document.getElementById("hours1").innerHTML = hours + " " 
    document.getElementById("mins1").innerHTML = minutes + " " 
    document.getElementById("secs1").innerHTML = seconds + " " 
        
    // Display the message when countdown is over
    if (timeleft < 0) {
        clearInterval(myfunc2);
        document.getElementById("days1").innerHTML = ""
        document.getElementById("hours1").innerHTML = "" 
        document.getElementById("mins1").innerHTML = ""
        document.getElementById("secs1").innerHTML = ""
        document.getElementById("end").innerHTML = "TIME UP!!";
     
    }
}, 1000);

var myfunc3 = setInterval(function() {

    var now = new Date().getTime();
    var timeleft = countDownDate - now;  
    // Calculating the days, hours, minutes and seconds left
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    
        
    // Result is output to the specific element
    document.getElementById("days2").innerHTML = days + " "
    document.getElementById("hours2").innerHTML = hours + " " 
    document.getElementById("mins2").innerHTML = minutes + " " 
    document.getElementById("secs2").innerHTML = seconds + " " 
        
    // Display the message when countdown is over
    if (timeleft < 0) {
        clearInterval(myfunc2);
        document.getElementById("days2").innerHTML = ""
        document.getElementById("hours2").innerHTML = "" 
        document.getElementById("mins2").innerHTML = ""
        document.getElementById("secs2").innerHTML = ""
        document.getElementById("end").innerHTML = "TIME UP!!";
     
    }
}, 1000);
var myfunc3 = setInterval(function() {

    var now = new Date().getTime();
    var timeleft = countDownDate - now;  
    // Calculating the days, hours, minutes and seconds left
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    
        
    // Result is output to the specific element
    document.getElementById("days3").innerHTML = days + " "
    document.getElementById("hours3").innerHTML = hours + " " 
    document.getElementById("mins3").innerHTML = minutes + " " 
    document.getElementById("secs3").innerHTML = seconds + " " 
        
    // Display the message when countdown is over
    if (timeleft < 0) {
        clearInterval(myfunc2);
        document.getElementById("days3").innerHTML = ""
        document.getElementById("hours3").innerHTML = "" 
        document.getElementById("mins3").innerHTML = ""
        document.getElementById("secs3").innerHTML = ""
        document.getElementById("end").innerHTML = "TIME UP!!";
     
    }
}, 1000);
var myfunc3 = setInterval(function() {

    var now = new Date().getTime();
    var timeleft = countDownDate - now;  
    // Calculating the days, hours, minutes and seconds left
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    
        
    // Result is output to the specific element
    document.getElementById("days4").innerHTML = days + " "
    document.getElementById("hours4").innerHTML = hours + " " 
    document.getElementById("mins4").innerHTML = minutes + " " 
    document.getElementById("secs4").innerHTML = seconds + " " 
        
    // Display the message when countdown is over
    if (timeleft < 0) {
        clearInterval(myfunc2);
        document.getElementById("days4").innerHTML = ""
        document.getElementById("hours4").innerHTML = "" 
        document.getElementById("mins4").innerHTML = ""
        document.getElementById("secs4").innerHTML = ""
        document.getElementById("end").innerHTML = "TIME UP!!";
     
    }
}, 1000);
