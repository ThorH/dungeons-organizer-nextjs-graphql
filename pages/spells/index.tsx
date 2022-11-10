import GqlClient from '../../graphql/apollo-client'
import { GET_SPELLS } from '../../gqls/apiDnD'
import { ListingInterface } from '../../interfaces/Listing'
import { Listing } from '../GlobalStyles'
import Link from 'next/link'

type Props = {
    spells: ListingInterface[]

}

export default function Spells({ spells }: Props) {
    return (
        <div>
            <h2>Spells: </h2>
            <Listing>
                {spells.map(spell =>
                    <div key={spell.index}>
                        <Link href={`/spells/${spell.index}`}>
                            <h4>{spell.name}</h4>
                        </Link>
                        <p>url: {spell.url}</p>
                    </div>
                )}
            </Listing>
        </div>
    )
}

export const getServerSideProps = async () => {
    const { data } = await GqlClient.query({ query: GET_SPELLS })

    return {
        props: {
            spells: data.spells
        }
    }
}