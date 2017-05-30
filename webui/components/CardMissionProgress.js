import React from 'react';
import { Card, Progress, Button } from 'semantic-ui-react';
import Moment from 'react-moment';
import StatusLabel, { WAITING_AUTHORITY, DRAFT, READY, FINISHED } from './StatusLabelContainer';

const MissionDescriptionDraft = () => (
  <Card.Description>
    Wir haben das Einsatzgesuch noch nicht physikalisch erhalten,
    bitte audrucken und an <b>Stiftung SWO, Im Schatzacher, Dübendorf</b> senden,
    falls noch nicht erledigt.
  </Card.Description>
);

const MissionDescriptionWaitingAuthority = () => (
  <Card.Description>
    Danke, wir haben deine Bewerbung bekommen und an die Regionalstelle weitergeleitet.
    Wir warten auf den definitiven Bescheid der Behörde.
  </Card.Description>
);

const MissionDescriptionReady = ({ progress, total, holidays, start }) => (
  (progress > 0 && progress < total) ? (
    <Card.Description>
      <Progress autoSuccess value={progress} total={total} />
      Tag {progress} von {total}.
      {holidays ? ` Restliche Ferien: ${holidays} Tage` : ''}
    </Card.Description>
  ) : (
    <Card.Description>
      <b>Bald gehts los! </b>
      Dein Einsatz startet voraussichtlich <Moment locale="de" fromNow>{start}</Moment> um 07:50 beim SBB Cargo Gebäude am Bahnhof Schwerzenbach
    </Card.Description>
  )
);

const MissionDescriptionFinished = ({ end }) => (
  <Card.Description>
    <div>
      Dein Einsatz hat <Moment locale="de" fromNow>{end}</Moment> geendet. Wie hat es dir gefallen?
    </div>
  </Card.Description>
);

export default ({ mission }) => (
  <Card color="teal" fluid>
    <Card.Content>
      <Card.Header>
        {mission.specification.name}&nbsp;
        <StatusLabel status={mission.status} />
      </Card.Header>
      <Card.Meta>
        <Moment format="L" date={mission.start} /> - <Moment format="L" date={mission.end} />
      </Card.Meta>
      {mission.status === DRAFT &&
        <MissionDescriptionDraft />
      }
      {mission.status === WAITING_AUTHORITY &&
        <MissionDescriptionWaitingAuthority />
      }
      {mission.status === READY &&
        <MissionDescriptionReady
          start={mission.start}
          progress={mission.progress}
          total={mission.total}
          holidays={mission.holidayBalance}
        />
      }
      {mission.status === FINISHED &&
        <MissionDescriptionFinished end={mission.end} />
      }
    </Card.Content>
    <Card.Content extra>
      {mission.status === DRAFT && (
        <Button.Group>
          <Button basic secondary>Ausdrucken</Button>
          <Button basic primary>Bearbeiten</Button>
        </Button.Group>
      )}
      {mission.status === WAITING_AUTHORITY && (
        <Button basic secondary>Infos</Button>
      )}
      {mission.status === READY && (
        <Button.Group>
          <Button basic secondary>Infos</Button>
          <Button basic primary>Spesen erfassen</Button>
        </Button.Group>
      )}
      {mission.status === FINISHED && (
        <Button basic secondary>Zum Feedbackformular</Button>
      )}
    </Card.Content>
  </Card>
);
