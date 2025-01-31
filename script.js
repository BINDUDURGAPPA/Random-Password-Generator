$(document).ready(function() {

    //sticky header
      $(window).scroll(function() {
        if ($(this).scrollTop() > 1) {
          $(".header-area").addClass("sticky");
        } else {
          $(".header-area").removeClass("sticky");
        }
    
        // Update the active section in the header
        updateActiveSection();
      });
    
      $(".header ul li a").click(function(e) {
        e.preventDefault(); 
    
        var target = $(this).attr("href");
    
        if ($(target).hasClass("active-section")) {
          return; 
        }
    
        if (target === "#home") {
          $("html, body").animate(
            {
              scrollTop: 0 
            },
            500
          );
        } else {
          var offset = $(target).offset().top - 40; 
    
          $("html, body").animate(
            {
              scrollTop: offset
            },
            500
          );
        }
    
        $(".header ul li a").removeClass("active");
        $(this).addClass("active");
      });
    
  
      //Initial content revealing js
      ScrollReveal({
        distance: "100px",
        duration: 2000,
        delay: 200
      });
    
      ScrollReveal().reveal(".header a, .profile-photo, .about-content, .education", {
        origin: "left"
      });
      ScrollReveal().reveal(".header ul, .profile-text, .about-skills, .internship", {
        origin: "right"
      });
      ScrollReveal().reveal(".project-title, .contact-title", {
        origin: "top"
      });
      ScrollReveal().reveal(".projects, .contact", {
        origin: "bottom"
      });
      
    });
    
    function updateActiveSection() {
      var scrollPosition = $(window).scrollTop();
    
      // Checking if scroll position is at the top of the page
      if (scrollPosition === 0) {
        $(".header ul li a").removeClass("active");
        $(".header ul li a[href='#home']").addClass("active");
        return;
      }
    
      // Iterate through each section and update the active class in the header
      $("section").each(function() {
        var target = $(this).attr("id");
        var offset = $(this).offset().top;
        var height = $(this).outerHeight();
    
        if (
          scrollPosition >= offset - 40 &&
          scrollPosition < offset + height - 40
        ) {
          $(".header ul li a").removeClass("active");
          $(".header ul li a[href='#" + target + "']").addClass("active");
        }
      });
    }

    document.getElementById("contactForm").addEventListener("submit", function(event) {
      event.preventDefault();
      let isValid = true;
  
      // Name validation
      let name = document.getElementById("name").value;
      if (name.trim() === "") {
          document.getElementById("nameError").innerText = "Name is required";
          isValid = false;
      } else {
          document.getElementById("nameError").innerText = "";
      }
  
      // Email validation
      let email = document.getElementById("email").value;
      let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
          document.getElementById("emailError").innerText = "Invalid email";
          isValid = false;
      } else {
          document.getElementById("emailError").innerText = "";
      }
  
      // Message validation
      
  
      if (isValid) {
          alert("Form submitted successfully!");
          document.getElementById("contactForm").reset();
      }
  });
  
  
   
    
  
   