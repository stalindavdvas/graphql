const { ApolloServer, gql } = require('apollo-server');

// Esquema de GraphQL: Define los tipos y resolvers
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hola Mundo!',
  },
};

// Crear una instancia de ApolloServer con el esquema y los resolvers
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Iniciar el servidor en el puerto 4000
server.listen().then(({ url }) => {
  console.log(`Servidor GraphQL corriendo en ${url}`);
});
