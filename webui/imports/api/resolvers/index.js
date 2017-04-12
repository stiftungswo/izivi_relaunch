export default {
  Query: {
    say(root, args, context) {
      return { test: 'hello world1' };
    }
  },
  Say: {
    test(root, args, context) {
      console.log(context);
      return root.test || 'default value';
    }
  }
}
