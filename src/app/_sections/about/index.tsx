import { YoutubeVideo } from "@/app/_components/video/youtube-video";
import styles from "./about.module.css";

interface AboutProps {
    usesMobile: boolean;
}

export function About({ usesMobile }: AboutProps) {
    return (
        <div
            className={`w-full flex flex-col items-center bg-highlightersGreen py-14 px-2 sm:px-8 relative text-black ${styles.aboutBg}`}
            id="higher-frequencies"
        >
            <div className="w-3/4 sm:w-auto flex flex-col items-center justify-center z-10">
                <YoutubeVideo
                    src="https://www.youtube.com/embed/nJGjGikyh4Y?si=jEp_-aqCKqFdN0y9"
                    title="Urban Nightscapes: Lofi Beats to Vibe with the City After Dark"
                    // className="w-full h-auto"
                    width={usesMobile ? "280" : "560"}
                    height={usesMobile ? "140" : "315"}
                />
            </div>

            <div className="bg-highlightersOrange py-8 px-4 rounded-sm mt-[-16px] sm:w-1/2">
                <h2 className="text-2xl sm:text-4xl text-black text-center mb-4">
                    Higher Frequencies
                </h2>
                <p className="text-lg sm:text-xl">
                    {/** Add youtube link here  */}
                    <a href="https://youtube.com" className="italic">
                        Higher Frequencies
                    </a>{" "}
                    is like a smoke-filled elevator ride to the stars—each floor
                    is a vibe, and every button pressed unleashes a different
                    spark of chaos, chill, or cosmic insight. The High Lighters
                    bring their unique personalities to life in an album that’s
                    as wild, witty, and elevated as the crew themselves.
                </p>
            </div>
        </div>
    );
}
