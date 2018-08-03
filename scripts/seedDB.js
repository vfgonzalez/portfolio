const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/personalwebsitedb",
  {
    // useMongoClient: true
  }
);

const projectsSeed = [
  {
  github: "https://github.com/vfgonzalez/slack-overflow",
  title: "Slack Overflow, React Migration",
  description: "Slack Overflow 2.0 was a re creation of our initial idea, to provide students a hub where links shared on Slack, were stored past the 10,000 message limit. Storing the links makes it easy to follow past the course curriculum and beyond.",
  technologies: ["React", "MongoDB", "Express", "Node.js", "HTML", "CSS", "Slack API", "React-Materialize", "Moment.js","Mongoose"],
  images: ["./images/slackoverflow2/main.png", "./images/slackoverflow2/newpost.png", "./images/slackoverflow2/resources.png", "./images/slackoverflow2/sidenav.png", "./images/slackoverflow2/returntotop.png", "./images/slackoverflow2/categoryselected.png"],
  isVisible: {type: Boolean },
  url : "https://slackoverflow2.herokuapp.com/",
  }
  
]

const blogSeed = [
  {
  postTitle: "My First Blog Post",
  postDate: {type: Date , required: true , default: Date.now()},
  postBody : "Hi! Welcome, I'm not much of blogger, but as a developer, I feel that I should share my journey as I go. As I build out my website, I will begin posting my thoughts and career moves. Thanks for keeping up!"
  }
  
]

const technologiesSeed = [
  {
    techCategory: "HTML",
    techname: "HTML5",
    techimage: "./images/technologies/html5.png"
  },
  {
    techCategory: "JavaScript",
    techname: "React",
    techimage: "./images/technologies/react.png"
  },
  {
    techCategory: "JavaScript",
    techname: "jQuery",
    techimage: "./images/technologies/jquery.png"
  },
  {
    techCategory: "JavaScript",
    techname: "Node.js",
    techimage: "./images/technologies/nodejs.png"
  },

]

db.Blog
  .remove({})
  .then(() => db.Blog.collection.insertMany(blogSeed))
  .then(data => {
    console.log(data.insertedIds.length + " blog posts inserted!");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Projects
  .remove({})
  .then(() => db.Projects.collection.insertMany(projectsSeed))
  .then(data => {
    console.log(data.insertedIds.length + " Projects inserted!");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Technologies
  .remove({})
  .then(() => db.Technologies.collection.insertMany(technologiesSeed))
  .then(data => {
    console.log(data.insertedIds.length + " Technologies inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
