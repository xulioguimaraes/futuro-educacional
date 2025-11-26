import Header from './components/Header';
import Hero from './components/Hero';
import EducationalStages from './components/EducationalStages';
import ContactForm from './components/ContactForm';
import OurDifferential from './components/OurDifferential';
import Sports from './components/Sports';
import AlumniStories from './components/AlumniStories';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className='max-h-screen' id="hero">
        <Hero />
      </section>
      <section id="ensino">
        <EducationalStages />
      </section>
      <section id="diferenciais">
        <OurDifferential />
      </section>
      <section id="esportes">
        <Sports />
      </section>
      <section id="alunos">
        <AlumniStories />
      </section>
      <section id="depoimentos">
        <Testimonials />
      </section>
      <section id="contato">
        <ContactForm />
      </section>
      <Footer />
    </div>
  );
}
