- Go to this website: https://tien1020.github.io/scraping/
- I scraped courses infomation (courseId, title, description, image, link) from coursebuffet.com and then wrote them in JSON format in js/javascript.js 
- Then I used jQuery to display all the courses in the main page.
2. I completed this task in 2 hours total.
4. Output JSON file

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
