import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import { cn } from "../lib/utils"

export const ContactSection = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        setTimeout(() => {
            
        },1500);

    }

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get in <span className="text-primary">Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-6">
                    <div className="space-y-8">
                        <h3 className="text-xl font-semibold mb-6">Contact Details</h3>
                        <div className="space-y-6 justify-center">

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a href="mailto:" className="text-muted-foreground hover:text-primary transition-colors">sample@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">Phone</h4>
                                    <a href="tel:" className="text-muted-foreground hover:text-primary transition-colors">sample@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <p className="text-xs">Chennai, Tamilnadu, India</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="space-y-8">
                        <h3 className="text-xl font-semibold mb-6">Let's Connect</h3>
                        <div className="space-y-6 justify-center">

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Linkedin className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">LinkedIn</h4>
                                    <a href="mailto:" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">sample@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Github className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">GitHub</h4>
                                    <a href="mailto:" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">sample@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Instagram className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">Instagram</h4>
                                    <a href="mailto:" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">sample@gmail.com</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-xs mt-20">
                    <h3 className="text-xl font-bold mb-6">Send a Message</h3>
                    <form action="" className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2 flex items-start mx-4">Your Name</label>
                            <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2 flex items-start mx-4">Your Email</label>
                            <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" />
                        </div>
                        <div>
                            <label htmlFor="number" className="block text-sm font-medium mb-2 flex items-start mx-4">Your Number</label>
                            <input type="text" id="number" name="number" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2 flex items-start mx-4">Your Message</label>
                            <textarea id="message" name="message" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" />
                        </div>
                        <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                            <Send/> Send Message
                        </button>
                    </form>
                </div>

            </div>
            
        </section>
    )
}