import React from 'react';
import { Modal, Header, Button, Icon } from 'semantic-ui-react';

export default ({ serverError, resetError }) => (
  <Modal
    open={!!serverError}
    onClose={resetError}
    basic
    size="small"
  >
    <Header icon="frown" content="Fehler" />
    <Modal.Content>
      <h3>{serverError}</h3>
    </Modal.Content>
    <Modal.Actions>
      <Button color="green" onClick={resetError} inverted>
        <Icon name="close" /> Schliessen
      </Button>
    </Modal.Actions>
  </Modal>
);
