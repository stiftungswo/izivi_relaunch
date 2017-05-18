import Specifications from '../../collections/specifications';

export default function deleteSpecification(root, { _id }) {
  Specifications.update({ _id }, { $set: { deleted: new Date() } });
  console.log(_id);
  return Specifications.findOne(_id);
}
