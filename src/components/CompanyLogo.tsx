import companyLogoImage from "../assets/company-logo.png";

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
    <img 
      src={companyLogoImage} 
      alt="Add Value Agent Logo" 
      className={`${sizeClasses[size]} ${className} object-contain`}
    />
  );
}