(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},26:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var i=a(1),c=a.n(i),n=a(16),s=a.n(n),l=(a(22),a(4)),r=a(2),o=(a(23),a(24),a(0));var d=function(e){return Object(o.jsx)("main",{className:"wrapper container",children:e.children})},h=(a(26),function(){var e=Object(r.e)();return Object(o.jsxs)("nav",{className:"navbar navbar-expand navbar-light",children:[Object(o.jsx)(l.b,{to:"/react-portfolio",className:"navbar-brand",children:"Laith Alwani"}),Object(o.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(o.jsx)("li",{className:"navbar-item",children:Object(o.jsx)(l.b,{to:"/react-portfolio",className:"/"===e.pathname?"nav-link active":"nav-link",children:"About"})}),Object(o.jsx)("li",{className:"navbar-item",children:Object(o.jsx)(l.b,{to:"/react-portfolio/portfolio",className:"/portfolio"===e.pathname?"nav-link active":"nav-link",children:"Portfolio"})})]})]})}),p=a.p+"static/media/my-image.25dea838.jpg",b=a.p+"static/media/resume01.49a568eb.pdf",j=function(){return Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:" col-md-6 order-md-2 ",children:Object(o.jsx)("img",{className:"img-fluid p-3",src:p,alt:"middle eastern man"})}),Object(o.jsxs)("article",{className:"col-md-6 order-md-1 my-auto",children:[Object(o.jsx)("h2",{className:"text-center mb-4",children:"<About Me>"}),Object(o.jsx)("p",{className:"font-weight-bold",children:"I am a full stack web develpoer from Ottawa, Ontairo."}),Object(o.jsxs)("div",{className:"text-left",children:[Object(o.jsx)("p",{children:"I enjoy problem solving and taking on tough challenges and turning into a simple clean solution. I have experience in Html, CSS, JavaScript, jQuery and MERN Stack(Mongo, Express, REACT and Nodejs)."}),Object(o.jsx)("p",{children:"When I'm not coding or learning a new technology, you would find me videogaming, playing music or kicking around a soccer ball."})]}),Object(o.jsx)("div",{className:"text-center",children:Object(o.jsx)(l.b,{to:{pathname:b},className:"btn",target:"blank",children:"Full Resume"})})]})]})},m=a(14),u=c.a.createContext({title:"",image:"",description:"",technologies:[],appLink:"",repoLink:""}),x=a(15);a(35);var g=function(e){var t=e.handleBtnClick,a=Object(i.useContext)(u),c=a.title,n=a.image,s=a.description,r=a.technologies,d=a.appLink,h=a.repoLink;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"card text-center",children:[Object(o.jsx)("img",{src:n,alt:"Alt Description",className:"card-img-top"}),Object(o.jsxs)("div",{className:"card-body ",children:[Object(o.jsx)("h5",{className:"card-title ",children:c}),Object(o.jsx)("p",{className:"card-text text-center",children:s}),Object(o.jsxs)("div",{className:" card-text ",children:[Object(o.jsx)("h6",{children:"Technlogies:"}),Object(o.jsx)("div",{className:"row",children:r.map((function(e,t){return Object(o.jsx)("div",{className:"col-md-6",children:Object(o.jsx)("p",{children:e},t)})}))})]}),Object(o.jsxs)("div",{className:"",children:[Object(o.jsx)(l.b,{to:{pathname:d},className:"btn btn-sm",target:"_blank",children:"APPLICATION"}),Object(o.jsx)(l.b,{to:{pathname:h},className:"btn btn-sm",target:"_blank",children:"REPOSITORY"})]})]})]}),Object(o.jsxs)("div",{className:"text-center",children:[Object(o.jsx)("button",{className:"btn","data-value":"previous",onClick:t,children:Object(o.jsx)(x.a,{})}),Object(o.jsx)("button",{className:"btn","data-value":"next",onClick:t,children:Object(o.jsx)(x.b,{})})]})]})},O=[{title:"Chats 'R' Us",image:a.p+"static/media/chatsrus.927b1d88.jpeg",description:"Real time chat app",technologies:["Node js","express","MySQL","sequelize","express-session","passportJS","CSS/Bootstrap","JavaScript","handlebars","bcrypt"],appLink:"https://group-3-project-2.herokuapp.com",repoLink:"https://github.com/mich3ll3e/Group-3-Project-2"},{title:"Movie Search",image:a.p+"static/media/moiveSearch.cf38689e.png",description:"Provides details to a certian movie title and displays related movies",technologies:["HTML","CSS","JavaScript","UIKit","NodeJs","Express"],appLink:"https://laithalwani.github.io/movie-search",repoLink:"https://github.com/LaithAlwani/movie-search"},{title:"Paletta Studio",image:a.p+"static/media/paletta.3597db40.png",description:"A digital media company that produces educational apps",technologies:["NodeJs","ExpressJs","HTML","CSS","JavaScript","UIKit"],appLink:"https://laithalwani.github.io/movie-search",repoLink:"https://github.com/LaithAlwani/movie-search"},{title:"Weather Dashboard",image:a.p+"static/media/weather.3a35b639.png",description:"provides current weather details and 5 days forecast for a specific city",technologies:["HTML","CSS","JavaScript","UIKit","Open Weather Map API"],appLink:"https://laithalwani.github.io/weather-dashboard",repoLink:"https://github.com/LaithAlwani/weather-dashboard"},{title:"Work Day Scheduler",image:a.p+"static/media/calender.88f90ca1.png",description:"setting meetings and appointments and orginize the day",technologies:["HTML","CSS","JavaScript","Bootstarp","MomentJs","localstorage"],appLink:"https://laithalwani.github.io/work-day-scheduler",repoLink:"https://github.com/LaithAlwani/work-day-scheduler"}];var v=function(){var e=Object(i.useState)({title:"",image:"",description:"",technologies:[],appLink:"",repoLink:""}),t=Object(m.a)(e,2),a=t[0],c=t[1],n=Object(i.useState)(0),s=Object(m.a)(n,2),l=s[0],r=s[1];return Object(i.useEffect)((function(){c(O[0])}),[]),Object(o.jsx)(u.Provider,{value:a,children:Object(o.jsx)(g,{handleBtnClick:function(e){"next"===e.target.getAttribute("data-value")?function(e){e>=O.length&&(e=0),c(O[e]),r(e)}(l+1):function(e){e<0&&(e=O.length-1),c(O[e]),r(e)}(l-1)}})})};a(36);var f=function(){return Object(o.jsxs)("footer",{className:"text-center ",children:[Object(o.jsxs)("ul",{className:"list-inline",children:[Object(o.jsx)("li",{className:"list-inline-item",children:Object(o.jsx)(l.b,{to:{pathname:"https://github.com/LaithAlwani"},target:"_blank",className:"nav-link fa-lg",children:Object(o.jsx)("span",{className:"fab fa-github-square"})})}),Object(o.jsx)("li",{className:"list-inline-item",children:Object(o.jsx)(l.b,{to:{pathname:"https://www.linkedin.com/in/laith-alwani/"},target:"_blank",className:"nav-link",children:Object(o.jsx)("span",{className:"fab fa-linkedin fa-lg"})})}),Object(o.jsx)("li",{className:"list-inline-item",children:Object(o.jsx)(l.b,{to:{pathname:"https://www.facebook.com/AlwaniLaith"},target:"_blank",className:"nav-link",children:Object(o.jsx)("span",{className:"fab fa-facebook-square fa-lg"})})}),Object(o.jsx)("li",{className:"list-inline-item",children:Object(o.jsx)(l.b,{to:{pathname:"https://www.instagram.com/laitho15/"},target:"_blank",className:"nav-link",children:Object(o.jsx)("span",{className:"fab fa-instagram fa-lg"})})})]}),Object(o.jsx)("span",{className:"small",children:"Copyright \xa9 Laith Alwani 2020 - Ottawa,ON."})]})};var N=function(){return Object(o.jsxs)(l.a,{children:[Object(o.jsxs)(d,{children:[Object(o.jsx)(h,{}),Object(o.jsx)(r.a,{exact:!0,path:"/react-portfolio/",component:j}),Object(o.jsx)(r.a,{path:"/react-portfolio/portfolio",component:v})]}),Object(o.jsx)(f,{})]})};a(37);s.a.render(Object(o.jsx)(N,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.2f12bd75.chunk.js.map