import GqlClient from '../../graphql/apollo-client'
import { spellsGql } from '../../gqls'
import { ListingType } from '../../types/Listing'
import { Listing } from '../GlobalStyles'

type Props = {
    spells: ListingType[]

}

export default function Spells({ spells }: Props) {
    return (
        <div>
            <h2>Spells: </h2>
            <Listing>
                {spells.map(spell =>
                    <div key={spell.index}>
                        <h4>{spell.name}</h4>
                        <p>index: {spell.index}</p>
                        <p>url: {spell.url}</p>
                    </div>
                )}
            </Listing>
        </div>
    )
}

export const getServerSideProps = async () => {
    const { data } = await GqlClient.query({ query: spellsGql })

    return {
        props: {
            spells: data.spells
        }
    }
}