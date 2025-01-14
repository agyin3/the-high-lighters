import { headers } from "next/headers";
import { Header } from "./_components/header";
import { isMobile } from "./_utils/isMobile";
import { homeNavLinks } from "./_components/header/data";
import { About } from "./_sections/about";
import { Hero } from "./_sections/hero/hero";
import { Team } from "./_sections/team";

export default async function Home() {
    const headersList = await headers();
    const userAgent = headersList.get("user-agent");
    const usesMobile = isMobile(userAgent || "");
    return (
        <div className="min-h-screen">
            <Header navLinks={homeNavLinks} />
            <main className="h-screen w-screen">
                <Hero usesMobile={usesMobile} />
                <About usesMobile={usesMobile} />
                <Team usesMobile={usesMobile} />
            </main>
        </div>
    );
}
