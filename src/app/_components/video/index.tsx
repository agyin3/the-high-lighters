export interface VideoComponentProps
    extends React.IframeHTMLAttributes<HTMLIFrameElement> {
    src: string;
}
export default async function VideoComponent({
    src,
    ...options
}: VideoComponentProps) {
    return <iframe src={src} allowFullScreen {...options} />;
}
