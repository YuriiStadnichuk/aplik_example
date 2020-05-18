import WatchOwnVideo from './WatchOwnVideo';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    uri: state.cvCreate.cv.video.uri
  };
};

export default connect(mapStateToProps)(WatchOwnVideo);
