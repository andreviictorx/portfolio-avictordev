import FooterLogo from "../footer/FooterLogo";
import FooterCopyright from "../footer/FooterCopyright";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <FooterLogo />
          <FooterCopyright />
        </div>
      </div>
    </footer>
  );
}