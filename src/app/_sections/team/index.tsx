import { MemberCard } from "./components/member-card";
import { highlightersInfo } from "./data";
import styles from "./team.module.css";

export interface TeamProps {
    usesMobile: boolean;
}

export function Team({ usesMobile }: TeamProps) {
    return (
        <div
            className={`w-full flex flex-col justify-center items-center bg-highlightersRed py-14 px-2 ${styles.teamBg}`}
            id="meet-the-lighters"
        >
            <h1 className="text-4xl sm:text-5xl text-highlightersOrange text-center mb-6">
                Meet The Lighters
            </h1>
            <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-4">
                {highlightersInfo.map((highlighter) => (
                    <MemberCard
                        key={highlighter.name}
                        {...highlighter}
                        usesMobile={usesMobile}
                    />
                ))}
            </div>
        </div>
    );
}
