interface CompanyLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function CompanyLogo({ size = "md", className = "" }: CompanyLogoProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8", 
    lg: "w-10 h-10"
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="currentColor">
        {/* Top right rounded rectangle */}
        <rect x="40" y="10" width="50" height="30" rx="10" ry="10" />
        
        {/* Bottom left rounded rectangle */}
        <rect x="10" y="50" width="40" height="25" rx="10" ry="10" />
        
        {/* Bottom right rounded rectangle */}
        <rect x="55" y="50" width="35" height="25" rx="10" ry="10" />
        
        {/* Connecting lines */}
        <rect x="35" y="40" width="10" height="15" />
        <rect x="50" y="75" width="10" height="15" />
      </svg>
    </div>
  );
}