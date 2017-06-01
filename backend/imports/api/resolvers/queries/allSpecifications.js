import Specifications from '../../collections/specifications';

export default function (_, { onlyActive = false }) {
  const selector = {
    deleted: null,
  };
  if (onlyActive) selector.isActive = true;
  return Specifications.find(selector).fetch();
}
