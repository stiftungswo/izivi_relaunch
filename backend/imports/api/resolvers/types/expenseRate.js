export default {
  __resolveType(obj /* context, info */) {
    switch (obj.name) {
      case 'catering':
        return 'Catering';
      case 'commute':
        return 'Commute';
      case 'pocketMoney':
        return 'PocketMoney';
      case 'workingClothes':
        return 'WorkingClothes';
      default:
        break;
    }
    return null;
  },
};
