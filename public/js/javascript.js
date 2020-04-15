(function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#sideNav'
    });
  
  })(jQuery);

  $.ajax({
    url: "https://quze-intern-test.s3.us-east-2.amazonaws.com/course-data.json",
    method: "GET"
  }).then(function(response) {
    console.log(response);
    console.log(response[0].courseId);
  });
  
  // End of use strict
  var courses = [
    {
      courseId: "CS400",
      title: "Intro to Relational Databases",
      description: "Relational databases are a powerful tool used throughout the industry. Learn the basics of SQL and how to connect your Python code to a relational database.",
      imgURL: "https://www.coursebuffet.com/course_images/subjects/computer-science.jpg",
      URL: "https://www.udacity.com/course/intro-to-relational-databases--ud197",

    },
    {
      courseId: "CS101",
      title: "Introduction to Computer Science",
      description: "Introduction to the intellectual enterprises of computer science and the art of programming for majors and non-majors alike, with or without prior programming experience. An entry-level course S50x teaches students how to think algorithmically and solve problems efficiently. Topics include abstraction, algorithms, data structures, encapsulation, resource management, security, software engineering, and web development. Languages include C, PHP, and JavaScript plus SQL, CSS, and HTML.",
      imgURL: "https://www.coursebuffet.com/course_images/default/9.jpg",
      URL: "https://www.edx.org/course/introduction-computer-science-harvardx-cs50x",
    },
    {
      courseId: "CS295",
      title:"Algorithms: Design and Analysis, Part 1",
      description: "In this course you will learn several fundamental principles of algorithm design: divide-and-conquer methods, graph algorithms, practical data structures, randomized algorithms, and more.",
      imgURL: "https://www.coursebuffet.com/course_images/coursera/algs4partI.png",
      URL: "https://www.coursera.org/course/algo",
    },
    {
      courseId: "CS286",
      title: "Web Development",
      description: "Starting from the basics of how the web works, this class will walk you through everything you need to know to build your own blog application and scale it to support large numbers of users.",
      imgURL: "https://www.coursebuffet.com/course_images/coursera/webapplications.png",
      URL: "http://www.udacity.com/course/cs253",
    },
    {
      courseId: "CS101",
      title: "Programming for Everybody (Python)",
      description: "This course aims to teach everyone to learn the basics of programming computers using Python. The course has no pre-requisites and avoids all but the simplest mathematics. Anyone with moderate computer experience should be able to master the materials in this course.",
      imgURL: "https://www.coursebuffet.com/course_images/udacity/ud036.jpg",
      URL: "https://www.coursera.org/course/pythonlearn",
    }
  ];

  $.ajax({
    url: courses,
    method: "GET"
  }).then(function(response) {
    //console.log(courses);
    console.log(response);
  });
