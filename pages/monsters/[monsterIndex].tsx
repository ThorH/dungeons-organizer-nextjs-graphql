import Image from 'next/image'
import axios from 'axios'
import { GET_GOOGLEIMAGE, GET_MONSTER } from '../../gqls/apiDnD'
import { MonsterInterface } from '../../interfaces/Monster'
import GqlClient from '../../graphql/apollo-client'
import { GetServerSideProps } from 'next'
import { useEffect } from 'react'

type Props = {
    monster: MonsterInterface,
    linkImage: string | null | undefined
}

export default function Monster({ monster, linkImage }: Props) {

    return (
        <div>
            <h2>Monster: </h2>
            <div>
                {linkImage &&
                    <Image src={linkImage} width={300} height={300} alt="new" />
                }
                <p>{monster.index}</p>
                <p>{monster.name}</p>
                <p>{monster.type}</p>
                <p>{monster.size}</p>
                <p>{monster.alignment}</p>
                <p>{monster.armor_class}</p>
                <p>{monster.hit_points}</p>
                <p>{monster.hit_dice}</p>
                <p>{monster.hit_points_roll}</p>
            </div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    const { data: dataMonster } = await GqlClient.query({
        query: GET_MONSTER,
        variables: { index: params?.monsterIndex }
    })

    const { data: dataLinkImage } = await GqlClient.query({
        query: GET_GOOGLEIMAGE,
        variables: { query: dataMonster.monsterByIndex.name }
    })

    return {
        props: {
            monster: dataMonster.monsterByIndex,
            linkImage: dataLinkImage.googleImage
        }
    }
}