// Custom Scripts for Label Template //


function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


$(document).ready(function(){
  $("#subscribe").click(function () {
    if($("#email").val()==""){
      $("#subscriberModelButton").trigger("click");
      $("#subscriberModelResponse").html("Sure, but give us an email address where we can reach you.");
    }
    else{
      var form = $('#signup')[0];
      var obj = {};
      obj.email = $("#email").val();

      if(!validateEmail(obj.email)){
        $("#subscriberModelButton").trigger("click");
        $("#subscriberModelResponse").html("Please enter a valid email address.");
        return;
      }
      $.ajax({
        type: "POST",
        url: "https://getbasis.co/subscribe",
        data: JSON.stringify(obj),
        contentType: 'application/json; charset=utf-8',
        processData: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          $("#subscriberModelButton").trigger("click");
          $("#subscriberModelResponse").html(data.result);
        },
        error: function (e) {
        }
    });
    }
  });


  $("#subscribeBottom").click(function () {
    if($("#emailBottom").val()==""){
      $("#subscriberModelButton").trigger("click");
      $("#subscriberModelResponse").html("Sure, but give us an email address where we can reach you.");
    }
    else{
      var form = $('#signupBottom')[0];
      var data = new FormData(form);
      data.append("emailId", $("#emailBottom").val());
      $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "https://api.getbasis.co/subscribe",
        data: data,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function (data) {
          $("#subscriberModelButton").trigger("click");
          $("#subscriberModelResponse").html(data.results);
        },
        error: function (e) {
          // $("#subscriberModelButton").trigger("click");
          // $("#subscriberModelResponse").html(e);
        }
    });
    }
  });
});

jQuery(function($) {
    "use strict";

        // get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
        var mainbottom = $('#main').offset().top;

        // on scroll,
        $(window).on('scroll',function(){

        // we round here to reduce a little workload
        stop = Math.round($(window).scrollTop());
        if (stop > mainbottom) {
            $('.navbar').addClass('past-main');
            $('.navbar').addClass('effect-main')
        } else {
            $('.navbar').removeClass('past-main');
       }

      });


  // Collapse navbar on click

   $(document).on('click.nav','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
    $(this).removeClass('in').addClass('collapse');
   }
  });


    /*-----------------------------------
    ----------- Scroll To Top -----------
    ------------------------------------*/

    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 1000) {
          $('#back-top').fadeIn();
      } else {
          $('#back-top').fadeOut();
      }
    });
    // scroll body to 0px on click
    $('#back-top').on('click', function () {
      $('#back-top').tooltip('hide');
      $('body,html').animate({
          scrollTop: 0
      }, 1500);
      return false;
    });


    /*-------- Owl Carousel ---------- */

      $(".reviews").owlCarousel({
        slideSpeed: 200,
        items: 1,
        singleItem: true,
        autoplay:true,
       autoplayTimeout:2000,
       autoplayHoverPause:true,
       pagination: false,
      });


    /* ------ Clients Section Owl Carousel ----- */

      $(".clients").owlCarousel({
      slideSpeed : 200,
      autoPlay : true,
      pagination : false,
      responsiveClass:true,
   responsive:{
       0:{
           items:2,
       },
       320: {
          items:3,
       },
       600:{
           items:4,
           nav:false
       },
       1000:{
           items:5,
           loop:false
       }
   }
      });


  /* ------ jQuery for Easing min -- */

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 54)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').on('click', function () {
      $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 54
    });



/* --------- Wow Init ------ */

  new WOW().init();


  /* ----- Counter Up ----- */

$('.counter').counterUp({
		delay: 10,
		time: 1000
});


/*----- Subscription Form ----- */

/* --
$(document).ready(function() {
  // jQuery Validation
  $("#signup").validate({
    // if valid, post data via AJAX
    submitHandler: function(form) {
      // $.post("assets/php/subscribe.php", { email: $("#email").val() }, function(data) {
      //   $('#response').html(data);
      // });
    },
    // all fields are required
    rules: {
      email: {
        required: true,
        email: true
      }
    }
  });
});
-- */
/*-------- Video PLay button ---- */

$('.vid-icon').on('click', function () {
  $('.vid-icon').addClass('active');
  $('.vid-cover').addClass('active');
  $('.vid-holder').addClass('active');
});

/*-------- Accordion  ---- */

$('.accordion').accordion({
    "transitionSpeed": 400
});

});
