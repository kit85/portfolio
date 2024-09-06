import React from 'react'
import { ProjectItem } from './ProjectItem'
import e from "/src/assets/e-commerce.png"
import bookImage from "/src/assets/book.png"
import library from "/src/assets/library.png"
const projects = () => {
  return (
    <div id="projects" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e] '>Projects</h1>
        <p className='text-center py-8'>project</p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={e} link="https://github.com/kit85/e-commerce/blob/main/backend/controllers/productController.js" title="backend e-commerce"/>
            <ProjectItem img={bookImage} link="https://github.com/SwedishImposters/Bookclub-backend/tree/main/src"  title="backend-bookclub"/>
            <ProjectItem img={library} link="https://github.com/kit85/library-frontend/blob/main/src/components/Carousel.tsx" title="frontend-library"/>
        </div>
    </div>
  )
}

export default projects