import { ArrowDown } from "lucide-react"

export const HeroSection = () => {
    return (
        <section id="hero" className='relative min-h-screen flex flex-col items-center justify-center px-4'>
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">Hi! I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> A. Adithiya</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, quam molestiae! Doloremque voluptatem temporibus consectetur quis inventore sed a, ullam, reiciendis quasi ratione beatae iure. Quo magni ab, porro et at facere.
                    </p>

                    <div className="opacity-0 animate-fade-in-delay-3">
                        <a href="#projects" className="cosmic-button">View my Works</a>
                    </div>
                </div>

            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <ArrowDown className="h-6 w-6 text-primary"/>
            </div>
        </section>
    )
}