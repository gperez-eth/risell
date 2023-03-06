exports.config = {
    risell: {
      document: './queries/products.graphql',
      schema: {
        method: 'POST',
        url: 'http://localhost:4000/graphql',
      },
    }
  };