
  
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

 console.log(courses);
 for (var i = 0; i < 9; i++) {

  var eventDiv = $("<div class='eventDiv'>");
  var imageURL = courses[i].imgURL;
  var image = $("<img>");
  image.attr("src", imageURL);
  eventDiv.append(image);
  $("#events-display").append(eventDiv);
  var eventName = $("<div>");
  eventName.html(courses[i].title);
  eventName.attr("style","font-weight: bold;");
  eventDiv.append(eventName);

  $("#events-display").append(eventDiv);

  var description = $("<div>");
  description.html(courses[i].description);
  eventDiv.append(description);

  $("#events-display").append(eventDiv);

  var level = $("<div>");
  level.html("Level: "+courses[i].level);
  level.attr("style","font-weight: bold;");
  eventDiv.append(level);


  $("#events-display").append(eventDiv);

  var btn = $("<button>");
  btn.addClass("event-btn");
  var eventURL = courses[i].URL;
  console.log(eventURL);
  btn.attr("onClick", `window.open("${eventURL}")`);
  btn.text("See more");
  eventDiv.append(btn);

  $("#events-display").append(eventDiv);

}
