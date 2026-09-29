import "./App.css";
import profilePhoto from "./assets/mehh.jpeg";
const projects = [
  {
    title: "Scrape It",
    type: "Final Year Project",
    description:
      "A smart web-based scrap auction and recycling platform where users can buy, sell, list and bid on scrap items.",
    tech: "React • Node.js • Express • PostgreSQL",
  },
  {
    title: "Pills Reminder",
    type: "React Native App",
    description:
      "A medicine reminder application with medicine CRUD, reminders, notifications and dose history.",
    tech: "React Native • JavaScript",
  },
  {
    title: "Hospital Management System",
    type: "AI-Based Project",
    description:
      "A hospital management system with an AI chatbot for appointment handling and doctor availability.",
    tech: "Python • AI Chatbot",
  },
  {
    title: "Student Management System",
    type: "Web Application",
    description:
      "A student management web application for managing student records and academic information.",
    tech: "Laravel • PHP • MySQL",
  },
  {
    title: "Algorithmic Trading",
    type: "Course Project",
    description:
      "An algorithmic trading project focused on ATR-based stop-loss strategies and performance analysis.",
    tech: "Python • yFinance • Trading Strategy",
  },
];

const skills = [
  "React",
  "React Native",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express.js",
  "Laravel",
  "PHP",
  "Python",
  "Java",
  "C / C++",
  "PostgreSQL",
  "MySQL",
  "Firebase",
  "Git & GitHub",
];

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#home" className="logo">
          <span>SK</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        {/* HERO */}
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="eyebrow">HELLO, I'M</p>

            <h1>
              Sawera <span>Kamal</span>
            </h1>

            <h2>Computer Science Graduate & Web Developer</h2>

            <p className="hero-text">
              I build modern, responsive and user-focused web applications
              using modern technologies. Passionate about software development,
              problem solving and creating meaningful digital experiences.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-btn">
                View My Work
              </a>

              <a
                href="/sawera-kamal-cv.pdf"
                download="Sawera-Kamal-CV.pdf"
                className="secondary-btn"
              >
                Download CV ↓
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/Sawera09"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/sawerakamal6/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <div className="hero-card">
            <img
  src={profilePhoto}
  alt="Sawera Kamal"
  className="profile-photo"
/>
                </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section about">
          <div className="section-heading">
            <p>ABOUT ME</p>
            <h2>Turning ideas into digital experiences.</h2>
          </div>

          <div className="about-content">
            <p>
              I'm a Computer Science graduate with a strong interest in web
              development and software engineering. I enjoy turning ideas into
              functional, clean and user-friendly applications.
            </p>

            <p>
              My experience includes working with React, Laravel, Node.js,
              databases and mobile development. My Final Year Project,
              <strong> Scrape It</strong>, is a smart scrap auction and
              recycling platform designed to connect buyers and sellers.
            </p>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <div className="section-heading">
            <p>MY TOOLKIT</p>
            <h2>Skills & Technologies</h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill}>
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section projects-section">
          <div className="section-heading">
            <p>MY WORK</p>
            <h2>Featured Projects</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-number">
                  0{index + 1}
                </div>

                <p className="project-type">{project.type}</p>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <span className="tech">{project.tech}</span>
              </article>
            ))}
          </div>
        </section>

      {/* EXPERIENCE */}
<section id="experience" className="section experience">
  <div className="section-heading">
    <p>MY JOURNEY</p>
    <h2>Experience & Education</h2>
  </div>

  <div className="timeline">

    {/* Education */}
    <div className="timeline-item">
      <span>2026</span>
      <div>
        <h3>BS Computer Science Graduate</h3>
        <p>
          SZABIST University, Karachi
        </p>
      </div>
    </div>

    {/* Teaching Experience */}
    <div className="timeline-item">
      <span>2023 — Present</span>
      <div>
        <h3>Computer Teacher</h3>
        <p>
          Jinnah Grammar School, Karachi — Teaching Computer Science
          to secondary-level students.
        </p>
      </div>
    </div>

    {/* Internship */}
    <div className="timeline-item">
      <span>2025</span>
      <div>
        <h3>Software Development Intern</h3>
        <p>
          Gained practical experience in software and web development
          through hands-on projects and development tasks.
        </p>
      </div>
    </div>

    {/* Volunteering */}
    <div className="timeline-item">
      <span>2023 — 2025</span>
      <div>
        <h3>Volunteer & Social Media Influencer</h3>
        <p>
          Million Smile Foundation, Karachi — Contributed to
          community initiatives and social media activities.
        </p>
      </div>
    </div>

    {/* TCF Ambassador */}
    <div className="timeline-item">
      <span>2024 — 2025</span>
      <div>
        <h3>TCF Coaching Ambassador</h3>
        <p>
          The Citizens Foundation (TCF), Karachi — Supported
          educational and coaching-related initiatives.
        </p>
      </div>
    </div>

  </div>
</section>
        {/* CONTACT */}
        <section id="contact" className="contact-section">
          <p className="eyebrow">LET'S CONNECT</p>

          <h2>Have a project in mind?</h2>

          <p>
            I'm open to opportunities, collaborations and exciting
            development projects.
          </p>

          <a href="mailto:sawerakamal6@gmail.com" className="primary-btn">
            Get In Touch →
          </a>

          <div className="contact-info">
            <span>📧 sawerakamal6@gmail.com</span>
            <span>📍 Karachi, Pakistan</span>
          </div>
        </section>
      </main>

     
    </div>
  );
}

export default App;