import Link from 'next/link';
const Navbar = () => {
    const navClasses = "underline decoration-3 hover:font-bold"
    return (
        <div className="grid grid-cols-2 bg-darkBrown text-white h-24 content-center ">
            <h1 className="ml-14 text-6xl text-inherit">J.Peters</h1>
            <ul className="invisible sm:visible flex flex-row text-inherit mr-14 justify-end space-x-28 text-2xl mt-3">
                <li><h2 className={navClasses}>About</h2></li>
                <li><h2 className={navClasses}><Link href='#Portfolio' scroll={false}><a>Projects</a></Link></h2></li>
                <li><h2 className={navClasses}><Link href='#ContactMe' scroll={false}><a>Contact Me</a></Link></h2></li>
            </ul>
        </div>
    );
}

export default Navbar;