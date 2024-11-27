import Link from 'next/link'

export default function Nav() {
    return(
        <nav className="navbar justify-between bg-base-300">
            
    
            <ul className="hidden menu sm:menu-horizontal gap-2">
                <li className="text-white"><a href="/home">Home</a></li>
                <li className="text-white"><a>Support</a></li>
                <li className="text-white"><a>Cart</a></li>
                <Link href="login" className="btn btn-sm btn-primary">Log in</Link>
            </ul>
        </nav>)

}