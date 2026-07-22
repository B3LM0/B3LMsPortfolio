import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from '@/context/ThemeContext';
import { LoadingScreen } from '@/components/ui/LoadingScreen';
import { ScrollToTop } from '@/components/ui/ScrollToTop';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Stats } from '@/components/sections/Stats';
import { Education } from '@/components/sections/Education';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { Certifications } from '@/components/sections/Certifications';
import { LanguagesInterests } from '@/components/sections/LanguagesInterests';
import { Testimonials } from '@/components/sections/Testimonials';
import { GitHubCalendar } from '@/components/sections/GitHubCalendar';
import { Contact } from '@/components/sections/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>

      <Navbar />
      <main>
        <Hero />
        <About />
        {/* <Stats />*/}
        <Education />
        <Skills />
        <Projects />
       {/* <Experience />/}
        {/* <Certifications />*/}
        <LanguagesInterests />
        {/*<Testimonials />*/}
        {/*<GitHubCalendar />*/}
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
  );
}

export default App;
