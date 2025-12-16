interface ProfileAvatarProps {
    src: string;
    alt: string;
}

export default function ProfileAvatar({ src, alt }: ProfileAvatarProps) {
    return (
        <div className="relative">
            
            <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-3xl border-4 border-primary glow-primary overflow-hidden bg-secondary flex items-center justify-center shadow-lg transform translate-x-0">
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover scale-[1.15] object-[50%_60%]"
                />
            </div>
            <div className="absolute bottom-3 right-3 lg:bottom-4 lg:right-4 w-6 h-6 bg-accent rounded-full border-4 border-background z-10" />
        </div>
    );
}