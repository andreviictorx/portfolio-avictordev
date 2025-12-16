import ContactHeader from "../contact/ContactHeader";
import ContactForm from "../contact/ContactForm";
import SocialLinks from "../contact/SocialLinks";

export default function ContactSection() {
    return (
        <section id="contato" className="py-20 lg:py-32 bg-secondary/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">

                    <ContactHeader />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        <ContactForm />
                        <SocialLinks />
                    </div>

                </div>
            </div>
        </section>
    );
}