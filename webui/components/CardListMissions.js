import React from 'react';
import { Card } from 'semantic-ui-react';
import CardMissionProgress from './CardMissionProgress';

export default ({ missions, children, loading }) => (
  <Card.Group itemsPerRow={2} stackable>
    {children}
    {loading && 'Laden...'}
    {missions && missions.map(mission =>
      <CardMissionProgress key={mission._id} mission={mission} />,
    )}
  </Card.Group>
);
