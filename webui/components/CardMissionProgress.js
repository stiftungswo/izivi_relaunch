import React from 'react';
import { Card, Progress, Button } from 'semantic-ui-react';
import Link from 'next/link';
import moment from 'moment';
import Moment from 'react-moment';
import StatusLabel, { WAITING_AUTHORITY, DRAFT, READY, FINISHED } from './StatusLabelContainer';

moment.locale('de');

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

export default ({ _id, status, start, end, specification, progress, total, holidayBalance }) => (
  <Card color="teal" fluid>
    <Card.Content>
      <Card.Header>
        {specification.name}&nbsp;
        <StatusLabel status={status} />
      </Card.Header>
      <Card.Meta>
        <Moment format="L" date={start} /> - <Moment format="L" date={end} />
      </Card.Meta>
      {status === DRAFT &&
        <MissionDescriptionDraft />
      }
      {status === WAITING_AUTHORITY &&
        <MissionDescriptionWaitingAuthority />
      }
      {status === READY &&
        <MissionDescriptionReady
          start={start}
          progress={progress}
          total={total}
          holidays={holidayBalance}
        />
      }
      {status === FINISHED &&
        <MissionDescriptionFinished end={end} />
      }
    </Card.Content>
    <Card.Content extra>
      {status === DRAFT && (
        <Button.Group>
          <Button basic secondary>Ausdrucken</Button>
          <Link href={{ pathname: '/missions/edit', query: { _id } }}>
            <Button as="a" basic primary>Bearbeiten</Button>
          </Link>
        </Button.Group>
      )}
      {status === WAITING_AUTHORITY && (
        <Button basic secondary>Infos</Button>
      )}
      {status === READY && (
        <Button.Group>
          <Button basic secondary>Infos</Button>
          <Button basic primary>Spesen erfassen</Button>
        </Button.Group>
      )}
      {status === FINISHED && (
        <Button basic secondary>Zum Feedbackformular</Button>
      )}
    </Card.Content>
  </Card>
);
