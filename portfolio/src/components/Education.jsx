import React from 'react'
import { Educationitem } from './Educationitem'

const data =[
    {
        year: 2024,
        title: "AI Developer",
        duration: "6 months",
        detatails: "I have obtained this Professional Certificate, during which I acquired core knowledge and practical skills to build web applications and generative AI-powered solutions. I developed a foundational understanding of programming concepts and the Software Development Lifecycle (SDLC). I learned about AI concepts, techniques, and applications, including generative AI and prompt engineering. I demonstrated my ability to design and develop web applications using HTML, CSS, JavaScript, Python, and Flask, and built chatbots and innovative solutions using generative AI models, tools, and technologies. This experience has prepared me for a promising career in AI development and software engineering, with a specialization in generative AI."
    },
    {
        year: 2023,
        title: "Secure Coding",
        duration: "4 months",
        detatails:"Learned to implement security measures following OWASP guidelines to strengthen web applications' defenses against potential threats and vulnerabilities."
    }, 
    {
        year: 2021,
        title: "Java Developer",
        duration: "2 years",
        detatails: "Focus in the first year: Java 8 and UML, vanilla JavaScript and React.js, HTML5/CSS3, agile project management, database design with SQL Server, web development in Java with Spring Boot, Spring Security, and Vaadin, git, github. Focus in the second year: development for Android platforms with Spring Boot and React Native, advanced JavaScript with React.js, test-driven development in Java, and Java microservices with"

    },
   
]

const Education = () => {
  return (
    <div id='education' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl mb-4 mr-8 font-bold text-center text-[#001b5e]'>Education</h1>
        {data.map((item, id) => (
            <Educationitem key={id} year={item.year} title={item.title} duration={item.duration} detatails={item.detatails}/>
        ))}
    </div>
  )
}

export default Education