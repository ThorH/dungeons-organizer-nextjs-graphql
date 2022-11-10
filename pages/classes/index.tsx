import Link from 'next/link'
import GqlClient from '../../graphql/apollo-client'
import { GET_CLASSES } from '../../gqls/apiDnD'
import { ListingInterface } from '../../interfaces/Listing'
import { Listing } from '../GlobalStyles'

type Props = {
    classes: ListingInterface[]

}

export default function Classes({ classes }: Props) {
    return (
        <div>
            <h2>Classes: </h2>
            <Listing>
                {classes.map(classDnD =>
                    <div key={classDnD.index}>
                        <Link href={`/classes/${classDnD.index}`}>
                            <h4>{classDnD.name}</h4>
                        </Link>
                    </div>
                )}
            </Listing>
        </div>
    )
}

export const getServerSideProps = async () => {
    const { data } = await GqlClient.query({ query: GET_CLASSES })

    return {
        props: {
            classes: data.classes
        }
    }
}