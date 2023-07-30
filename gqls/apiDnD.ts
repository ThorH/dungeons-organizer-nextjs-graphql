import { gql } from "@apollo/client"

export const GET_GOOGLEIMAGE = gql`
    query($query: String) {
        googleImage(query: $query)
    }
`;

export const GET_CLASSES = gql`
    query {
        classes {
            index
            name
            url
        }
    }
`;

export const GET_SPELLS = gql`
    query {
        spells {
            index
            name
            url
        }
    }
`;

export const GET_MONSTERS = gql`
    query {
        monsters {
            index
            name
            url
        }
    }
`;

export const GET_CLASS = gql`
    query($index: String) {
        classByIndex(index: $index) {
            index
            name
            hit_die
        }
    }
`;

export const GET_SPELL = gql`
    query($index: String) {
        spellByIndex(index: $index) {
            _id
            index
            name
            desc
        }
    }
`;

export const GET_MONSTER = gql`
    query($index: String) {
        monsterByIndex(index: $index) {
            __typename
            ... on Monster {
                index
                name
                type
                size
                alignment
                armor_class
                hit_points
                hit_dice
                hit_points_roll
                speed {
                    walk
                    swim
                    fly
                }
                strength
                dexterity
                constitution
                intelligence
                wisdom
                charisma
                languages
                challenge_rating
                xp
            }
            ... on ErrorRequest {
                status
            }
            
        }
    }
`;