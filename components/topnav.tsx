import NextLink from "../lib/link"

function TopNav() {
    

    return (
        <header className="bg-BlackCoffee p-7 h-28" >
            <div className="">
                <div className="bg-ColumbiaBlue flex flex-row space-x-10">
                    {NextLink("/", "James Peters")}
                    <ul className="grid auto-cols-auto grid-flow-col gap-10 text-left">
                        <li>{NextLink("/blog", "Blog")}</li>
                        <li>{NextLink("/fitness", "Personal Training")}</li>
                        <li>{NextLink("/dogcam", "Watch my Dog")}</li>
                        <li>{NextLink("/tutor", "Tutoring")}</li>
                        <li>{NextLink("/webdev", "Web Design")}</li>
                        <li>{NextLink("/contact", "Contact")}</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default TopNav