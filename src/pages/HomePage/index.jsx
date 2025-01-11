import './style.css';

import { Header } from '../../components/Header';
import { Transform } from '../../components/Transform';
import { Photography } from '../../components/Photography';
import { GraphicDesign } from '../../components/GraphicDesign';
import { StandOut } from '../../components/Stand-out';
import { ClientTestimonials } from '../../components/Client/insex';
import { Footer } from '../../components/Footer';

export const HomePage = () => {
  return (
    <div className="container">
      <header>
        < Header />
      </header>
      <main>
        < Transform />
        < StandOut />
        < GraphicDesign />
        < Photography />
        < ClientTestimonials />
      </main>
      <footer>
        < Footer />
      </footer>
    </div>
  );
};
