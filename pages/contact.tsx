import type { NextPage } from 'next'
import Head from 'next/head'
import ContactForm from '../components/contactform'
import NextLink from '../lib/link'
const Contact: NextPage = () => {
    
    return (
        <div className="flex flex-col min-h-screen">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="bg-BlackCoffee p-7 h-full flex flex-col">
                    <div className="bg-ColumbiaBlue flex flex-row space-x-14">
                        {NextLink("/", "James Peters")}
                        <ul className="flex flex-row space-x-7">
                            <li>{NextLink("/blog", "Blog")}</li>
                            <li>{NextLink("/fitness", "Personal Training")}</li>
                            <li>{NextLink("/webdev", "Web Design")}</li>
                            <li>{NextLink("/dogcam", "Watch my Dog")}</li>
                        </ul>
                    </div>
                    <h1 className="mt-20">Contact</h1>
                    <p>Send me a message</p>
            </header>
            <main className="flex flex-col w-full bg-LiverChestnut my-auto py-4 px-2">
                <ContactForm/>
            </main>
            <footer className="bg-PhthaloGreen w-full flex flex-row">
                <ul>
                    <li>{NextLink("/", "Home")}</li>
                    <li>{NextLink("/blog", "Blog")}</li>
                    <li></li>
                </ul>
                <ul>
                    <li><a target="https://github.com">Github</a></li>
                    <li></li>
                </ul>
            </footer>
        </div>
    )
}

export default Contact