import React from 'react'

export const ServicesData = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/3182796/pexels-photo-3182796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        name: "Project Management:",
        description: "Our experienced project managers oversee every aspect of construction, ensuring that timelines, budgets, and quality standards are consistently met. We coordinate all stakeholders and resources to ensure smooth project delivery."
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/8961261/pexels-photo-8961261.jpeg?auto=compress&cs=tinysrgb&w=600",
        name: "Construction and General Contracting:",
        description: "We provide expert construction services across residential, commercial, and industrial sectors. From ground-up construction to renovation projects, our team ensures every job is completed on time and within budget."
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/8837715/pexels-photo-8837715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        name: "Design and Engineering:",
        description: "With in-house engineers and architects, we offer design and engineering services that are innovative and functional. Our solutions consider both aesthetic value and practicality, ensuring that your project is a success from conception to completion."
    },
    {
        id: 4,
        img: "https://images.pexels.com/photos/8961131/pexels-photo-8961131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        name: "Sustainable Construction:",
        description: "We specialize in environmentally responsible building techniques, incorporating energy-efficient designs and sustainable materials. Our green building solutions are tailored to reduce environmental impact and promote long-term savings."
    },
    {
        id: 5,
        img: "https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        name: "Infrastructure Development:",
        description: "Our team has extensive experience in infrastructure projects, including roads, bridges, utilities, and public works. We offer end-to-end services from planning and design to execution and maintenance."
    },
    {
        id: 6,
        img: "https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        name: "Renovation and Restoration:",
        description: "We breathe new life into older properties, maintaining historical integrity while upgrading facilities with modern systems, finishes, and energy-efficient solutions."
    },
    {
        id: 7,
        img: "https://images.pexels.com/photos/8961146/pexels-photo-8961146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        name: "Consultation and Feasibility Studies:",
        description: "Our consultants offer expert advice on feasibility, budgeting, and risk management, ensuring that your construction project is both viable and efficient from the start."
    }
]
const Services = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white">
    <section className='container mb-10 py-8'>
        {/* Header Section */}
        <div className='text-center mb-20 max-w-[400px] mx-auto'>
            <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to bg-secondary'>
                Our Sevices
            </p>
            <h1 className='mb-1 text-3xl font-bold'>Our Services</h1>
            <p className='text-xm text-gray-400'>At Krisem we have a range of services, each tailored to meet the unique needs of our clients: </p>
        </div>
        {/* Card Section */}
        <div className='bg-gray-100 dark:bg-gray-800 dark:text-3xl p-4 rounded-2xl shadow-xl'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center'>
            {
        ServicesData.map(({id, img, name, description}) => {
            return (
                <div key={id} className='max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 dark:hover:bg-slate-50 dark:hover:text-primary hover:bg-primary hover:text-white duration-300 p-4 shadow-xl mx-auto'>
                    <img src={img} alt={name} className='w-full h-60 object-cover rounded-lg shadow-lg' />
                    <h2 className='text-xl font-bold mt-4'>{name}</h2>
                    <p className='text-sm text-left text-slate-400 mt-2'>{description}</p>
                </div>
            )
    }  
    )
}
            </div>
        </div>
    </section>
    </div>
  )
}

export default Services