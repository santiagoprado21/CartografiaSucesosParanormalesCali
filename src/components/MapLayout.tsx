
import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface MapLayoutProps {
  map: ReactNode;
  sidebar: ReactNode;
  isMobile?: boolean;
}

export function MapLayout({ map, sidebar, isMobile = false }: MapLayoutProps) {
  return (
    <div className="flex flex-col h-screen w-screen md:flex-row overflow-hidden">
      {/* Mapa (siempre visible) */}
      <div className="flex-1 relative">
        {map}
      </div>

      {/* Sidebar (a la derecha en desktop, abajo en mobile) */}
      <div
        className={`
          ${isMobile ? "h-[40%]" : "md:w-[380px]"} 
          overflow-y-auto border-t md:border-l md:border-t-0 border-border
          bg-sidebar
        `}
      >
        <Card className="h-full border-none rounded-none bg-sidebar">
          <CardContent className="p-4 h-full">
            {sidebar}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
