import type { ReactNode } from "react";

import { AtlasFooter } from "@/components/atlas/layout/atlas-footer";
import { AtlasHeader } from "@/components/atlas/layout/atlas-header";

type AtlasPageShellProps = {
  children: ReactNode;
  footer?: boolean;
  className?: string;
};

export function AtlasPageShell({
  children,
  footer = true,
  className = "",
}: AtlasPageShellProps) {
  return (
    <div className={`min-h-screen bg-white text-atlas-text ${className}`.trim()}>
      <AtlasHeader />
      <main className="pt-[230px] md:pt-[190px] lg:pt-[132px]">{children}</main>
      {footer && <AtlasFooter />}
    </div>
  );
}
