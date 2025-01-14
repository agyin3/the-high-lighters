import VideoComponent, { VideoComponentProps } from ".";

interface YoutubeVideoProps extends VideoComponentProps {
    title: string;
}

export function YoutubeVideo({ src, title, height, width }: YoutubeVideoProps) {
    return (
        <VideoComponent
            src={src}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            height={height}
            width={width}
        />
    );
}
