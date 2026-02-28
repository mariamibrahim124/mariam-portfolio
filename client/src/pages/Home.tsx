import { useState } from "react";
import {
  Mail,
  Linkedin,
  Github,
  Download,
  Code,
  Shield,
  Zap,
  Phone,
  MessageCircle,
} from "lucide-react";

/**
 * Design Philosophy: Tech-Forward Professional
 * - Dark blue (#0F172A) background with neon green (#10B981) accents
 * - Poppins font for headings, Inter for body text
 * - Smooth transitions and hover effects
 * - Professional yet modern aesthetic reflecting cybersecurity expertise
 */

export default function Home() {
  const profileImage = "/profile image.jpg";
  const heroImage =
    "https://private-us-east-1.manuscdn.com/sessionFile/zwu9F6Br7t7xvImCsSQ1lw/sandbox/m2gVXjCuy6Vh4JQbuHmR3b-img-1_1770757068000_na1fn_aGVyby1iYWNrZ3JvdW5k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvend1OUY2QnI3dDd4dkltQ3NTUTFsdy9zYW5kYm94L20yZ1ZYakN1eTZWaDRKUWJ1SG1SM2ItaW1nLTFfMTc3MDc1NzA2ODAwMF9uYTFmbl9hR1Z5YnkxaVlXTnJaM0p2ZFc1ay5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=mlNdrWz3lEZU3FgV0CDTXjugtL4IC42U9YG48u2aYUlllP4ibNTZrrn~TTnMG-WeZZ9GbzWIAplxJ5kXmpu~0rzsgCwAFKhRUreONL1i-bX6D~5kAela1OAFseHs-PBcvx2MDlSl-VPyMkv2t3eyeT58xtiojtCuUZvsWFyuKVZMBgKI0LgSrQWcfnKX4IrUTjPTlbkZ-pK~fGQUro~-BKyDwzbJe7acDJhdG5HIJ9VjD0goJBoB-96ahm4~b75rkGPy8vwBkEkqLlUtusXoK9Sra3y~~6bDBpJYPE2V6jL3hlkdsy4P3zvlEGZrVqIc6~JrTkAcJnjDi~53TY5izw__";
  const techPattern =
    "https://private-us-east-1.manuscdn.com/sessionFile/zwu9F6Br7t7xvImCsSQ1lw/sandbox/m2gVXjCuy6Vh4JQbuHmR3b-img-3_1770757072000_na1fn_dGVjaC1wYXR0ZXJu.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvend1OUY2QnI3dDd4dkltQ3NTUTFsdy9zYW5kYm94L20yZ1ZYakN1eTZWaDRKUWJ1SG1SM2ItaW1nLTNfMTc3MDc1NzA3MjAwMF9uYTFmbl9kR1ZqYUMxd1lYUjBaWEp1LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=R0wdcfhLfLRdw4cGarQJiHNi60AwiwvEkHeDAiYkaPlvIwhq5ahd5dIy~asjAgx9BKEARyHAUiFBDEGzgEULBbJaIlVb0EdWwl1prrOMAsJob98ksXutfXuu7h6wqqSgRM-SFMOAGpqkoWYvmmNKm8vchF4rsK6yhmlaIRrC-tU3OvtqQLCSpaB9pTo88rDaGh2giW5sVAc9iKxhOIz5QqXgGqZmu9kE8INF0FqnpDs76~wPGpKnn-3oZTbS-209a~wRrvJC6MaCk8oZ5Y5bpPyDmP0j5D~h9mSG7~KGlePZpRHBIsMSvI3unmBkhLUaVmEu7ItdvyECjT-NWp-RCA__";

  const [selectedTraining, setSelectedTraining] = useState(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);


  const skills = [
    {
      category: "Networking",
      items: [
        { name: "Packet Tracer", level: 90 },
        { name: "CCNA", level: 90 },
        { name: "Routing", level: 80 },
        { name: "Swithing", level: 80 },
        { name: "VPNs", level: 80 },
      ],
    },
    {
      category: "Security",
      items: [
        { name: "Firewalls", level: 85 },
        { name: "Network Security", level: 90 },
        { name: "Ethical Hacking", level: 80 },
        { name: "SOC Operations", level: 90 },
        { name: "SSL/TLS", level: 80 },
      ],
    },
    {
      category: "Programming",
      items: [
        { name: "Python", level: 90 },
        { name: "C++", level: 90 },
        { name: "C#", level: 80 },
        { name: "C", level: 75 },
        { name: "HTML", level: 85 },
        { name: "CSS", level: 80 },
        { name: "Java", level: 60 },
      ],
    },
    {
      category: "Tools & Platforms",
      items: [
        { name: "Cisco", level: 80 },
        { name: "Fortinet FortiGate", level: 85 },
        { name: "Visual Studio Code", level: 95 },
        { name: "Linux", level: 80 },
        { name: "Ubuntu", level: 65 },
        { name: "Red Hat", level: 60 },
        { name: "LetsDefend", level: 80 },
        { name: "TryHackMe", level: 85 },
      ],
    },
  ];

  const certifications = [
    {
      name: "IT Essentials from Cisco",
      link: "https://www.credly.com/badges/a0025e72-7e59-4fe5-a619-12617c182a9b/public_url",
    },
    {
      name: "CCNA: Introduction to Networks",
      link: "https://www.credly.com/badges/b6f4ed95-8b6e-44ff-9b61-3279c0d9e953/public_url",
    },
    {
      name: "CCNA: Switching, Routing, and Wireless Essentials",
      link: "https://www.credly.com/badges/ce35557c-6fc6-43a5-b0b8-26e7b24bb3dc/public_url",
    },
    {
      name: "CCNA: Enterprise Networking, Security, and Automation",
      link: "https://www.credly.com/badges/6c6f55c8-861e-45dd-82c9-f2ce0cebbd8a/public_url",
    },
    { name: "Programming Essentials in C++", 
      image: "/certificates/C++.jpg" },
    {
      name: "Cyber Security Fundamentals from ITI",
      image: "/certificates/cyber.jpg",
    },
    {
      name: "Fortinet FortiGate 7.4 Administrator",
      link: "https://www.credly.com/badges/9f37d65c-cbc6-4625-9d64-8278a54c4c68/public_url",
    },
    {
      name: "Network Basics from Great Learning",
      image: "certificates/network.jpg",
    },
    {
      name: "Introduction to Cyber Security from Cisco",
      link: "https://www.credly.com/badges/728f7c78-43a7-494b-a37f-3f4147b85b23/public_url",
    },
    {
      name: "LEAN Manufacturing certificate from ELARABY Group",
      image: "/certificates/lean.jpg",
    },
  ];

  const trainings = [
    {
      title: "DEPI Round 4, Information Security",
      period: "11/2025 – 07/2026",
      description:
        "Advanced training in cybersecurity fundamentals, SOC operations, and Cairo security tools",
      images: [
        "/training/Depi/depi.jpg", 
        "/training/Depi/depi2.jpg"
      ],
    },
    {
      title: "NTI x Fortinet Summer Training",
      period: "07/2025 – 08/2025",
      description:
        "Firewall policies & NAT, routing, VPNs, SSL/TLS inspection, SD-WAN, HA, and diagnostics",
      images: [
        "/training/Fortinet/fortinet.jpg",
        "/training/Fortinet/fortinet2.jpg",
        "/training/Fortinet/fortinet3.jpg",
        "/training/Fortinet/fortinet4.jpg",
      ],
    },
    {
      title: "Cyber Security Trainee, ITI",
      period: "05/2025 – 06/2025",
      description:
        "Cybersecurity Fundamentals covering network basics, ethical hacking, and network security",
    },
    {
      title: "CCNA Training, NTI",
      period: "08/2023 – 09/2023",
      description:
        "Intensive training covering all core CCNA topics including IP addressing, subnetting, and routing protocols",
      images: [
        "/training/ccna/ccna.jpg",
        "/training/ccna/ccna2.jpg",
        "/training/ccna/ccna3.jpg",
        "/training/ccna/ccna4.jpg",
      ],
    },
  ];

  const projects = [
    {
      title: "Portfolio Website",
      description: "Designed and developed a modern, responsive portfolio using React, Vite, and Tailwind CSS. Implemented reusable components, dynamic project sections, and smooth UI animations to enhance user experience. Integrated version control with GitHub and deployed using Vercel with automated CI/CD.",
      images: ["/projects/portfolio.jpg"],
      link: "https://github.com/mariamibrahim124/mariam-portfolio.git",
    },
    {
      title: "LetsDefend labs",
      description:
        "Practicing real-world SOC scenarios and incident response simulations on Let’sDefend platform.",
      images: ["/projects/lets.jpg"],
      //link: "https://github.com/yourusername/project1", //لو حابب تضيف لينك للمشروع على جت هاب
    },
    {
      title: "TryHackMe Labs",
      description: "Practicing offensive security and penetration testing fundamentals through hands-on labs on TryHackMe.",
      images: ["/projects/project2.jpg"],
    },
    {
      title: "CCNA Project",
      images: ["/projects/ccna.jpg", "/projects/ccna2.jpg"],
      description: "Designed and implemented a multi-router network topology using Cisco Packet Tracer, demonstrating proficiency in routing protocols, VLANs, and network security configurations.",
    },
    {
      title: "Web project1",
      description: "Created several web projects using HTML, CSS, and JavaScript to demonstrate front-end development skills and responsive design principles.",
      images: ["/projects/web.jpg"],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-accent">
            <a href="#home">MI</a></h1>
          <div className="flex gap-6 items-center">
            <a href="#about" className="hover:text-accent transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-accent transition-colors">
              Skills
            </a>
            <a
              href="#experience"
              className="hover:text-accent transition-colors"
            >
              Experience
            </a>
            <a href="#Certificates" className="hover:text-accent transition-colors">
              Certificates
            </a>
            <a href="#Projects" className="hover:text-accent transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-accent transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden pt-20 pb-32">
        <div
          className="absolute inset-0 opacity-30 z-0"
          style={{
            backgroundImage: `url('${heroImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background z-1" />

        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-2">
                <p className="text-accent font-semibold text-lg">
                  Welcome to my portfolio
                </p>
                <h1 className="text-5xl md:text-6xl font-bold text-foreground">
                  Mariam Ibrahim
                </h1>
                <p className="text-2xl text-muted-foreground">
                  Network Security Engineer
                </p>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Entry-level Network Security Engineer with hands-on training in
                CCNA, Fortinet, and cybersecurity fundamentals. Experienced in
                configuring firewalls, VPNs, routing, and network security labs.
              </p>
              <div className="flex gap-4 pt-4">
                <a
                  href="mailto:mariam.ibrahim2486@gmail.com"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors font-semibold"
                >
                  <Mail size={20} />
                  Get in Touch
                </a>
                <a
                  href="https://drive.google.com/file/d/1VtFquAHPxr3D22V6RQUx14l3aOZNBPGx/view?usp=sharing"
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors font-semibold"
                >
                  View CV
                </a>
                <a
                  href="/Mariam_Ibrahim_Resume.pdf"
                  download
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors font-semibold"
                >
                  Download CV
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center animate-fade-in-delayed">
              <div className="relative w-[300px] h-[400px] rounded-2xl overflow-hidden border-2 border-accent shadow-2xl">
                <img
                  src={profileImage}
                  alt="Mariam Ibrahim"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 border-t border-border">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-accent">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-xl border border-border hover:border-accent transition-colors">
              <Shield className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Security Focus</h3>
              <p className="text-muted-foreground">
                Specialized in network security, firewall configuration, and
                cybersecurity fundamentals with hands-on SOC operations
                experience.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl border border-border hover:border-accent transition-colors">
              <Code className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Technical Skills</h3>
              <p className="text-muted-foreground">
                Proficient in Python, C++, and network troubleshooting with
                practical experience in Cisco Packet Tracer and Linux
                environments.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl border border-border hover:border-accent transition-colors">
              <Zap className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Fast Learner</h3>
              <p className="text-muted-foreground">
                Continuous improvement mindset with strong problem-solving
                abilities and excellent communication skills for team
                collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 border-t border-border bg-card/30">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-accent">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, idx) => (
              <div
                key={idx}
                className="bg-card p-6 rounded-xl border border-border hover:border-accent transition-all hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-accent mb-4">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill, i) => (
                    <li
                      key={i}
                      className="flex items-center justify-between gap-4"
                    >
                      {/*skill name */}
                      <span className="text-sm font-medium w-28">
                        {skill.name}
                      </span>
                      {/* progress bar + number */}
                      <div className="flex items-center gap-3 w-full">
                        <div className="w-full bg-border rounded-full h-2">
                          <div
                            className="bg-accent h-2 rounded-full transition-all duration-500"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                        {/* percentage number */}
                        <span className="text-sm font-medium w-10 text-right">
                          {skill.level}%
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training & Experience Section */}
      <section id="experience" className="py-20 border-t border-border">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-accent">
            Training & Experience
          </h2>
          <div className="space-y-6">
            {trainings.map((training, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedTraining(training)}
                className="bg-card p-8 rounded-xl border border-border hover:border-accent transition-colors cursor-pointer"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-foreground">
                    {training.title}
                  </h3>
                  <span className="text-accent font-semibold text-sm">
                    {training.period}
                  </span>
                </div>
                <p className="text-muted-foreground">{training.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedTraining && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedTraining(null)}
        >
          <div
            className="bg-card p-6 rounded-xl max-w-lg w-full relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-accent text-xl"
              onClick={() => setSelectedTraining(null)}
            >
              ✕
            </button>

            <h3 className="text-xl font-bold mb-4 text-accent">
              {selectedTraining.title}
            </h3>

            {selectedTraining.images && (
              <div className="grid grid-cols-2 md:gap-cols-3 gap-3">
                {selectedTraining.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt=""
                    onClick={() => setSelectedImage(img)}
                    className="aspect-square object-cover rounded-md cursor-pointer hover:scale-105 transition-transform"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Certifications Section */}
      <section id="Certificates" className="py-20 border-t border-border bg-card/30">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-accent">
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, idx) =>
              cert.link ? (
                <a
                  key={idx}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border hover:border-accent hover:shadow-lg transition-all group"
                >
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="text-muted-foreground group-hover:text-accent transition-colors">
                    {cert.name}
                  </span>
                </a>
              ) : cert.image ? (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(cert.image)}
                  className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border hover:border-accent hover:shadow-lg transition-all cursor-pointer"
                >
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-12 h-12 object-cover rounded-md"
                  />
                  <span className="text-muted-foreground">{cert.name}</span>
                </div>
              ) : null
            )}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="Projects" className="py-20 border-t border-border">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-accent">Projects</h2>
          <div className="space-y-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedProject(project)}
                className="bg-card p-8 rounded-xl border border-border hover:border-accent transition-colors cursor-pointer"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  <span className="text-accent font-semibold text-sm">
                    {project.period}
                  </span>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-card p-6 rounded-xl max-w-lg w-full relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-accent text-xl"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>

            <h3 className="text-xl font-bold mb-4 text-accent">
              {selectedProject.title}
            </h3>
            <p className="text-muted-foreground mb-4">
              {selectedProject.description}
            </p>
            {selectedProject.images && (
              <div className="grid grid-cols-2 md:gap-cols-3 gap-3">
                {selectedProject.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt=""
                    onClick={() => setSelectedImage(img)}
                    className="aspect-square object-cover rounded-md cursor-pointer hover:scale-105 transition-transform"
                  />
                ))}
              </div>
            )}
            {selectedProject.link && (
              <a
                href={selectedProject.link}
                target="_blank"
                className="inline-flex items-center gap-2 mt-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg hover:bg-accent/90 transition-colors font-semibold"
              >
                View on GitHub
              </a>
            )}
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-20 border-t border-border">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-accent">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="mailto:mariam.ibrahim2486@gmail.com"
              className="bg-card p-8 rounded-xl border border-border hover:border-accent transition-all hover:shadow-lg text-center group"
            >
              <Mail
                className="text-accent mb-4 mx-auto group-hover:scale-110 transition-transform"
                size={32}
              />
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-muted-foreground break-all">
                mariam.ibrahim2486@gmail.com
              </p>
            </a>
            <a
              href="https://linkedin.com/in/mariam-ibrahim-ayad"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card p-8 rounded-xl border border-border hover:border-accent transition-all hover:shadow-lg text-center group"
            >
              <Linkedin
                className="text-accent mb-4 mx-auto group-hover:scale-110 transition-transform"
                size={32}
              />
              <h3 className="font-bold mb-2">LinkedIn</h3>
              <p className="text-muted-foreground">mariam-ibrahim-ayad</p>
            </a>
            <a
              href="https://github.com/mariamibrahim124"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card p-8 rounded-xl border border-border hover:border-accent transition-all hover:shadow-lg text-center group"
            >
              <Github
                className="text-accent mb-4 mx-auto group-hover:scale-110 transition-transform"
                size={32}
              />
              <h3 className="font-bold mb-2">GitHub</h3>
              <p className="text-muted-foreground">mariamibrahim124</p>
            </a>
            <a
              href="tel:+201205650311"
              className="bg-card p-8 rounded-xl border border-border hover:border-accent transition-all hover:shadow-lg text-center group"
            >
              <Phone
                className="text-accent mb-4 mx-auto group-hover:scale-110 transition-transform"
                size={32}
              />
              <h3 className="font-bold mb-2">Mobile</h3>
              <p className="text-muted-foreground break-all">
                +20 120 565 0311
              </p>
            </a>
            {/* WhatsApp */}
            <a
              href="https://wa.me/201205650311"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card p-8 rounded-xl border border-border hover:border-accent transition-all hover:shadow-lg text-center group"
            >
              <MessageCircle
                className="text-accent mb-4 mx-auto group-hover:scale-110 transition-transform"
                size={32}
              />
              <h3 className="font-bold mb-2">WhatsApp</h3>
              <p className="text-muted-foreground break-all">
                +20 120 565 0311
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-card/50">
        <div className="container max-w-6xl mx-auto px-4 text-center text-muted-foreground">
          <p>© Mariam Ibrahim Ayad. All rights reserved.</p>
          <p className="text-sm mt-2">
            Network Security Engineer | Cybersecurity Specialist
          </p>
        </div>
      </footer>

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-fade-in-delayed {
          animation: fadeIn 0.8s ease-out 0.2s both;
        }
      `}</style>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-3xl w-full px-4"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-4 text-white text-3xl"
            >
              ✕
            </button>

            <img
              src={selectedImage}
              alt=""
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
