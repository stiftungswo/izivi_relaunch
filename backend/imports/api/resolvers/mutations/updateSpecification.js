import Specifications from '../../collections/specifications';

export default function updateSpecification(root, { specification, _id }) {
  Specifications.update({ _id }, { $set: specification });
  return Specifications.findOne(_id);
}
