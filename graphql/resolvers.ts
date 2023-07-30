import axios from 'axios';
import { Resolvers } from './resolvers-types';
import { google } from 'googleapis'
const customSearch = google.customsearch('v1')
import googleSearchCredentials from '../credentials/google-search.json'

export const resolvers: Resolvers = {
    Query: {
        googleImage: async (parents, args) => {
            const response = await customSearch.cse.list({
                auth: googleSearchCredentials.apiKey,
                cx: googleSearchCredentials.searchEngineId,
                q: `${args.query} dnd`,
                searchType: "image",
                num: 1
            })

            const link = response.data.items?.[0].link

            return link ? link : "Image not found"
        },

        classes: async () => {
            const { data, status, statusText } = await axios.get(`${process.env.DND_API_URL}/classes`)


            return data.results
        },

        classByIndex: async (parents, args) => {
            const { data } = await axios.get(`${process.env.DND_API_URL}/classes/${args.index}`)


            return data
        },

        spells: async () => {
            const { data } = await axios.get(`${process.env.DND_API_URL}/spells`)

            return data.results
        },

        spellByIndex: async (parents, args) => {
            const { data } = await axios.get(`${process.env.DND_API_URL}/spells/${args.index}`)

            return data
        },

        monsters: async () => {
            const { data, status, statusText } = await axios.get(`${process.env.DND_API_URL}/monsters`).catch(error => {
                return {
                    data: error.response.data,
                    status: error.response.status,
                    statusText: error.response.statusText
                }
            })

            return data.results
        },

        monsterByIndex: async (parents, args) => {
            const { data, status, statusText } = await axios.get(`${process.env.DND_API_URL}/monsters/${args.index}`).catch(error => {
                return {
                    data: error.response.data,
                    status: error.response.status,
                    statusText: error.response.statusText
                }
            })

            return status === 200 ? { __typename: "Monster", ...data } : { __typename: "ErrorRequest", status: status, message: statusText }
        }
    }
}