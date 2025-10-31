import React, { useState } from 'react'
import { cn } from '../lib/utils';

const skills = [

    //Frontend
    { name: "HTML5/CSS3", level: 95, category: "frontend" },
    { name: "JavaScript", level: 95, category: "frontend" },
    { name: "React", level: 95, category: "frontend" },
    { name: "Tailwind CSS", level: 95, category: "frontend" },
    { name: "BootStrap", level: 95, category: "frontend" },

    //Backend

    { name: "C#", level: 70, category: "backend" },
    { name: "ASP.NET MVC", level: 70, category: "backend" },
    { name: "ASP.NET Core MVC", level: 70, category: "backend" },
    { name: "Web API", level: 70, category: "backend" },
    { name: "SQL Server", level: 70, category: "backend" },
    { name: "Entity Framework", level: 70, category: "backend" },
    { name: "LINQ", level: 70, category: "backend" },
    { name: "ADO.NET", level: 70, category: "backend" },

    //Tools
    {name: "Git/Github", level: 90, category:"tools"},
    {name: "JIRA", level: 90, category:"tools"},
    {name: "Docker", level: 90, category:"tools"},
    {name: "MVC Framework", level: 90, category:"tools"},
    {name: "Visual Studio", level: 90, category:"tools"},
    {name: "VS Code", level: 90, category:"tools"},

];

const categories = ["all", "frontend", "backend", "tools"];

export const Skills = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);
    return (
        <section id="skills" className="py-24 relative bg-secondary/30"> 
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary text-glow">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key)=>(
                        <button key={key} 
                        
                        onClick={() => setActiveCategory(category)}

                        className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                        )}>{category}</button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden ">
                                <div className="bg-green-400 h-2 rounded-full origin-left animate-grow"
                                style={{width:100 + "%"}}/>
                            </div>
                            {/* <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div> */}
                        </div>
                    ))}

                </div>

            </div>
        </section>
    )
}
