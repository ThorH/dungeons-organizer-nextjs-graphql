import { ApolloServer } from 'apollo-server-micro';
import Cors from 'micro-cors';
import { typeDefs } from '../../graphql/schema';
import { resolvers } from '../../graphql/resolvers';
import { NextApiHandler } from 'next';
import { RequestHandler } from 'micro';

const cors = Cors();

export const config = {
    api: {
        bodyParser: false
    }
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })
const startServer = apolloServer.start()

const handler: NextApiHandler = async (req, res) => {
    if (req.method === 'OPTIONS') {
        res.end()
        return false
    }

    await startServer
    const apolloHandler = await apolloServer.createHandler({
        path: '/api/graphql'
    })

    return apolloHandler(req, res)
}

export default cors(handler as RequestHandler);