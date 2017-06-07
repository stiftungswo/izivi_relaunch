import App from '../../components/AppContainer';
import Holiday from '../../components/admin/HolidayContainer';

export default ({ ...rest }) => (
  <App {...rest}>
	<Holiday />
  </App>
);
