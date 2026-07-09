import React from 'react'

const Resume = () => {
  return (
    <article className="resume " data-page="resume">
    <header>
        <h2 className="h2 article-title">Resume</h2>
    </header>

    <section className="timeline">
        <div className="title-wrapper">
            <div className="icon-box"><ion-icon name="book-outline"></ion-icon></div>

            <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
            <li className="timeline-item">
                <h4 className="h4 timeline-item-title">(BCA)Aravali Commerce & Science College</h4>
                <span>2018 - 2022</span>
                <p className="timeline-text">There I learnt a wide range of topics that are essential to understanding both the theory and practical aspects of computing. This involves programming fundamentals, computer architecture, operating systems, databases, software engineering, problem solving, collaboration and communication soft skills.</p>
            </li>

            <li className="timeline-item">
                <h4 className="h4 timeline-item-title">(12th Science/Maths) B.N. Public School </h4>
                <span>2016 - 2018</span>
                <p className="timeline-text">I Completed my 12th in Science Maths Stream.. There I deepened my knowledge, enhanced my skills in the area and learnt how to increase my career prospects in a competitive job market.</p>
            </li>

            <li className="timeline-item">
                <h4 className="h4 timeline-item-title">(10th) The Stanvard Sr.Sec. School</h4>
                <span>2003 - 2005</span>
                <p className="timeline-text">There I learnt foundational courses and computer sciences fundamentals. In the institution, I chose my specialization in web-development that involves front-end and back-end technologies, user interface designs and content management systems.</p>
            </li>
        </ol>
    </section>

    <section className="timeline">
        <div className="title-wrapper">
            <div className="icon-box"><ion-icon name="book-outline"></ion-icon></div>

            <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
            <li className="timeline-item">
                <h4 className="h4 timeline-item-title">Web Developer</h4>
                <span>2022 - Present</span>
                <p className="timeline-text">I can develop and oversee creative concepts for projects and campaigns managing a team of designers, writers, and other creative professionals.</p>
            </li>

           
            {/* <li className="timeline-item">
                <h4 className="h4 timeline-item-title">Web designer</h4>
                <span>2010 - 2013</span>
                <p className="timeline-text">I create logos, color schemes and typography for a brand's identity. Also I develop graphics for websites, social media and digital ads with applications that enhance user experience.</p>
            </li> */}
        </ol>
    </section>

    <section className="skill">
        <h3 className="h3 skills-title">My Skills</h3>

        <ul className="skills-list content-card">
            <li className="skills-item">
                <div className="title-wrapper">
                    <h5 className="h5">Backend: Laravel, CodeIgniter,
PHP</h5>
                    {/* <data value="80">80%</data> */}
                </div>

                {/* <div className="skills-progress-bg">
                    <div className="skills-progress-fill" style={{width: "80%"}}></div>
                </div> */}
            </li>

            <li className="skills-item">
                <div className="title-wrapper">
                    <h5 className="h5">Frontend: React, HTML, CSS,
                    JavaScript</h5>
                    {/* <data value="70">50%</data> */}
                </div>

               
            </li>
            <li className="skills-item">
                <div className="title-wrapper">
                    <h5 className="h5">CMS: WordPress</h5>
                    {/* <data value="70">50%</data> */}
                </div>

               
            </li>
            <li className="skills-item">
                <div className="title-wrapper">
                    <h5 className="h5">API Development: REST APIs(GET, POST, Integrations)</h5>
                    {/* <data value="70">50%</data> */}
                </div>
            </li>
            <li className="skills-item">
                <div className="title-wrapper">
                    <h5 className="h5">Database: MySQL</h5>
                    {/* <data value="70">50%</data> */}
                </div>
            </li>
            <li className="skills-item">
                <div className="title-wrapper">
                    <h5 className="h5">ERP Systems: Lead ERP, Payroll</h5>
                    {/* <data value="70">50%</data> */}
                </div>
            </li>
            
        </ul>
    </section>
</article>
  )
}

export default Resume