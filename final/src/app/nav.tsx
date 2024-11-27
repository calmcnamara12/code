import Link from 'next/link'

export default function Nav() {
    return(
        <nav className="navbar justify-between bg-base-300">
            
    
            <ul className="hidden menu sm:menu-horizontal gap-2">
                <li className="text-white"><a href="/home">Home</a></li>
                <li className="text-white"><a href="/payment">Payment History</a></li>
                
            </ul>
        </nav>)

}
//<Link href="login" className="btn btn-sm btn-primary">Log in</Link>