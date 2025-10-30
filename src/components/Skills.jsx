import { div } from 'framer-motion/client'
import React from 'react'

const Skills = () => {

  const skills = [
    {name:"HTML/CSS",level:95,category:'FrontEnd'},
    {name:"React.js",level:95,category:'FrontEnd'},
    {name:"Javascript",level:90,category:'FrontEnd'},
    {name:"Tailwind CSS",level:90,category:'FrontEnd'},
    {name:"Next.js",level:80,category:'FrontEnd'},
    {name:"Node.js",level:90,category:'Backend'},
    {name:"Express",level:90,category:'Backend'},
    {name:"MongoDB",level:90,category:'Backend'},
    {name:"API Integration",level:85,category:'Backend'},
    {name:"GIt/Github",level:80,category:'tools'},
    {name:"Figma",level:80,category:'tools'},
    {name:"VS Code",level:80,category:'tools'},

  ]

  return (
    <section id='skills' className='flex justify-center items-center  py-24 px-4 relative bg-[#0f172a]'>
      <div className='w-full container  max-w-5xl'>
        <br />
        <br />
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center '>
          My <span>Skills</span>
        </h2>
        <br />
        <br />
        <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 '>
        {skills.map((skill,key)=>(
          <div key={key} className=' flex flex-col items-center justify-center h-[100px] border-2 border-[#7c3aed] bg-card p-6 rounded-lg shadow-xs card-hover mx-6'>
            <div className='text-center mb-4'>
              <h3 className='font-semibold text-lg'>{skill.name}</h3>
            </div>
            <div className='bg-black w-full h-2 rounded-full overflow-hidden'>
              <div className='bg-purple-900 h-2 rounded-4 origin-left animate-[grow_1.5s_ease-out] text-left' style={{width:skill.level+'%'}}>

              </div>
            </div>
            <div className='text-right mt-1'> <span className='text-sm text-muted-foreground'>{skill.level}%</span></div>
           
          </div>
        ))}
        </div>
      </div>
    </section>
  )
}

export default Skills