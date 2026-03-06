import Link from "next/link";

interface LogoProps {
  size?: number;
  showText?: boolean;
  href?: string;
}

export function Logo({ size = 32, showText = true, href = "/" }: LogoProps) {
  const diamond = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="grad-teal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00C4BE" />
          <stop offset="100%" stopColor="#00E5D0" />
        </linearGradient>
      </defs>
      {/* Back diamond — dark, offset */}
      <rect
        x="12"
        y="12"
        width="20"
        height="20"
        rx="2"
        fill="#1a1a1a"
        transform="rotate(45 22 22)"
      />
      {/* Front diamond — teal gradient */}
      <rect
        x="8"
        y="8"
        width="20"
        height="20"
        rx="2"
        fill="url(#grad-teal)"
        transform="rotate(45 18 18)"
      />
    </svg>
  );

  return (
    <Link href={href} className="flex items-center gap-2.5 group">
      <div className="relative flex-shrink-0">{diamond}</div>
      {showText && (
        <span className="text-white font-semibold text-base tracking-tight group-hover:opacity-80 transition-opacity">
          webuilder<span className="text-[#00C4BE]">.gm</span>
        </span>
      )}
    </Link>
  );
}
