import { gql } from "@apollo/client"

export const classesGql = gql`
    query {
        classes {
            index
            name
            url
        }
    }
`;

export const spellsGql = gql`
    query {
        spells {
            index
            name
            url
        }
    }
`;
export const monstersGql = gql`
    query {
        monsters {
            index
            name
            url
        }
    }
`;