import { Code, NotebookPen, Video } from "lucide-react"

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-foreground font-bold text-3xl md:text-4xl mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Experienced Full Web Developer</h3>
                        <p className="text-muted-foreground">
                            I’m a passionate, results-driven Web Developer who enjoys leveraging modern technologies to build engaging, 
                            high-performance websites. As a MERN stack developer, I focus on creating scalable and user-friendly solutions. 
                            Beyond web development, I’m exploring AI automations and content creation, with professional experience in scriptwriting and video editing.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">Contact</a>
                            <a href="src\assets\WD Resume Adi.pdf" download="Adithiya_Resume.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Resume
                            </a>
                        </div>
                    </div>


                    <div className="grid grid-cols-1 gap-6 ">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6"/>
                                </div>
                                <div className="text-left">
                                    <h2 className="font-semibold text-lg">Web Development</h2>
                                    <p className="text-muted-foreground">
                                        Experienced Full Stack Developer building scalable applications using React, Tailwind CSS, MongoDB, Node.js, and Express.js.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <NotebookPen className="h-6 w-6"/>
                                </div>
                                <div className="text-left">
                                    <h2 className="font-semibold text-lg">Content Creation</h2>
                                    <p className="text-muted-foreground">
                                        Professional YouTube content creator crafting engaging scripts focused on upcoming technologies and educational topics.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Video className="h-6 w-6"/>
                                </div>
                                <div className="text-left">
                                    <h2 className="font-semibold text-lg">Video Editing</h2>
                                    <p className="text-muted-foreground">
                                        Experienced video editor skilled in Adobe Premiere Pro, DaVinci Resolve, and Adobe Photoshop, creating high-quality long and short-form content.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}