const data = {
  english: {
    welcome:
      "Welcome to my portfolio ! To display the available commands type <code>help</code>. To validate each command press <em>Enter</em>, you can use the <em>Tabulation</em> key to help you complete a command.",

    information:
      "This site was entirely created using <code>HTML</code>, <code>CSS</code> and <code>Javascript</code> without using any library or framework. This site contains a large number of features (hidden animations, secret themes, etc.) but also a well-hidden <code>easter egg</code> that only developers can find. Good discovery!",

    btnpopup: "Continue",

    help: `<li><code>about-me</code>: Display information about me</li>
    <li><code>clear</code>: Clean the terminal</li>
    <li><code>experiences</code>: Displays the list of my experiences</li>
    <li><code>get resume</code>: Download my Resume</li>
    <li><code>get linkedin</code>: Link to my Linkedin</li>
    <li><code>get github</code>: Link to my Github</li>
    <li><code>help</code>: Displays the list of commands</li>
    <li><code>passions</code>: Displays the list of my hobbies</li>
    <li><code>my-projects</code>: Displays the list of my personal projects</li>
    <li><code>themes</code>: Change the terminal theme</li>
    <li><em>You can use the TAB key to complete a command line</em></li>
    <li><em>You can find the old commands with the up and down arrows</em></li>`,

    aboutme: `{<br>
      &nbsp;&nbsp;&nbsp;"name" : "Rohit Dhas",<br>
      &nbsp;&nbsp;&nbsp;"language" : "JavaScript, TypeScript, Node JS, SCSS, HTML, CSS, Python, C, C++",<br>
      &nbsp;&nbsp;&nbsp;"framework" : "React, Redux, Angular, Next JS, Nest JS, Socket.io, Express JS",<br>
      &nbsp;&nbsp;&nbsp;"tools": "Git, GitHub, Heroku, Netlify, Vercel, Figma, Firebase",<br>
      &nbsp;&nbsp;&nbsp;"softSkills": "Agile Method, Teamwork",<br>
      &nbsp;&nbsp;&nbsp;"favoriteIDE": "VS Code",<br>
      &nbsp;&nbsp;&nbsp;"city" : "Pune, India"<br>
    }`,

    experience: `<tr>
    <th>Date</th>
    <th>Company</th>
    <th>Position</th>
    <th class="description">Description</th>
  </tr>
  <tr>
    <td class="center">November 2021 - March 2022</td>
    <td>QuadB Technologies</td>
    <td>React JS Developer</td>
    <td>Worked as a React JS developer on Quadb's CRM Project - It's a web based sales CRM that works as account management tool for sales & marketing team.</td>
  </tr>
  <tr>
    <td class="center">April 2022- July 2022</td>
    <td>Parceldeck</td>
    <td>Full Stack Developer</td>
    <td>Worked as a Full Stack developer at parceldeck.in - It's a web based dashboard for parcels, where you can send and track parcels.</td>
  </tr>`,

    cv: `The resume download will begin.`,

    redirectLinkedin: `You will be redirected to Linkedin.`,

    redirectGithub: `You will be redirected to Github.`,

    hobby: `{<br>
    &nbsp;&nbsp;&nbsp;"Programming": "React, Node",<br>
    &nbsp;&nbsp;&nbsp;"Other" : "Learning more about tech, Design, Marketing"<br>
  }`,

    project: `<table class="result">
  <tr>
    <th>index</th>
    <th>Name</th>
    <th>Tech</th>
    <th class="description">Description</th>
    <th>As a team?</th>
    <th>Github</th>
  </tr>
  <tr>
    <td class="center">1</td>
    <td class="center">Topstore</td>
    <td class="center">React Redux Styled-Components Node Express MongoDB Netlify</td>
    <td>It's an E-Commerce Website</td>
    <td class="center">No</td>
    <td class="center"><a href="https://topstore.netlify.app/" target="blank">Link</a></td>
  </tr>
  <tr>
    <td class="center">2</td>
    <td class="center">Bloggie</td>
    <td class="center">React Redux Node Express Passport-JS MongoDB Heroku</td>
    <td>It's a blogging platform where you can read and write blogs using Markdown.</td>
    <td class="center">No</td>
    <td class="center"><a href="http://bloggie-blog.herokuapp.com/" target="blank">Link</a></td>
  </tr>
  <tr>
    <td class="center">3</td>
    <td class="center">Topstore API</td>
    <td class="center">Node Express MongoDB Heroku</td>
    <td>It's a free REST API, which provides dummy data of products, that can be used with your shopping or e-commerce website prototype.</td>
    <td class="center">No</td>
    <td class="center"><a href="https://topstore-api.herokuapp.com/" target="blank">Link</a></td>
  </tr>
  </table><br>
  <p class="result"><em>You can see the site attached to the project using the command</em> <code>my-projects[index].website</code><em>, index being the number associated with the project.</em></p>`,

    glassmorphismOff: `<p class="notfound result glassmorphismOffresult">You have just deactivated the glassmorphism design to activate it use the <code>glassmophism</code> command.`,

    glassmorphismOn: `<p class="notfound result glassmorphismOnresult">You have just activated the glassmorphism design to deactivate it use the <code>glassmophism</code> command.`,

    notfound: `<span class="notfoundlanguage"><br><br>Type the command <code>help</code> to display the list of available commands.</p></span>`,

    notfoundmenu: `<span class="notfoundmenu"><br><br>Type the command <code>themes</code> to display the list of available themes.</p><br>
  <p class="result">/!\\ to return to the main menu please use the command <code>exit</code></p></span>`,

    website: `<p class="result websiteresult">You will be redirected to the project website.</p>`,

    ls1: `
    <div><code>.</code></div>
    <div><code>..</code></div>
    <div>about-me</div>
    <div>clear</div>
    <div>experiences</div>
    <div>get resume</div>
    <div>get linkedin</div>
    <div>get github</div>
    <div>help</div>
    <div>passions</div>
    <div>my-projects</div>
    <div>my-projects[1].website</div>
    <div>my-projects[2].website</div>
    <div>my-projects[3].website</div>
    <div><code>themes</code></div>
  `,

    ls2: `
    <div>about-me</div>
    <div>clear</div>
    <div>experiences</div>
    <div>get resume</div>
    <div>get linkedin</div>
    <div>get github</div>
    <div>help</div>
    <div>passions</div>
    <div>my-projects</div>
    <div>my-projects[1].website</div>
    <div>my-projects[2].website</div>
    <div>my-projects[3].website</div>
    <div><code>themes</code></div>
  `,

    listsecretresult: `
      <li><code>move</code>: Activate background animation</li>
      <li><code>remove</code>: Disables background animation</li>
      <li><code>glassmorphism</code>: Enable/disable the glassmorphism animation on the theme</li>
      <li><code>secrets</code>: Enable secret themes</li>
      <li>/!\\ These commands are not part of the easter egg to find. Good luck, you're almost there!</li>`,

    congratulation: `Congratulations you have found the <code>.secret</code> folder.`,

    bodymail: `mailto:rohitdhas666@gmail.com?subject=Your portfolio is amazing, are you open to opportunities?&body=Rohit Dhas > Hello to you who found my easter egg, I am open to opportunities professionals so do not hesitate to contact me by sending me this email with your proposal. I will contact you to arrange a phone interview. Thank you for your time !`,
  },
};

let welcome = document.getElementById("welcome");
// let popupcontent = document.getElementsByClassName("popupinfo")[0];
// let french = document.getElementById("french");
let english = document.getElementById("english");
let language;

window.addEventListener("load", setLanguage());

function setLanguage() {
  if (localStorage.getItem("language") === null) {
    localStorage.setItem("language", "english");
  }
  language = localStorage.getItem("language");
  welcome.innerHTML = data[language].welcome;
  // popupcontent.innerHTML = data[language].information;
  // btnPopup.innerHTML = data[language].btnpopup;
  document.querySelectorAll(".helpresult").forEach((element) => {
    element.innerHTML = data[language].help;
  });
  document.querySelectorAll(".aboutmeresult").forEach((element) => {
    element.innerHTML = data[language].aboutme;
  });
  document.querySelectorAll(".experienceresult").forEach((element) => {
    element.innerHTML = data[language].experience;
  });
  document.querySelectorAll(".cvresult").forEach((element) => {
    element.innerHTML = data[language].cv;
  });
  document.querySelectorAll(".redirectresultLinkedin").forEach((element) => {
    element.innerHTML = data[language].redirectLinkedin;
  });
  document.querySelectorAll(".redirectresultGithub").forEach((element) => {
    element.innerHTML = data[language].redirectGithub;
  });
  document.querySelectorAll(".hobbyresult").forEach((element) => {
    element.innerHTML = data[language].hobby;
  });
  document.querySelectorAll(".resultproject").forEach((element) => {
    element.innerHTML = data[language].project;
  });
  document.querySelectorAll(".glassmorphismOffresult").forEach((element) => {
    element.innerHTML = data[language].glassmorphismOff;
  });
  document.querySelectorAll(".glassmorphismOnresult").forEach((element) => {
    element.innerHTML = data[language].glassmorphismOn;
  });
  document.querySelectorAll(".notfoundlanguage").forEach((element) => {
    element.innerHTML = data[language].notfound;
  });
  document.querySelectorAll(".notfoundmenu").forEach((element) => {
    element.innerHTML = data[language].notfoundmenu;
  });
  document.querySelectorAll(".websiteresult").forEach((element) => {
    element.innerHTML = data[language].website;
  });
  document.querySelectorAll(".lsresult1").forEach((element) => {
    element.innerHTML = data[language].ls1;
  });
  document.querySelectorAll(".lsresult2").forEach((element) => {
    element.innerHTML = data[language].ls2;
  });
  document.querySelectorAll(".listsecretresult").forEach((element) => {
    element.innerHTML = data[language].listsecretresult;
  });
  document.querySelectorAll(".congratulation").forEach((element) => {
    element.innerHTML = data[language].congratulation;
  });
}

french.addEventListener("click", function () {
  language = "french";
  localStorage.setItem("language", language);
  setLanguage();
});

english.addEventListener("click", function () {
  language = "english";
  localStorage.setItem("language", language);
  setLanguage();
});
