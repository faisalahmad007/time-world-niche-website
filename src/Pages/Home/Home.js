import React from 'react';
import Navigation from '../Shared/Navigation';
import HomeBanner from './HomeBanner/HomeBanner';
import HomeProducts from './HomeProducts/HomeProducts';
import HomeReviews from './HomeReviews/HomeReviews';
import OurStory from './OurStory/OurStory';

const Home = () => {
    return (
        <div>
           <Navigation></Navigation>
           <HomeBanner></HomeBanner>
           <HomeProducts></HomeProducts>
           <HomeReviews></HomeReviews>
           <OurStory></OurStory>
          
        </div>
    );
};

export default Home;