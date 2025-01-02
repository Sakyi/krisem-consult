import React from 'react'
import ProjectCard from './ProjectCard'
export const ProjectsData = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/3182796/pexels-photo-3182796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        name: "Project 1 – Residential Development in Tesano",
        description: "Our experienced project managers oversee every aspect of construction, ensuring that timelines, budgets, and quality standards are consistently met. We coordinate all stakeholders and resources to ensure smooth project delivery."
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/8961261/pexels-photo-8961261.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Project 2 – Commercial Complex in Kessben",
        description: "We provide expert construction services across residential, commercial, and industrial sectors. From ground-up construction to renovation projects, our team ensures every job is completed on time and within budget."
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/8837715/pexels-photo-8837715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        name: "Project 3 – Infrastructure Project in Akwamu Fie",
        description: "With in-house engineers and architects, we offer design and engineering services that are innovative and functional. Our solutions consider both aesthetic value and practicality, ensuring that your project is a success from conception to completion."
    },
    {
        id: 4,
        img: "https://images.pexels.com/photos/8961131/pexels-photo-8961131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        name: "Project 4 – Sustainable Construction in Obuomu",
        description: "We specialize in environmentally responsible building techniques, incorporating energy-efficient designs and sustainable materials. Our green building solutions are tailored to reduce environmental impact and promote long-term savings."
    },
    {
        id: 5,
        img: "https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        name: "Project 5 – Infrastructure Development in Danfa",
        description: "Our team has extensive experience in infrastructure projects, including roads, bridges, utilities, and public works. We offer end-to-end services from planning and design to execution and maintenance."
    },
    {
        id: 6,
        img: "https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        name: "Project 6 – Renovation and Restoration in Addis-Ababa",
        description: "We breathe new life into older properties, maintaining historical integrity while upgrading facilities with modern systems, finishes, and energy-efficient solutions."
    },
    {
        id: 7,
        img: "https://images.pexels.com/photos/8961146/pexels-photo-8961146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        name: "Project 7 – Consultation and Feasibility Studies in Monrovia",
        description: "Our consultants offer expert advice on feasibility, budgeting, and risk management, ensuring that your construction project is both viable and efficient from the start."
    }
]
const Projects = () => {
  return (
    <div>
        <div className='container mb-10 mt-[80px]'>
            {/* Header Section */}
            <div className='text-center mb-24 max-w-[600px] mx-auto'>
                <p className='text-sm text-primary'>
                    Portfolio
                </p>
                <h1 className='text-3xl font-bold dark:text-white'>Our Work</h1>
                <p className='text-xs text-gray-400'>At Krisem, we take pride in our diverse portfolio of completed projects. Each project reflects our commitment to quality, safety, and client satisfaction.</p>
            </div>
            {/* Body section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
              {
                ProjectsData.map(({id, img, name, description}) => {
                    return(
                        <ProjectCard id={id} img={img} name={name} description={description}/>
                    )
                })
              }
            </div>
        </div>
    </div>

                // <div key={id} className='max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary hover:text-white duration-300 shadow-xl'>
                //     <div className=''>
                //          <img src={img} alt={name} className='mx-auto block transform -translate-y-14
                //          group-hover:scale-105 group-hover:rotate-6 duration-300 shadow-lg 
                //          max-h-full w-36 rounded-full object-none object-[59%_-4px]' />
                //     </div>
                //     <div className='p-4 text-center'>
                //         <h2 className='text-xl font-bold'>{name}</h2>
                //         <p className='text-sm text-center text-gray-500 line-clamp-2'>{description}</p>
                //     </div>
                // </div>
  )
}

export default Projects

// ServicesData.map(({id, img, name, description}) => {
//     return (
//         <div key={id} className='max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 dark:hover:bg-slate-50 dark:hover:text-primary hover:bg-primary hover:text-white duration-300 p-4 shadow-xl mx-auto'>
//             <img src={img} alt={name} className='w-full h-60 object-cover rounded-lg shadow-lg' />
//             <h2 className='text-xl font-bold mt-4'>{name}</h2>
//             <p className='text-sm text-left text-slate-400 mt-2'>{description}</p>
//         </div>
//     )
// }  
// )

{/* <div key={id} className='max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-[300px] group'>
<div>
    <img src={img} alt={name} className='mx-auto max-w-[140px] block transform -translate-y-20 group-hover:scale-105 group-hover:rotate-6 duration-300 drop-shadow-md'/>
</div>
</div> */}