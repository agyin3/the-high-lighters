import Image from "next/image";
import { HighlighterInfo } from "../data";
import { TeamProps } from "..";

export interface MemberCardProps extends HighlighterInfo, TeamProps {}

export function MemberCard({ name, bio, imgSrc, usesMobile }: MemberCardProps) {
    return (
        <div className="w-full sm:w-1/3 rounded-lg flex flex-col justify-center items-center mb-8 px-4 gap-4 sm:gap-5">
            <Image
                src={imgSrc}
                alt={`Image of ${name} in front of a marijuana leaf in the background`}
                height={usesMobile ? 200 : 300}
                width={usesMobile ? 200 : 300}
            />
            <h2 className="text-white text-2xl">{name}</h2>
            <p className="text-white text-lg">{bio}</p>
        </div>
    );
}
