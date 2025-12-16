import highlights from "../../components/constants/highlights";
import AboutHeader from "../about/AboutHeader";
import AboutBio from "../about/AboutBio";
import HighlightCard from "../about/HighlightCard";

export default function AboutSection() {
    return (
        <section id="sobre" className="py-20 lg:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">

                    <AboutHeader />

                    <AboutBio />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        {highlights.map((item, index) => (
                            <HighlightCard
                                key={index}
                                icon={item.icon}
                                title={item.title}
                                description={item.description}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}