import GqlClient from '../../graphql/apollo-client'
import { GET_MONSTERS } from '../../gqls/apiDnD'
import { ListingInterface } from '../../interfaces/Listing'
import { Listing } from '../GlobalStyles'
import Link from 'next/link'

type Props = {
    monsters: ListingInterface[]
}

export default function Monsters({ monsters }: Props) {
    return (
        <div>
            <h2>Monsters: </h2>
            <Listing>
                {monsters.map(monster =>
                    <div key={monster.index}>
                        <Link href={`/monsters/${monster.index}`}>
                            <h4>{monster.name}</h4>
                        </Link>
                        <p>url: {monster.url}</p>
                    </div>
                )}
            </Listing>
        </div>
    )
}

export const getServerSideProps = async () => {
    const { data } = await GqlClient.query({ query: GET_MONSTERS })

    return {
        props: {
            monsters: data.monsters
        }
    }
}