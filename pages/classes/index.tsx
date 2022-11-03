import GqlClient from '../../graphql/apollo-client'
import { classesGql } from '../../gqls'
import { ListingType } from '../../types/Listing'
import { Listing } from '../GlobalStyles'

type Props = {
    classes: ListingType[]

}

export default function Classes({ classes }: Props) {
    return (
        <div>
            <h2>Classes: </h2>
            <Listing>
                {classes.map(classDnD =>
                    <div key={classDnD.index}>
                        <h4>{classDnD.name}</h4>
                        <p>index: {classDnD.index}</p>
                        <p>url: {classDnD.url}</p>
                    </div>
                )}
            </Listing>
        </div>
    )
}

export const getServerSideProps = async () => {
    const { data } = await GqlClient.query({ query: classesGql })

    return {
        props: {
            classes: data.classes
        }
    }
}