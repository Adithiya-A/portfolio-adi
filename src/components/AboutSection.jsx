import { Code } from "lucide-react"

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-foreground font-bold text-3xl md:text-4xl mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Experienced Web Developer</h3>
                        <p className="text-muted-foreground">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo perferendis tempore, ut cumque similique aspernatur cupiditate voluptates, consequatur atque itaque recusandae nisi placeat possimus suscipit rerum asperiores fugiat necessitatibus, facere expedita? Maxime officiis praesentium impedit quia eveniet sed corporis fugit delectus! Enim fugit, facere nemo porro qui asperiores ea totam.</p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">Contact</a>
                            <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">Resume</a>
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
                                    <p className="text-muted-foreground">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, nihil.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6"/>
                                </div>
                                <div className="text-left">
                                    <h2 className="font-semibold text-lg">Web Development</h2>
                                    <p className="text-muted-foreground">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, nihil.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6"/>
                                </div>
                                <div className="text-left">
                                    <h2 className="font-semibold text-lg">Web Development</h2>
                                    <p className="text-muted-foreground">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, nihil.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}