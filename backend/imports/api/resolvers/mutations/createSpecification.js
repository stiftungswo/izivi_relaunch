import Specifications from '../../collections/specifications';

export default function createSpecification(root, { specification }) {
  const _id = Specifications.insert({ ...specification });
  return Specifications.findOne(_id);
}
