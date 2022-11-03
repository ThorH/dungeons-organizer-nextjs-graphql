import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
    type Query {
        classes: [Listing]
        spells: [Listing]
        monsters: [Listing]
    }

    type Listing {
        index: String
        name: String
        url: String
    }
`;