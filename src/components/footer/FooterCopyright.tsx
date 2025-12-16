export default function FooterCopyright() {
    const currentYear = new Date().getFullYear();

    return (
        <p className="text-muted-foreground text-sm text-center">
            Desenvolvido por{" "}
            <span className="text-primary">André Victor</span> © {currentYear}
        </p>
    );
}