import Link from "next/link"

export default function NextLink(link: string, title: string) {

    return (
        <Link href={link} >
            <a>{title} </a>
        </Link>
    )
}