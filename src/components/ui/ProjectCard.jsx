import React from 'react'
import { ExternalLink, Github, TrendingUp } from 'lucide-react'

const ProjectCard = ({ project }) => {
  const { title, description, image, category, technologies, metrics, demoUrl, githubUrl } = project;
  return (
    <div className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden  hover:border-primary/30 transition-all duration-300">

      <div className="relative h-64 overflow-hidden ">
        <img
          src={image}
          alt={title}
          className='w-full  h-full object-cover transition-transfrom duration-700 group-hover:scale-110'
        />

        <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />


        <div className="absolute bottom-4 right-4 flex items-center gap-3">
          {demoUrl && (
            <a
              href={demoUrl}
              target='_blank'
              rel='noopener noreferrer'
              className=" p-2.5 bg-white/10 backdrop-blurmd rounded-lg border border-white/20 hover:bg-primary/30  hover:border-primary/50transition-all duration-300"
              title='View Demo'
            >
              <ExternalLink className="w-4 h-4 text-white" />
            </a>
          )}

          {githubUrl && (
            <a
              href={githubUrl}
              target='_blank'
              rel='noopener noreferrer'
              className=" p-2.5 bg-white/10 backdrop-blurmd rounded-lg border border-white/20 hover:bg-primary/30  hover:border-primary/50transition-all duration-300"
              title='View Code'
            >
              <Github className="w-4 h-4 text-white" />
            </a>
          )}

        </div>

        {/* show project.category}  */}

        <div className="absolute top-4  left-4">
          <span className="px-3 py-1">
            {project.category}
          </span>
        </div>


        <div className="">
          <div>
            <h3 className="">
              {title}
            </h3>
            <p className="">
              {description}
            </p>
          </div>
        </div>

        <div className="">
          {technologies.map((tech, index) => (
            <span key={index}
              className=""
            >{tech}</span>
          ))}

        </div>
        {/* Show metrics */}

        {
          metrics && (
            <div className="">
              <TrendingUp className='' />
              <p className=""> {metrics}</p>
            </div>
          )

        }

      </div>
    </div>
  )
}

export default ProjectCard
