import Soundcloud from "@/app/_components/svg/soundcloud";
import { StreamingLink } from "./components/streaming-link";
import styles from "./hero.module.css";
import Image from "next/image";
import Spotify from "@/app/_components/svg/spotify";

interface HeroProps {
    usesMobile: boolean;
}

export function Hero({ usesMobile }: HeroProps) {
    const getStreamingLinks = (usesMobile: boolean) => [
        {
            href: "https://youtube.com/societyofundergroundleaders",
            children: (
                <Spotify
                    height={usesMobile ? "30" : "50"}
                    width={usesMobile ? "30" : "50"}
                    color="var(--highlighters-red)"
                />
            ),
        },
        {
            href: "https://soundcloud.com/slxmo",
            children: (
                <Soundcloud
                    height={usesMobile ? "30" : "50"}
                    width={usesMobile ? "30" : "50"}
                    color="var(--highlighters-red)"
                />
            ),
        },
    ];

    return (
        <div
            className={`w-full h-96 sm:h-screen flex flex-col justify-center items-center relative`}
            id="stream-now"
        >
            <div
                className={`absolute top-0 left-0 w-full h-96 sm:h-screen ${styles.highlightersHero} blur-sm`}
            ></div>
            <div className="z-[1] flex flex-col justify-center items-center gap-4">
                <Image
                    src="/higher-frequencies-1200-square.png"
                    width={usesMobile ? 200 : 400}
                    height={usesMobile ? 200 : 400}
                    alt="Higher Frequencies album cover"
                />
                <h1 className="text-center text-4xl sm:text-6xl text-highlightersOrange">
                    Stream Now
                </h1>
                <div className="flex gap-4">
                    {getStreamingLinks(usesMobile).map((link) => (
                        <StreamingLink key={link.href} {...link} />
                    ))}
                </div>
            </div>
        </div>
    );
}
