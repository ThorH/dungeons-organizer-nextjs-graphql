import GqlClient from '../../graphql/apollo-client'
import { monstersGql } from '../../gqls'
import { ListingType } from '../../types/Listing'
import { Listing } from '../GlobalStyles'

type Props = {
    monsters: ListingType[]
}

export default function Monsters({ monsters }: Props) {
    return (
        <div>
            <h2>Monsters: </h2>
            <Listing>
                {monsters.map(monster =>
                    <div key={monster.index}>
                        <h4>{monster.name}</h4>
                        <p>index: {monster.index}</p>
                        <p>url: {monster.url}</p>
                    </div>
                )}
            </Listing>
        </div>
    )
}

export const getServerSideProps = async () => {
    const { data } = await GqlClient.query({ query: monstersGql })

    return {
        props: {
            monsters: data.monsters
        }
    }
}