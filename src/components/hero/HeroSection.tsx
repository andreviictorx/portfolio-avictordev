import  HeroBackground  from "./HeroBackground";
import ProfileAvatar  from "./ProfileAvatar";
import  HeroContent  from "./HeroContent";

export default function HeroSection() {
    const scrollTo = (id: string) => {
        document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="inicio"
            className="min-h-screen flex items-center justify-center pt-20 lg:pt-0 relative overflow-hidden"
        >
            <HeroBackground />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-30 xl:gap-40">
                    <div className="">
                        <ProfileAvatar src="/avatarprofile.png" alt="Foto de perfil de André Victor" />
                    </div>

                    <HeroContent onScrollTo={scrollTo} />

                </div>
            </div>
        </section>
    );
}