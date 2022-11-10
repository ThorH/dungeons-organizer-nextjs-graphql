import axios from 'axios';
import { Resolvers } from './resolvers-types';

export const resolvers: Resolvers = {
    Query: {
        classes: async () => {
            const { data } = await axios.get('https://www.dnd5eapi.co/api/classes')

            return data.results
        },

        classByIndex: async (parents, args) => {
            const { data } = await axios.get(`https://www.dnd5eapi.co/api/classes/${args.index}`)


            return data
        },

        spells: async () => {
            const { data } = await axios.get('https://www.dnd5eapi.co/api/spells')

            return data.results
        },

        spellByIndex: async (parents, args) => {
            const { data } = await axios.get(`https://www.dnd5eapi.co/api/spells/${args.index}`)

            return data
        },

        monsters: async () => {
            const { data } = await axios.get('https://www.dnd5eapi.co/api/monsters')

            return data.results
        },

        monsterByIndex: async (parents, args) => {
            const { data } = await axios.get(`https://www.dnd5eapi.co/api/monsters/${args.index}`)

            return data
        }
    }
}