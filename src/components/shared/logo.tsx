import Image from "next/image";

type LogoSize = "sm" | "md" | "lg";

interface LogoProps {
  size?: LogoSize;
  showBackground?: boolean;
  className?: string;
}

const sizeMap: Record<LogoSize, { card: string; image: number }> = {
  sm: { card: "h-10", image: 36 },
  md: { card: "h-14", image: 48 },
  lg: { card: "h-28 sm:h-32 md:h-36", image: 144 },
};

export function Logo({ size = "sm", showBackground = true, className = "" }: LogoProps) {
  const { card, image } = sizeMap[size];

  const wrapper = showBackground
    ? `inline-flex items-center justify-center bg-white rounded-2xl shadow-sm border border-gray-200 p-2.5 sm:p-3 hover:shadow-md transition-all duration-300 ${card} ${className}`
    : `inline-flex items-center justify-center ${card} ${className}`;

  return (
    <div className={wrapper}>
      <Image
        src="/logo_apc.png"
        alt="APC-ELI"
        width={image * 2}
        height={image * 2}
        className="h-full w-auto object-contain"
        style={{ maxHeight: "100%", width: "auto" }}
        priority
      />
    </div>
  );
}
