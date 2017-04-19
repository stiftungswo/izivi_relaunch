import { compose, pure } from 'recompose';
import App from '../components/App';
import withData from '../lib/withData';

export default compose(
  withData,
  pure,
)(App);
