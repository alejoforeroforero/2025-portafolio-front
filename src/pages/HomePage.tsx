import { useEffect, useRef, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./HomePage.module.css";
import About from "@/components/about/About";
import Header from "@/components/header/Header";
import Experience from "@/components/experience/Experience";
import Projects from "@/components/projects/Projects";

const HomePage = () => {
  const navigate = useNavigate();
  const { section } = useParams<{ section?: string }>();
  const sections = useRef<(HTMLElement | null)[]>([]);
  const isFirstLoad = useRef(true);
  const lastScrollTime = useRef(0);
  const THROTTLE_MS = 150;

  const handleScroll = useCallback(() => {
    const now = Date.now();
    if (now - lastScrollTime.current < THROTTLE_MS) return;
    lastScrollTime.current = now;

    const scrollPosition = window.scrollY + window.innerHeight / 2;
    let currentSection = "home";

    sections.current.forEach((sectionEl) => {
      if (!sectionEl) return;
      
      const { top, bottom } = sectionEl.getBoundingClientRect();
      const sectionTop = top + window.scrollY;
      const sectionBottom = bottom + window.scrollY;

      if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
        currentSection = sectionEl.id;
      }
    });

    if (currentSection !== section) {
      navigate(`/${currentSection}`, { replace: true });
    }
  }, [navigate, section]);

  useEffect(() => {
    if (section && isFirstLoad.current) {
      const targetSection = document.getElementById(section);
      if (targetSection) {
        window.scrollTo(0, 0);
        requestAnimationFrame(() => {
          const yOffset = targetSection.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: yOffset,
            behavior: "instant",
          });
          isFirstLoad.current = false;
        });
      } else {
        isFirstLoad.current = false;
      }
    } else {
      isFirstLoad.current = false;
    }
  }, [section]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <section
          id="about"
          className={styles["about"]}
          ref={(el) => (sections.current[0] = el)}
        >
          <About />
        </section>
        <section
          id="experience"
          className={styles["experience"]}
          ref={(el) => (sections.current[1] = el)}
        >
          <Experience />
        </section>
        <section
          id="projects"
          className={styles["projects"]}
          ref={(el) => (sections.current[2] = el)}
        >
          <Projects />
        </section>
      </main>
    </>
  );
};

export default HomePage;