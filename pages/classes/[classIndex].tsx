import { GET_CLASS } from '../../gqls/apiDnD'
import { ClassInterface } from '../../interfaces/Class'
import GqlClient from '../../graphql/apollo-client'
import { GetServerSideProps } from 'next'

type Props = {
    classDnD: ClassInterface
}

export default function ClassDnD({ classDnD }: Props) {

    return (
        <div>
            <h2>Class: </h2>
            <div>
                <p>{classDnD.index}</p>
                <p>{classDnD.name}</p>
                <p>{classDnD.hit_die}</p>
            </div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    const { data } = await GqlClient.query({
        query: GET_CLASS,
        variables: { index: params?.classIndex }
    })

    return {
        props: {
            classDnD: data.classByIndex
        }
    }
}