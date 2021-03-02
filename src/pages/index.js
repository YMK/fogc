import React from 'react';
import Layout from '../components/layout/Layout';

import Intro from '../sections/intro'
import Feedback from '../sections/feedback/index';
import About from '../sections/about';
import Involved from '../sections/get-involved';

export default () => (
  <Layout>
    <Intro></Intro>
    <About></About>
    <Involved></Involved>
    <Feedback></Feedback>
  </Layout>
);
