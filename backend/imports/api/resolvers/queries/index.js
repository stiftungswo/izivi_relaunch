// import { Roles } from 'meteor/nicolaslopezj:roles';
import me from './me';
import specification from './specification';
import mission from './mission';
import allSpecifications from './allSpecifications';
import allMissions from './allMissions';
import user from './user';

export default {
  me,
  // @Roles.action('viewUser')
  user,
  specification,
  mission,
  allSpecifications,
  allMissions,
};
