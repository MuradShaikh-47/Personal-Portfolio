import { Flag, Github, Instagram, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react'
import React, { useRef, useState } from 'react'
import { cn } from '../lib/utils'
import { useToast } from "@/hooks/use-toast"
import emailjs from '@emailjs/browser'

export const Contact = () => {

    const { toast } = useToast();

    const formRef = useRef();

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        emailjs.sendForm(
            "service_y38erjt", //service id emailjs
            "template_l2if3uu", //template id emailjs
            formRef.current,    // current form reference
            "5ecPYwVCnoh1k97-d" //public key emailjs
        ).then(
            (result) => {
                toast({
                    title: "Message sent!",
                    description: "Thank you for connecting. I'll get to you soon...!",
                });
                formRef.current.reset();
                setIsSubmitting(false);
            },
            (error) =>{
                toast({
                    title: "OOPS!!! Failed to Send message...",
                    description: "Please try again..."
                });
                setIsSubmitting(false);
            }
        );


    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary text-glow">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out, I'm always open to discussing new opportunities.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8 ">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                        <div className="container">
                            <div className="space-y-6 justify-center">
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Mail className="h-6 w-6 text-primary" />
                                    </div>

                                    <div className="">
                                        <h4 className="font-medium">E-mail</h4>
                                        <a href="mailto:msshaikh0047@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                            msshaikh0047@gmail.com
                                        </a>
                                    </div>

                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Phone className="h-6 w-6 text-primary" />
                                    </div>

                                    <div className="mx-7">
                                        <h4 className="font-medium">Phone</h4>
                                        <a href="tel:+919561901363" className="text-muted-foreground hover:text-primary transition-colors">
                                            +91 9561901363
                                        </a>
                                    </div>

                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <MapPin className="h-6 w-6 text-primary" />
                                    </div>

                                    <div className="">
                                        <h4 className="font-medium">Location</h4>
                                        <a className="text-muted-foreground hover:text-primary transition-colors">
                                            Pune, Maharashtra, India
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me...</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/murad-shaikh/" target="_blank" className="hover:text-blue-500">
                                    <Linkedin />
                                </a>
                                <a href="https://www.instagram.com/murad_shaikh47/"
                                    target="_blank" className="hover:text-pink-500">
                                    <Instagram />
                                </a>
                                <a href="https://github.com/MuradShaikh-47"
                                    target="_blank" className="hover:text-blue-900">
                                    <Github />
                                </a>
                            </div>
                        </div>

                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs"

                    >
                        <h3 className="text-2xl font-semibold mb-6">Send a message</h3>
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" >
                            <div className="">
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name: </label>
                                <input type="text" id="name" name="from_name" className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Enter your name" required />
                            </div>
                            <div className="">
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Your E-mail: </label>
                                <input type="email" id="email" name="from_email" className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Enter your email" required />
                            </div>

                            <div className="">
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message: </label>
                                <textarea type="text" id="message" name="message" className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none" placeholder="Say something..." required />
                            </div>

                            <button type="submit"
                                disabled={isSubmitting}
                                className={cn("cosmic-button w-full flex items-center justify-center gap-2",

                                )}>
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}
