import { gql } from "@apollo/client"

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
            index
            name
            type
        }
    }
`;