import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
    type Query {
        classes: [Listing]
        spells: [Listing]
        monsters: [Listing]
        classByIndex(index: String): Class
        spellByIndex(index: String): Spell
        monsterByIndex(index: String): Monster
    }

    type Listing {
        index: String
        name: String
        url: String
    }

    type Class {
        index: String
        name: String
        hit_die: Int
    }

    type Spell {
        _id: ID
        index: String
        name: String
        desc: [String]
    }

    type Monster {
        index: String
        name: String
        type: String
    }
`;