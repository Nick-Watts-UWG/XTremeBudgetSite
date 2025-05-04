import Link from "next/link"

export default function NavBar() {

    return (
        <>
        <nav className="w-full bg-gray-900 text-white px-8 py-4 flex justify-between items-center shadow-md">
            <Link href={"/"} className="text-xl font-bold font-mono">X-TREME Budget Software</Link>
            <div className="flex gap-6 font-mono text-lg">
                <Link href="/Download">Download</Link>
            </div>
        </nav>
        </>
    )
}