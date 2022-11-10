import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { GET_SPELL } from '../../gqls/apiDnD'
import { SpellInterface } from '../../interfaces/Spell'
import GqlClient from '../../graphql/apollo-client'
import { GetServerSideProps } from 'next'

type Props = {
    spell: SpellInterface
}

export default function Spell({ spell }: Props) {

    return (
        <div>
            <h2>Spell: </h2>
            <div>
                <p>{spell.index}</p>
                <p>{spell.name}</p>
                <p>{spell.desc}</p>
            </div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    const { data } = await GqlClient.query({
        query: GET_SPELL,
        variables: { index: params?.spellIndex }
    })

    return {
        props: {
            spell: data.spellByIndex
        }
    }
}