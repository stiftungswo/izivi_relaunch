import Specifications from '../../collections/specifications';

export default function (root, { _id }) {
  return Specifications.findOne(_id);
}
