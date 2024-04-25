// $(document).ready(function(){
//     $(window).scroll(function(){
//         // sticky navbar on scroll script
//         if(this.scrollY > 20){
//             $('.navbar').addClass("sticky");
//         }else{
//             $('.navbar').removeClass("sticky");
//         }
        
//         // scroll-up button show/hide script
//         if(this.scrollY > 500){
//             $('.scroll-up-btn').addClass("show");
//         }else{
//             $('.scroll-up-btn').removeClass("show");
//         }
//     });

//     // slide-up script
//     $('.scroll-up-btn').click(function(){
//         $('html').animate({scrollTop: 0});
//         // removing smooth scroll on slide-up button click
//         $('html').css("scrollBehavior", "auto");
//     });

//     $('.navbar .menu li a').click(function(){
//         // applying again smooth scroll on menu items click
//         $('html').css("scrollBehavior", "smooth");
//     });

//     // toggle menu/navbar script
//     $('.menu-btn').click(function(){
//         $('.navbar .menu').toggleClass("active");
//         $('.menu-btn i').toggleClass("active");
//     });

//     // typing text animation script
//     var typed = new Typed(".typing", {
//         strings: ["A FullStack Developer", "A MERN Stack Developer"],
//         typeSpeed: 100,
//         backSpeed: 60,
//         loop: true
//     });

//     var typed = new Typed(".typing-2", {
//         strings: ["A FullStack Developer", "A MERN Stack Developer"],
//         typeSpeed: 100,
//         backSpeed: 60,
//         loop: true
//     });

//     // owl carousel script
//     $('.carousel').owlCarousel({
//         margin: 20,
//         loop: true,
//         autoplay: true,
//         autoplayTimeOut: 2000,
//         autoplayHoverPause: true,
//         responsive: {
//             0:{
//                 items: 1,
//                 nav: false
//             },
//             600:{
//                 items: 2,
//                 nav: false
//             },
//             1000:{
//                 items: 3,
//                 nav: false
//             }
//         }
//     });
//     const elemTitle = document.querySelector('.elem-title');

//     const targetNumber = 500;

//     const duration = 10000; 

//     const increment = Math.ceil(targetNumber / (duration / 100));

//     let currentNumber = 0;

//     function updateNumber() {
//         elemTitle.textContent = currentNumber;
//         if (currentNumber < targetNumber) {
//             currentNumber += increment;
//             requestAnimationFrame(updateNumber);
//         }
//     }

//     window.addEventListener('load', () => {
//         updateNumber();
//     });

//     const elemTitle2 = document.querySelector('.elem-2 .elem-title');

//     // Set the target number
//     const targetNumber2 = 1200; // Replace with your desired number

//     // Set the duration of the animation in milliseconds
//     const duration2 = 20000; // Adjust as needed

//     // Calculate the increment value for each frame
//     const increment2 = Math.ceil(targetNumber2 / (duration2 / 100));

//     let currentNumber2 = 0;

//     // Function to update the displayed number and schedule the next update
//     function updateNumber2() {
//         elemTitle2.textContent = currentNumber2;
//         if (currentNumber2 < targetNumber2) {
//             currentNumber2 += increment2;
//             requestAnimationFrame(updateNumber2);
//         }
//     }

//     // Start the animation when the page is loaded
//     window.addEventListener('load', () => {
//         updateNumber2();
//     });

//     document.getElementById('resume-link-1').addEventListener('click', function() {
//         window.open(
//           "https://drive.google.com/file/d/1onvQQUi4bc_pJnfWkKESlSxbDhprB329/view?usp=sharing"
//         );
//       });
    
//       document.getElementById('resume-button-2').addEventListener('click', function() {
//         window.open(
//           "https://drive.google.com/file/d/1onvQQUi4bc_pJnfWkKESlSxbDhprB329/view?usp=sharing"
//         );
//       });
   

// });


$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["A FullStack Developer", "A MERN Stack Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["A FullStack Developer", "A MERN Stack Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
    document.getElementById('resume-link-1').addEventListener('click', function() {
        window.open(
          "https://drive.google.com/file/d/1Ecf9pluTW3G51_JS7qN__3BcXlNkC-N0/view?usp=sharing"
        );
      });
    
      document.getElementById('resume-button-2').addEventListener('click', function() {
        window.open(
          "https://drive.google.com/file/d/1Ecf9pluTW3G51_JS7qN__3BcXlNkC-N0/view?usp=sharing"
        );
      });
   

});