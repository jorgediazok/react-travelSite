import React from 'react';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';

import '../../App.css';

function Home() {
  return (
    <React.Fragment>
      <HeroSection />
      <Cards />
      <Footer />
    </React.Fragment>
  );
}

export default Home;
