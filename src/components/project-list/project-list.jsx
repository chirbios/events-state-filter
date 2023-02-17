import './project-list.css'

export default function ProjectList({projects}) {
    return(
        <div className='project-list__wrapper'>
            {projects.map((item, index) => <div key={index} className={item.category}><img src={item.img} alt={item.category}/></div>)}
        </div>
    )
}