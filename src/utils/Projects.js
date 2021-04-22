import chatsrus from "../images/chatsrus.jpeg";
import movieSearch from "../images/moiveSearch.png";
import paletta from "../images/paletta.png";
import weatherImage from "../images/weather.png";
import workdaySheduler from "../images/calender.png";
const Projects = [
  {
    title: "Chats 'R' Us",
    image: chatsrus,
    description: "Real time chat app",
    technologies: ["Node js", "express","MySQL","sequelize", "express-session", "passportJS","CSS/Bootstrap","JavaScript","handlebars","bcrypt"],
    appLink: "https://group-3-project-2.herokuapp.com",
    repoLink: "https://github.com/mich3ll3e/Group-3-Project-2",
  },
  {
    title: "Movie Search",
    image: movieSearch,
    description: "Provides details to a certian movie title and displays related movies",
    technologies: ["HTML", "CSS", "JavaScript", "UIKit","NodeJs", "Express"],
    appLink: "https://laithalwani.github.io/movie-search",
    repoLink: "https://github.com/LaithAlwani/movie-search",
  },
  {
    title: "Paletta Studio",
    image: paletta,
    description: "A digital media company that produces educational apps",
    technologies: ["NodeJs","ExpressJs", "HTML", "CSS", "JavaScript", "UIKit"],
    appLink: "https://laithalwani.github.io/movie-search",
    repoLink: "https://github.com/LaithAlwani/movie-search",
  },
  {
    title: "Weather Dashboard",
    image: weatherImage,
    description: "provides current weather details and 5 days forecast for a specific city",
    technologies: ["HTML", "CSS", "JavaScript", "UIKit","Open Weather Map API"],
    appLink: "https://laithalwani.github.io/weather-dashboard",
    repoLink: "https://github.com/LaithAlwani/weather-dashboard",
  },
  {
    title: "Work Day Scheduler",
    image: workdaySheduler,
    description: "setting meetings and appointments and orginize the day",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstarp","MomentJs", "localstorage"],
    appLink: "https://laithalwani.github.io/work-day-scheduler",
    repoLink: "https://github.com/LaithAlwani/work-day-scheduler",
  },
];

export default Projects;