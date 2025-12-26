import { ArrowRight, Github } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Prathyusha Events App",
        description: "Push notification app enabling students to view, register for events, with admin CRUD management.",
        image: "/projectImgs/pec_events.png",
        tags: ["React Native", "Docker", "Node.js", "TypeScript"],
        githubUrl: "https://github.com/Adithiya-A/prathyusha-events-app"
    },
    {
        id: 2,
        title: "Weather App",
        description: "Displays real-time conditions and 5-day hourly forecasts using OpenWeatherMap API with detailed city search",
        image: "/projectImgs/weather_app.jpeg",
        tags: ["React Native", "Docker", "Node.js", "JavaScript"],
        githubUrl: "https://github.com/Adithiya-A/Weather-App"
    },
    {
        id: 3,
        title: "Ecommerce Website",
        description: "Dedicated for watches featuring product management with CRUD operations and seamless purchasing functionality.",
        image: "/projectImgs/ecommerce_website.png",
        tags: ["React JS", "Node.js", "MongoDB"],
        githubUrl: "#"
    },
    {
        id: 4,
        title: "To Do List",
        description: "MERN stack to-do list application with full CRUD operations for efficient task management.",
        image: "/projectImgs/todolist_mern.png",
        tags: ["React JS", "Node.js", "MongoDB"],
        githubUrl: "https://github.com/Adithiya-A/To-Do-List-MERN"
    },
    {
        id: 5,
        title: "ChatGPT Clone",
        description: "ChatGPT-style chatbot delivering precise, intelligent responses based on user queries.",
        image: "/projectImgs/chatbot.jpg",
        tags: ["HTML", "CSS", "JavaScript"],
        githubUrl: "https://github.com/Adithiya-A/chatgpt-clone"
    },
    {
        id: 6,
        title: "View All my Projects",
        description: "",
        image: "/projectImgs/Screenshot (1).png",
        tags: ["All"],
        githubUrl: "#"
    }
]

export const ProjectSection = () => {
    return(
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">

                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="py-2 px-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border">{tag}</span>
                                    ))}
                                </div>

                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3 ">
                                    <a href={project.githubUrl} target="_blank" className=" text-foreground/80 hover:text-primary transition-colors duration-300">
                                    <div className="rounded-full border bg-primary hover:text-primary hover:bg-primary/10 px-2 py-2 transition-colors duration-300">
                                    <Github size={20}/>
                                    </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        </div>
                    ))}
                </div>

                    <div className="text-center mt-12">
                        <a href="https://github.com/Adithiya-A" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2 mb-10">
                            Visit my Github <ArrowRight size={16}/>
                        </a>
                        <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                View all Projects
                        </a>
                    </div>

            </div>
        </section>
    )
}