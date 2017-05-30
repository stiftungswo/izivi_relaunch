import { compose, mapProps } from 'recompose';
import StatusLabel from './StatusLabel';

export const DRAFT = 'DRAFT';
export const WAITING_AUTHORITY = 'WAITING_AUTHORITY';
export const READY = 'READY';
export const FINISHED = 'FINISHED';

export const localizedStatus = (status) => {
  switch (status) {
    case WAITING_AUTHORITY: return 'Regionalstelle';
    case READY: return 'Bereit';
    case FINISHED: return 'Abgeschlossen';
    default: return 'Entwurf';
  }
};

export const statusColor = (status) => {
  switch (status) {
    case WAITING_AUTHORITY: return 'orange';
    case READY: return 'green';
    case FINISHED: return 'gray';
    default: return 'red';
  }
};

export default compose(
  mapProps(({ status, ...rest }) => ({
    statusColor: statusColor(status),
    localizedStatus: localizedStatus(status),
    ...rest,
  })),
)(StatusLabel);
