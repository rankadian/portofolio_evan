import { useRef, useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import ScrambledText from "./components/ScrambledText/ScrambledText";
import SplitText from "./components/SplitText/SplitText";
import Lanyard from "./components/Lanyard/Lanyard";
import GlassIcons from "./components/GlassIcons/GlassIcons";
import { listTools, listProyek } from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal";
import Aurora from "./components/Aurora/Aurora";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function App() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    const isReload =
      performance.getEntriesByType("navigation")[0]?.type === "reload";

    if (isReload) {
      const baseUrl = window.location.origin + "/portofolio/";
      window.location.replace(baseUrl);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full -z-10 ">
        <Aurora
          colorStops={["#577870", "#1F97A6", "#127B99"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
          <div className="animate__animated animate__fadeInUp animate__delay-3s">
            <div className="flex items-center gap-3 mb-6 bg bg-zinc-800 w-fit p-4 rounded-2xl">
              <img src="./assets/rb_1.png" className="w-10 rounded-md" />
              <q>Fortis Fortuna Adiuvat</q>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <ShinyText
                text="Hi I'm Evan Diantha Fafian"
                disabled={false}
                speed={3}
                className="custom-class"
              />
            </h1>
            <BlurText
              text="An application and web developer focused on designing and implementing innovative, efficient, and user-friendly digital solutions. Interested in enhancing user experience through the application of software engineering principles, system integration, and best practices in information technology development."
              delay={150}
              animateBy="words"
              direction="top"
              className=" mb-6"
            />
            <div className="flex items-center sm:gap-4 gap-2">
              <a
                href="./assets/CV EVAN.pdf"
                download="Evan_Diantha_Fafian_CV.pdf"
                className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors"
              >
                <ShinyText
                  text="Download CV"
                  disabled={false}
                  speed={3}
                  className="custom-class"
                />
              </a>

              <a
                href="#project"
                className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors"
              >
                <ShinyText
                  text="Explore My Projects"
                  disabled={false}
                  speed={3}
                  className="custom-class"
                />
              </a>
            </div>
          </div>
          <div className="md:ml-auto animate__animated animate__fadeInUp animate__delay-4s">
            <ProfileCard
              name="Evan Diantha F."
              title="Web Developer"
              handle="evann_dn"
              status="Online"
              contactText="Contact Me"
              avatarUrl="./assets/rb_2.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log("Contact clicked")}
            />
          </div>
        </div>

        {/* About Section */}
        <div
          className="mt-15 mx-auto w-full max-w-[1600px] rounded-3xl border-[5px] border-violet-500/40 shadow-[0_0_30px_rgba(168,85,247,0.4)] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-6"
          id="about"
        >
          <div
            className="flex flex-col md:flex-row items-center justify-between gap-10 pt-0 px-8"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <div className="basis-full md:basis-7/12 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-violet-500/30">
              <div className="flex-1 text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                  About Me
                </h2>
                <BlurText
                  text="I’m Evan Diantha Fafian, a full-stack developer passionate about building modern, high-performance applications with an intuitive user experience. I enjoy working with the latest technologies like Artificial Intelligence, Machine Learning, and cloud-based development, blending creativity with precision to deliver impactful solutions. With over two years of experience and more than 10 completed projects, I’m committed to helping users and businesses grow in the digital era through functional, aesthetic, and scalable digital products."
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-base md:text-lg leading-relaxed mb-10 text-gray-300"
                />

                <div className="flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-y-8 sm:gap-y-0 mb-4 w-full">
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      10<span className="text-violet-500">+</span>
                    </h1>
                    <p>Project Finished</p>
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      2<span className="text-violet-500">+</span>
                    </h1>
                    <p>Years of Experience</p>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="600"
                    data-aos-once="true"
                  >
                    <h1 className="text-3xl md:text-4xl mb-1">
                      3.70<span className="text-violet-500">/4.00</span>
                    </h1>
                    <p>GPA</p>
                  </div>
                </div>

                <ShinyText
                  text="Working with heart, creating with mind."
                  disabled={false}
                  speed={3}
                  className="text-sm md:text-base text-violet-400"
                />
              </div>
            </div>

            <div className="basis-full md:basis-5/12 pl-0 md:pl-8 overflow-hidden max-w-full flex justify-center ">
              <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
            </div>
          </div>
        </div>

        {/* Tools Section */}
        <div className="tools mt-32">
          <h1
            className="text-4xl/snug font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Tools & Technologies
          </h1>
          <p
            className="w-2/5 text-base/loose opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            My Profesional Skills
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
                data-aos-once="true"
                className="flex items-center gap-4 p-4 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800/80 transition-all duration-300 group shadow-lg"
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-16 h-16 object-contain bg-zinc-800 p-2 rounded-lg group-hover:bg-zinc-900 transition-all duration-300"
                />
                <div className="flex flex-col overflow-hidden">
                  <div className="truncate">
                    <ShinyText
                      text={tool.nama}
                      disabled={false}
                      speed={3}
                      className="text-lg font-semibold block"
                    />
                  </div>
                  <p className="text-sm text-zinc-400 truncate">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Section */}
        <div
          className="proyek mt-32 py-10"
          id="project"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        ></div>
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Project
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Showcasing a selection of projects that reflect my skills, creativity,
          and passion for building meaningful digital experiences.
        </p>
        <div className="proyek-box mt-14">
          <div
            style={{ height: "auto", position: "relative" }}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
            data-aos-once="true"
          >
            <ChromaGrid
              items={listProyek}
              onItemClick={handleProjectClick}
              radius={500}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </div>
      </main>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  );
}

export default App;
