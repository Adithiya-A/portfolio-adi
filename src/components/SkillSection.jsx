

const skills = [
        { name: "HTML", image: "/SkillImgs/html.png" },
        { name: "CSS", image: "/SkillImgs/css.png" },
        { name: "Tailwind CSS", image: "/SkillImgs/tailwind_css.png" },
        { name: "JavaScript", image: "/SkillImgs/java_script.png" },
        { name: "React JS", image: "/SkillImgs/react_js.png" },
        { name: "Node JS", image: "/SkillImgs/node_js.png" },
        { name: "MongoDB", image: "/SkillImgs/mongo_db.png" },
        { name: "Docker", image: "/SkillImgs/docker.png" },
        { name: "Linux", image: "/SkillImgs/linux.png" },
        { name: "N8N", image: "/SkillImgs/n8n.png" },
        { name: "Premiere Pro", image: "/SkillImgs/premiere_pro.png" },
        { name: "Photo Shop", image: "/SkillImgs/photo_shop.png" }
    ]

const experiences = [
    {
        year: "2024",
        title: "Video Editor",
        description: "Intern at RFI, Edited high-quality short-form contents for social media platforms."
    },
    
]

export const SkillSection = () => {

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/80">
            <div className="container mx-auto max-w-5xl">

                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Skills & <span className="text-primary">Experiences</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are my skills and professional experiences.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-6">
                    <div className="space-y-6 justify-center">

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">

                            {skills.map((skill, key) => (
                                <div key={key} className="group card-hover">

                                    <div className="p-3 rounded-full bg-primary/10 card-hover items-center flex justify-center">
                                        <img src={skill.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                                    </div>

                                    <div>
                                        <h3 className="text-sm font-semibold mt-1">{skill.name}</h3>
                                    </div>

                                </div>
                            ))}

                        </div>


                    </div>

                    <div className="space-y-6 justify-center">
                        {experiences.map((exp, key) => (
                            <div key={key}>
                                <div className="gradient-border p-6 card-hover">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 text-primary font-medium">
                                            {exp.year}
                                        </div>
                                        <div className="text-left">
                                            <h2 className="font-semibold text-lg">{exp.title}</h2>
                                            <p className="text-muted-foreground">{exp.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>

            </div>
        </section>
    )
}