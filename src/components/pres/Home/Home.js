import React, { PropTypes } from 'react';

import Helmet from 'react-helmet';

import Day from '../../containers/Moisture/Day';

const Home = ({ isAuthenticated }) => (
  <div className="row">
    <Helmet title="Home" />
    <div className="col-md-12">
      {isAuthenticated ? <Day /> : 'Please login'}
    </div>
  </div>
);

Home.propTypes = {
  isAuthenticated: PropTypes.bool,
};

export default Home;
