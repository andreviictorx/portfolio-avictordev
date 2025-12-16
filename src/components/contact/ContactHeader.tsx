export default function ContactHeader() {
    return (
        <div className="text-center mb-12 lg:mb-16">
            <span className="font-mono text-primary text-sm mb-2 block">// contato</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Vamos conversar?
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground">
                Vamos transformar sua ideia em um{" "}
                <span className="text-gradient font-bold">projeto real.</span>
            </p>
        </div>
    );
}