import Head from "next/head";
import Footer from "./footer";
import TopNav from "./topnav";
import { useState, useEffect, BaseHTMLAttributes } from "react";
import { PropsWithChildren } from "react";

interface LayoutProps{
    children?: React.ReactNode
}


const Layout = ({ children }: LayoutProps) => {
    const [theme, setTheme] = useState("light")


    return (
        <div className="flex flex-col min-h-screen justify-center">
            <Head>
                <title>James Peters | Software Developer</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TopNav/>
            <main className="flex flex-col grow bg-LiverChestnut">
                
                {children}
            </main>
            <Footer />
        </div>
    )
}


export default Layout