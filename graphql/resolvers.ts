import axios from 'axios';
import { Resolvers } from './resolvers-types';

export const resolvers: Resolvers = {
    Query: {
        classes: async () => {
            const { data } = await axios.get('https://www.dnd5eapi.co/api/classes')

            return data.results
        },

        spells: async () => {
            const { data } = await axios.get('https://www.dnd5eapi.co/api/spells')

            return data.results
        },

        monsters: async () => {
            const { data } = await axios.get('https://www.dnd5eapi.co/api/monsters')

            return data.results
        }
    }
}