import { react, useState } from 'react';
import Service from './Service';
import client from './Client';
import {FaChevronLeft, FaChevronRight,  } from 'react-icons/fa';

const About = () => {
    const [index, setIndex]=useState(0);
    const {img}=client[index];  
    const nextPerson =() =>{
        setIndex((currentIndex)=>{
          const newIndex = currentIndex+1;
          if(newIndex > client.length -1)
          {
            return 0;
          }
          return newIndex;
        })
        };
        const prevPerson =() =>{
          setIndex((currentIndex)=>{
            const newIndex = currentIndex - 1;
            if(newIndex < 0)
              {
                return client.length - 1;
              }
            return newIndex;
          })
        };
  return (
    <article className="about active" data-page="about">
    <header>
        <h2 className="h2 article-title">About me</h2>
    </header>

    <section className="about-text">
        I am a dedicated PHP Developer with over 2+ years of experience in building dynamic and scalable web applications. I have hands-on experience with frameworks like Laravel and CodeIgniter, along with strong expertise in WordPress development including theme customization and plugin integration.

I also possess working knowledge of front-end technologies such as HTML, CSS, JavaScript, and basic React. I am comfortable working with MySQL databases, REST APIs, and version control tools like Git.

I am passionate about learning new technologies, writing clean and efficient code, and delivering high-quality solutions that meet business requirements.
    </section>

    <Service />

   

   
    {/* <section className="clients">
        
        <h3 className="h3 clients-title">Clients</h3>

        <ul className="clients-list has-scrollbar">
            <li className="clients-item">
                <a href="/"><img src={img} alt="logo" /></a>
            </li>

           
        </ul>
        <div className='btn-container'>
      <button className='prev-btn' onClick={prevPerson}>
        <FaChevronLeft/>
      </button>
      <button className='next-btn' onClick={nextPerson}>
        <FaChevronRight/>
      </button>
    </div>
    </section> */}

</article>  )
}

export default About