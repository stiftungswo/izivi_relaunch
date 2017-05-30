import React from 'react';
import { Card } from 'semantic-ui-react';
import CardMissionProgress from './CardMissionProgressContainer';
import CardProfileProgress from './CardProfileProgressContainer';

export default ({ missions, loading }) => (
  <Card.Group itemsPerRow={2} stackable>
    <CardProfileProgress />
    {loading && 'Laden...'}
    {missions && missions.map(mission =>
      (<CardMissionProgress
        key={mission._id}
        _id={mission._id}
      />),
    )}
  </Card.Group>
);
