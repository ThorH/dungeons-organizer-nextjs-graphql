import Link from "next/link"

export default function Header() {
    return (
        <header>
            <Link href='/'>Home</Link>
            <Link href='/classes'>Classes</Link>
            <Link href='/spells'>Spells</Link>
            <Link href='/monsters'>Monsters</Link>
        </header>
    )
}