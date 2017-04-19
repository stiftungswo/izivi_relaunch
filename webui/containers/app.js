import { compose, pure } from 'recompose';
import App from '../components/App';
import connectApollo from '../lib/connectApollo';
import me from '../lib/queries/me';

export default compose(
  connectApollo,
  me,
  pure,
)(App);
