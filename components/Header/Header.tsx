import Link from "next/link"
import { HeaderContainer } from "./HeaderStyles"

export default function Header() {
    return (
        <HeaderContainer>
            <Link href='/'>Home</Link>
            <Link href='/classes'>Classes</Link>
            <Link href='/spells'>Spells</Link>
            <Link href='/monsters'>Monsters</Link>
        </HeaderContainer>
    )
}