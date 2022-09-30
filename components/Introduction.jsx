import Link from "next/link";
import Image from 'next/image';

const Introduction = () => {
    const textClasses1 = "text-6xl font-bold"
    const textClasses2 = "text-xl"
    const imageSizeClasses = "h-[538px] w-[548px]"
    return (
        <div className="relative">
            <div className=" bg-lightBrown text-white pb-2 pl-14 pt-24 -z-10">
                <ul className="flex flex-col space-y-4 mb-4">
                    <li className={textClasses1}>Howdy &#129312;</li>
                    <li className={textClasses1}>I&apos;m James</li>
                    <li className={textClasses1}>a Software Developer</li>
                    <li className={textClasses2}>Currently located in Texas, love building solutions and creating digital experiences on the web</li>
                </ul>

                <div className="flex flex-row gap-28 mt-5">
                    <div><Link  href='#ContactMe' scroll={false}><a className={"rounded outline p-1 outline-cyan-300 text-cyan-300"}>Contact Me</a></Link></div>
                    <div><a className="rounded bg-sand text-lightBrown p-1">Download CV</a></div>
                    <div className=" relative ml-auto mr-14 z-20">
                        <div className={`${imageSizeClasses} absolute -top-3 -left-4 z-40 `}>
                            <Image src='/Me.png' layout="fill" alt='' />
                        </div>
                        <div className={`${imageSizeClasses} bg-brown z-30`}></div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-[216px] bg-sand h-0.5 w-screen z-10 "></div>
        </div>

    );
}

export default Introduction;