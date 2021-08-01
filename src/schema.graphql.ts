export const typeDefs = `
type Query {
  focuses: [Focus]!
  sessions: [Session]!
  spots: [Spot]!
  user: User!
}

type Mutation {
  addFocus(name: String!): Focus!
  updateFocus(url: String!, description: String!): Focus!
  deleteFocus(url: String!, description: String!): Focus!
  addSpot(name: String!, latitude: Float!, longitude: Float!): Spot!
  addSession(memo: String!, rating: Int!, spotId: ID!, focusId: ID!): Session!
  signup(email: String!, password: String!, name: String!): AuthPayload
  login(email: String!, password: String!): AuthPayload
}

type Focus {
  id: ID!
  name: String!
  completed: Boolean!
  user: User
  sessions: [Session]
}

type Spot {
  id: ID!
  name: String!
  latitude: Float!
  longitude: Float!
  user: User
  sessions: [Session]
}

type Session {
  id: ID!
  memo: String!
  rating: Int!
  focus: Focus
  spot: Spot
  user: User
}

type AuthPayload {
  token: String
  user: User
}

type User {
  id: ID!
  name: String!
  email: String!
  avatar: String
  sessions: [Session]
  focuses: [Focus]
  spots: [Spot]
}
`;
