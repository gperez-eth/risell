exports.config = {
  risell: {
    document: "./queries/risell.graphql",
    schema: {
      method: "POST",
      url: "http://localhost:4000/graphql",
    },
  },
};
