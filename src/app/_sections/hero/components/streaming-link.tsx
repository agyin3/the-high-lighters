import Soundcloud from "@/app/_components/svg/soundcloud";
interface StreamingLinkProps {
    href: string;
    children?: React.ReactNode;
}

export function StreamingLink({ href, children }: StreamingLinkProps) {
    return (
        <a
            className="flex justify-center items-center rounded-full bg-highlightersYellow p-3"
            target="_blank"
            rel="noreferrer"
            href={href}
        >
            {children}
        </a>
    );
}
