import React from 'react';
import HeroSection from '../HeroSection';
import Cards from '../Cards';

import '../../App.css';

function Home() {
  return (
    <React.Fragment>
      <HeroSection />
      <Cards />
    </React.Fragment>
  );
}

export default Home;
