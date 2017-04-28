// import { Roles } from 'meteor/nicolaslopezj:roles';
import me from './me';
import specification from './specification';
import allSpecifications from './allSpecifications';
import user from './user';

export default {
  me,
  // @Roles.action('viewUser')
  user,
  specification,
  allSpecifications,
};
