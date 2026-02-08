import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProposedEndeavor from './components/ProposedEndeavor';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Evidence from './components/Evidence';
import Footer from './components/Footer';
import siteData from './data/data.json';

export default function App() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <Navbar />
      <Hero data={siteData.meta} />
      <ProposedEndeavor data={siteData.proposedEndeavor} />
      <Experience data={siteData.experience} />
      <Skills data={siteData.skills} />
      <Evidence data={siteData.evidence} />
      <Footer data={siteData.footer} links={siteData.meta.links} />
    </div>
  );
}
