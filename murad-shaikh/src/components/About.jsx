import { Briefcase, Code, Code2, Download, DownloadCloud, User, User2 } from 'lucide-react'
import { useToast } from "@/hooks/use-toast"
import React, { useState } from 'react'
import { cn } from '../lib/utils';

export const About = () => {

  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const { toast } = useToast();

  const handleDownload = (e) => {
    e.preventDefault();
    if (isDownloaded) return;

    setIsDownloading(true);

    toast?.({
      title: "Downloading Resume...",
      description: "Starting download...",
    });

    const fileUrl = "/Resume_MuradShaikh.pdf";
    const fileName = "Murad_Shaikh_Resume.pdf";

    setTimeout(() => {

      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setIsDownloading(false);
      setIsDownloaded(true);

      toast?.({
        title: "Download Complete..!",
        description: "Resume has been downloaded..!",
      });

    }, 1200);
  };

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className='text-primary text-glow'>Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passionate Web Developer and Tech Creator</h3>

            <p className="text-muted-foreground">My development journey has been all about problem-solving from designing robust APIs in .NET to creating dynamic interfaces with React and JavaScript.</p>

            <p className="text-muted-foreground">I'm passionate about creating elegant solutions to complex problems, and I'm constantly learning new technologies and techniques to stay at the forefront of the ever-evolving web landscape.</p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className='cosmic-button'>
                Get in Touch
              </a>


              <a onClick={handleDownload} 
                disabled ={isDownloading || isDownloaded}
              className={cn("flex gap-3 px-6 justify-center items-center py-2 rounded-full border border-primary text-primary hover:bg-primary/20 hover:scale-105 transition-all duration-300 text-glow font-bold ",
                isDownloaded ? "bg-primary text-primary-foreground cursor-default" : "text-primary hover:bg-primary/20" 
              )}
              
              >
                <DownloadCloud size={18} /> 
              {
                isDownloading ? "Downloading..." : isDownloaded ? "Downloaded" : "Download Resume" 
              }

              </a>

            </div>

          </div>

          <div className="grid grid-cols-1 gap-6">

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code2 className="h-6 w-6 text-primary text-glow" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive and dynamic web applications with modern frameworks.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User2 className="h-6 w-6 text-primary text-glow" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces with a focus on user experience and accessibility.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary text-glow" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion with effective planning and communication.
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
