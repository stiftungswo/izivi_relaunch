import Specifications from '../../collections/specifications';

export default function () {
  return Specifications.find().fetch();
}