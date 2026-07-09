type SplitHeroTitleProps = {
  firstLine: string;
  secondLine: string;
  align?: "left" | "center";
  className?: string;
};

export function SplitHeroTitle({
  firstLine,
  secondLine,
  align = "center",
  className = "",
}: SplitHeroTitleProps) {
  const alignClass = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <h1 className={`flex flex-col m-0 text-5xl md:text-[64px] leading-[1.1] tracking-[-1px] ${alignClass} ${className}`.trim()}>
      <span className="block font-medium">{firstLine}</span>
      <span className="block font-normal italic font-ivyoradisplay">
        {secondLine}
      </span>
    </h1>
  );
}
