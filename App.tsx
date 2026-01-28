import React, { useState, useEffect } from 'react';
import { SectionType, PortfolioData } from './types';
import { PORTFOLIO_DATA } from './constants';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { RetroCard } from './components/RetroCard';
import { RetroButton } from './components/RetroButton';
import { RetroBackground } from './components/RetroBackground';
import { StartupScreen } from './components/StartupScreen';
import { Github, Linkedin, Twitter, Mail, ExternalLink, Download, ChevronRight, GraduationCap, CheckCircle2 } from 'lucide-react';

const App: React.FC = () => {
  const [hasBooted, setHasBooted] = useState(false);
  const [currentSection, setCurrentSection] = useState<SectionType>(SectionType.HOME);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [data] = useState<PortfolioData>(PORTFOLIO_DATA);
  
  // Form submission states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (hasBooted) {
      window.scrollTo(0, 0);
    }
  }, [currentSection, hasBooted]);

  const handleBootComplete = () => {
    setHasBooted(true);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const formEndpoint = `https://formsubmit.co/ajax/${data.personalInfo.email}`;

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setShowNotification(true);
        // Reset form or handle success UI
        (e.target as HTMLFormElement).reset();
        
        // Wait 3 seconds to show the notification, then redirect home
        setTimeout(() => {
          setShowNotification(false);
          setCurrentSection(SectionType.HOME);
        }, 3000);
      } else {
        alert("Transmission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred during transmission.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderHome = () => (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <section className="min-h-[60vh] flex flex-col justify-center items-start">
        <div className="inline-block px-3 py-1 mb-6 border-2 border-black bg-gray-100 text-black text-xs font-bold tracking-widest uppercase">
          System_Status: ONLINE
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tighter text-black">
          HELLO, I'M <span className="relative inline-block hover-glitch cursor-default decoration-4 underline underline-offset-8">{data.personalInfo.name}</span>
        </h1>
        <h2 className="text-xl md:text-3xl text-gray-600 mb-8 font-mono border-l-4 border-black pl-6">
          {data.personalInfo.title} <br/>
          <span className="text-sm md:text-xl text-gray-400"> // {data.personalInfo.tagline}</span>
        </h2>
        
        <div className="flex flex-wrap gap-4">
          <RetroButton onClick={() => setCurrentSection(SectionType.PROJECTS)}>
            View Modules
          </RetroButton>
          <RetroButton variant="secondary" onClick={() => setCurrentSection(SectionType.CONTACT)}>
            Init Comms
          </RetroButton>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <RetroCard title="ABOUT_ME">
          {data.personalInfo.about.map((para, idx) => (
            <p key={idx} className="mb-4 leading-relaxed text-sm md:text-base font-medium">
              {para}
            </p>
          ))}
          <div className="mt-6 flex gap-4">
            {data.socialLinks.map((link) => {
               const Icon = link.iconName === 'Github' ? Github : link.iconName === 'Linkedin' ? Linkedin : link.iconName === 'Mail' ? Mail : Twitter;
               return (
                 <a 
                   key={link.platform} 
                   href={link.url} 
                   target="_blank" 
                   rel="noreferrer"
                   className="text-gray-500 hover:text-black transition-colors transform hover:scale-110"
                 >
                   <Icon size={24} />
                 </a>
               )
            })}
          </div>
        </RetroCard>

        <RetroCard title="SKILL_MATRIX">
          <div className="flex flex-wrap gap-2">
            {data.personalInfo.skills.map((skill) => (
              <span key={skill} className="px-3 py-1 bg-white border-2 border-black text-xs font-bold hover:bg-black hover:text-white cursor-crosshair transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]">
                {skill}
              </span>
            ))}
          </div>
        </RetroCard>
      </section>
    </div>
  );

  const renderExperience = () => (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold text-black hover-glitch w-fit">EXECUTION_LOG</h2>
        <div className="h-[2px] bg-black flex-grow"></div>
      </div>
      
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gray-300">
        {data.experience.map((exp, index) => (
          <div key={exp.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-black bg-white group-hover:bg-black transition-colors shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
               <ChevronRight className="w-4 h-4 text-black group-hover:text-white" />
            </div>
            
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 border-2 border-black bg-white hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2 gap-2">
                <h3 className="font-bold text-lg text-black">{exp.role}</h3>
                <span className="text-xs bg-black text-white px-2 py-1 font-mono">
                  {exp.duration}
                </span>
              </div>
              <div className="text-sm text-gray-600 font-bold mb-4 uppercase tracking-wider">@ {exp.company}</div>
              <p className="text-sm text-gray-800 mb-4">{exp.description}</p>
              <ul className="list-square list-inside space-y-1 marker:text-black">
                {exp.achievements.map((ach, i) => (
                  <li key={i} className="text-xs text-gray-600 pl-2 border-l-2 border-gray-200">{ach}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderProjects = () => (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold text-black hover-glitch w-fit">ACTIVE_MODULES</h2>
        <div className="h-[2px] bg-black flex-grow"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.projects.map((proj) => (
          <RetroCard key={proj.id} title={proj.featured ? "FEATURED" : "STANDARD"} className="h-full flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-black group-hover:underline decoration-2 transition-colors">
                {proj.title}
              </h3>
              <a href={proj.link} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-black transition-colors">
                <ExternalLink size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-600 mb-6 flex-grow font-medium">
              {proj.description}
            </p>
            <div className="mt-auto space-y-4">
              <div className="flex flex-wrap gap-2">
                {proj.technologies.map(tech => (
                  <span key={tech} className="text-[10px] uppercase font-bold px-2 py-1 bg-gray-100 border border-gray-300 text-gray-800">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={proj.link} target="_blank" rel="noreferrer" className="block">
                <RetroButton variant="secondary" className="w-full text-sm py-2">
                  View Source
                </RetroButton>
              </a>
            </div>
          </RetroCard>
        ))}
      </div>
    </div>
  );

  const renderEducation = () => (
    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
       <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold text-black hover-glitch w-fit">DATA_BANKS</h2>
        <div className="h-[2px] bg-black flex-grow"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl text-black font-bold mb-6 flex items-center gap-2 border-b-2 border-gray-200 pb-2">
            <GraduationCap className="text-black" /> ACADEMIC_RECORDS
          </h3>
          <div className="space-y-6">
            {data.education.map((edu) => (
              <RetroCard key={edu.id}>
                <h4 className="text-lg font-bold text-black">{edu.institution}</h4>
                <div className="text-black font-medium text-sm mb-2">{edu.degree}</div>
                <div className="text-gray-500 text-xs mb-4">{edu.year}</div>
                <div>
                  <div className="text-xs uppercase text-gray-500 font-bold mb-2">Key Coursework:</div>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map(c => (
                      <span key={c} className="text-xs text-black bg-gray-100 px-1"> {c} </span>
                    ))}
                  </div>
                </div>
              </RetroCard>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl text-black font-bold mb-6 flex items-center gap-2 border-b-2 border-gray-200 pb-2">
            <Download className="text-black" /> CERTIFICATES
          </h3>
          <div className="space-y-6">
             {data.certifications.map((cert) => (
               <div key={cert.id} className="p-4 border-2 border-black bg-white hover:bg-gray-50 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
                  <h4 className="text-black font-bold">{cert.title}</h4>
                  <div className="flex justify-between items-end mt-2">
                    <div className="text-sm text-gray-600">{cert.organization}</div>
                    <div className="text-xs text-white bg-black px-2 py-0.5 font-bold">{cert.year}</div>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderContact = () => (
    <div className="max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 relative">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold text-black hover-glitch w-fit">OPEN_CHANNEL</h2>
        <div className="h-[2px] bg-black flex-grow"></div>
      </div>

      {showNotification && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[60] w-[90%] max-w-md animate-in zoom-in slide-in-from-top-4 duration-300">
          <RetroCard title="SYSTEM_MESSAGE" className="bg-white border-black border-4 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center gap-4">
              <CheckCircle2 className="text-green-600 w-10 h-10 shrink-0" />
              <div>
                <h4 className="font-bold text-lg leading-tight">TRANSMISSION SUCCESSFUL</h4>
                <p className="text-sm text-gray-600 mt-1">Data packet received. Redirecting to root directory...</p>
              </div>
            </div>
          </RetroCard>
        </div>
      )}

      <RetroCard className={`p-8 transition-opacity duration-300 ${showNotification ? 'opacity-20 pointer-events-none' : 'opacity-100'}`}>
        <p className="text-gray-600 mb-8 text-center font-medium">
          Transmitting data to: <span className="text-black font-bold bg-gray-200 px-1">{data.personalInfo.email}</span>
        </p>

        <form className="space-y-6" onSubmit={handleFormSubmit}>
          <input type="hidden" name="_subject" value={`Portfolio Comms from ${data.personalInfo.name}`} />
          <input type="hidden" name="_captcha" value="false" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs font-bold uppercase text-gray-500">User_ID</label>
              <input 
                type="text" 
                id="name"
                name="name"
                className="w-full bg-gray-50 border-2 border-gray-300 p-3 text-black focus:outline-none focus:border-black focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all placeholder-gray-400"
                placeholder="Name"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-bold uppercase text-gray-500">Return_Path</label>
              <input 
                type="email" 
                id="email"
                name="email"
                className="w-full bg-gray-50 border-2 border-gray-300 p-3 text-black focus:outline-none focus:border-black focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all placeholder-gray-400"
                placeholder="Email"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-xs font-bold uppercase text-gray-500">Data_Packet</label>
            <textarea 
              id="message"
              name="message"
              rows={5}
              className="w-full bg-gray-50 border-2 border-gray-300 p-3 text-black focus:outline-none focus:border-black focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all placeholder-gray-400"
              placeholder="Type your message..."
              required
            ></textarea>
          </div>

          <RetroButton type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "TRANSMITTING..." : "Transmit Message"}
          </RetroButton>
        </form>

        <div className="mt-12 flex justify-center gap-8 border-t-2 border-gray-100 pt-8">
          {data.socialLinks.map((link) => {
             const Icon = link.iconName === 'Github' ? Github : link.iconName === 'Linkedin' ? Linkedin : link.iconName === 'Mail' ? Mail : Twitter;
             return (
               <a 
                 key={link.platform} 
                 href={link.url} 
                 target="_blank"
                 rel="noreferrer"
                 className="flex flex-col items-center gap-2 text-gray-500 hover:text-black group"
               >
                 <div className="p-3 border-2 border-gray-200 rounded-full group-hover:border-black group-hover:bg-gray-50 transition-all">
                   <Icon size={20} />
                 </div>
                 <span className="text-xs uppercase font-bold">{link.platform}</span>
               </a>
             )
          })}
        </div>
      </RetroCard>
    </div>
  );

  return (
    <>
      {!hasBooted && <StartupScreen onComplete={handleBootComplete} />}
      <div className={`min-h-screen bg-transparent text-black selection:bg-black selection:text-white font-mono transition-opacity duration-1000 ${hasBooted ? 'opacity-100' : 'opacity-0'}`}>
        <RetroBackground />
        <Navbar 
          currentSection={currentSection} 
          onNavigate={setCurrentSection} 
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
        
        <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[85vh]">
          {currentSection === SectionType.HOME && renderHome()}
          {currentSection === SectionType.EXPERIENCE && renderExperience()}
          {currentSection === SectionType.PROJECTS && renderProjects()}
          {currentSection === SectionType.EDUCATION && renderEducation()}
          {currentSection === SectionType.CONTACT && renderContact()}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default App;