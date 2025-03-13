import { ReactNode } from "react";

export default function PreviewLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <PreviewBanner />
      {children}
    </div>
  );
}

function PreviewBanner() {
  return (
    <div className="bg-rose-500 border-rose-700 border-solid border-y text-white absolute top-0 right-0 z-[100] rotate-45 origin-top-left px-10 -mr-16 -mt-5">
      PREVIEW
    </div>
  );
}
