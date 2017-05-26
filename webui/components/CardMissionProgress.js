import React from 'react';
import { Card, Progress, Button } from 'semantic-ui-react';
import Moment from 'react-moment';

export default ({ mission }) => (
  <Card color="teal" fluid>
    <Card.Content>
      <Card.Header>
        {mission.specification.name}
      </Card.Header>
      <Card.Meta>
        <Moment format="L" date={mission.start} /> - <Moment format="L" date={mission.end} />
      </Card.Meta>
      {mission.progress > 0 && mission.progress < mission.total && (
        <Card.Description>
          <Progress autoSuccess value={mission.progress} total={mission.total} />
          Tag {mission.progress} von {mission.total}.
          {mission.holidayBalance ? ` Restliche Ferien: ${mission.holidayBalance} Tage` : ''}
        </Card.Description>
      )}
      {mission.progress <= 0 && (
        <Card.Description>
          <b>Bald gehts los! </b>
          Dein Einsatz startet voraussichtlich <Moment locale="de" fromNow>{mission.start}</Moment> um 07:50 beim SBB Cargo Gebäude am Bahnhof Schwerzenbach
        </Card.Description>
      )}
      {mission.progress >= mission.total && (
        <Card.Description>
          <div>
            Dein Einsatz endete <Moment locale="de" fromNow>{mission.end}</Moment>. Wie hat es dir gefallen?
          </div>
        </Card.Description>
      )}
    </Card.Content>
    <Card.Content extra>
      {mission.progress <= 0 && (
        <Button basic secondary>Infos</Button>
      )}
      {mission.progress >= mission.total && (
        <Button basic secondary>Zum Feedbackformular</Button>
      )}
    </Card.Content>
  </Card>
);
