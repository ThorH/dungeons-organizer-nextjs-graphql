import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
    union MonsterRequest = Monster | ErrorRequest
    union MonstersRequest = [Listing | ErrorRequest]

    type Query {
        googleImage(query: String): String
        classes: [Listing]
        spells: [Listing]
        monsters: [Listing]
        classByIndex(index: String): Class
        spellByIndex(index: String): Spell
        monsterByIndex(index: String): MonsterRequest
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
        size: String
        alignment: String
        armor_class: Int
        hit_points: Int
        hit_dice: String
        hit_points_roll: String
        speed: Speed
        strength: Int
        dexterity: Int
        constitution: Int
        intelligence: Int
        wisdom: Int
        charisma: Int
        languages: String
        challenge_rating: Int
        xp: Int
    }

    type Speed {
        walk: String
        swim: String
        fly: String
    }

    type ErrorRequest {
        status: Int
        message: String
    }
`;