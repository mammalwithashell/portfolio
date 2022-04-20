import type { NextPage } from 'next'
import Head from 'next/head'
import NextLink from "../lib/link"
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col h-full w-full">
        <header className="bg-BlackCoffee p-7" >
          <div className="">
            <div className="bg-ColumbiaBlue flex flex-row space-x-10">
              <div>James Peters</div>
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
        <div className="bg-LiverChestnut flex flex-row px-4 py-6">
          <div className="bg-ColumbiaBlue">
            { /* About Stuff */}
            hello
          </div>
          <div>
            {/* Pictures */}
            <div className="bg-Rufous">Hello</div>
            <div className="bg-PhthaloGreen">Hello</div>
          </div>
        </div>
        <footer className="bg-PhthaloGreen">hello</footer>
      </main>
    </div>
  )
}

export default Home
