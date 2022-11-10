import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { GET_MONSTER } from '../../gqls/apiDnD'
import { MonsterInterface } from '../../interfaces/Monster'
import GqlClient from '../../graphql/apollo-client'
import { GetServerSideProps } from 'next'

type Props = {
    monster: MonsterInterface
}

export default function Monster({ monster }: Props) {

    return (
        <div>
            <h2>Monster: </h2>
            <div>
                <p>{monster.index}</p>
                <p>{monster.name}</p>
                <p>{monster.type}</p>
            </div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    const { data } = await GqlClient.query({
        query: GET_MONSTER,
        variables: { index: params?.monsterIndex }
    })

    return {
        props: {
            monster: data.monsterByIndex
        }
    }
}