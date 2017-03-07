import Landing from '../components/Landing';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {

    user: state.auth,

  };
};

const LandingContainer = connect(mapStateToProps )(Landing);

export default LandingContainer;
