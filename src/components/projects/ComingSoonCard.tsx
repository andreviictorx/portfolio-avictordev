export default function ComingSoonCard() {
    return (
        <div className="bg-card border border-dashed border-border rounded-xl p-4 flex flex-col items-center justify-center text-center aspect-[4/3] h-full min-h-[300px]">
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center mb-2">
                <span className="text-lg">🚀</span>
            </div>
            <h3 className="text-sm font-semibold text-foreground mb-1">Em breve</h3>
            <p className="text-muted-foreground text-[10px]">
                Novos projetos em desenvolvimento
            </p>
        </div>
    );
}