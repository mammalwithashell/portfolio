import type { NextPage } from 'next'
import Head from 'next/head'
import NextLink from "../lib/link"
import Image from 'next/image'
import TopNav from '../components/topnav'
import Footer from '../components/footer'
import Layout from '../components/layout'

const Home: NextPage = () => {
  
  return (
    <div className="flex flex-row px-4 py-6 space-x-12">
      <div className="bg-ColumbiaBlue flex flex-col space-y-4">
        Hi! I'm James
        <Image src="/james13.jpg" height={60} width={40} />
      </div>
      <div>
        {/* Pictures */}
        <div className="bg-Rufous">Hello Cameron</div>
        <div className="bg-PhthaloGreen h-20 text-white">Hello Brett</div>
      </div>
    </div>
  )
      
}

export default Home
