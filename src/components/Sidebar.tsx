import { useState } from 'react';
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Ghost, Angry, Speaker, HelpCircle, UserRound, Info, Layers } from "lucide-react";

export interface SidebarProps {
  onTypeFilterChange: (type: string, checked: boolean) => void;
  onGenderFilterChange: (gender: string, checked: boolean) => void;
  activeCounts: {
    types: Record<string, number>;
    genders: Record<string, number>;
    total: number;
    verified?: number;
  };
  activeFilters?: {
    types: {
      Aparicion: boolean;
      Agresion: boolean;
      Sonido: boolean;
      Otro: boolean;
    };
    genders: {
      Masculino: boolean;
      Femenino: boolean;
      Otro: boolean;
    }
  };
}

export function Sidebar({ onTypeFilterChange, onGenderFilterChange, activeCounts, activeFilters }: SidebarProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="text-center mb-6">
        <h1 className="font-display text-3xl font-bold">Icesi Mapa Paranormal</h1>
        <p className="text-muted-foreground mt-1">Santiago de Cali, Colombia</p>
      </div>
      
      <Tabs defaultValue="filters">
        <TabsList className="grid grid-cols-2 mb-4">
          <TabsTrigger value="filters" className="flex gap-2 items-center">
            <Layers size={16} /> Filtros
          </TabsTrigger>
          <TabsTrigger value="info" className="flex gap-2 items-center">
            <Info size={16} /> Información
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="filters">
          <Accordion type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionTrigger>Tipos de Eventos ({activeCounts.total})</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <FilterOption
                    id="Aparicion"
                    icon={<Ghost className="h-5 w-5 text-event-Aparicion" />}
                    label="Aparicion"
                    count={activeCounts.types.Aparicion || 0}
                    color="bg-event-Aparicion"
                    onCheckedChange={(checked) => onTypeFilterChange('Aparicion', checked)}
                  />
                  
                  <FilterOption
                    id="Agresion"
                    icon={<Angry className="h-5 w-5 text-event-Agresion" />}
                    label="Agresión"
                    count={activeCounts.types.Agresion || 0}
                    color="bg-event-Agresion"
                    onCheckedChange={(checked) => onTypeFilterChange('Agresion', checked)}
                  />
                  
                  <FilterOption
                    id="Sonido"
                    icon={<Speaker className="h-5 w-5 text-event-Sonido" />}
                    label="Sonido"
                    count={activeCounts.types.Sonido || 0}
                    color="bg-event-Sonido"
                    onCheckedChange={(checked) => onTypeFilterChange('Sonido', checked)}
                  />
                  
                  <FilterOption
                    id="Otro"
                    icon={<HelpCircle className="h-5 w-5 text-event-Otro" />}
                    label="Otros"
                    count={activeCounts.types.Otro || 0}
                    color="bg-event-Otro"
                    onCheckedChange={(checked) => onTypeFilterChange('Otro', checked)}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>Género del Testigo</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <FilterOption
                    id="Femenino"
                    icon={<UserRound className="h-5 w-5 text-foreground" />}
                    label="Mujer"
                    count={activeCounts.genders.Femenino || 0}
                    color="bg-gender-Femenino"
                    onCheckedChange={(checked) => onGenderFilterChange('Femenino', checked)}
                  />
                  
                  <FilterOption
                    id="Masculino"
                    icon={<UserRound className="h-5 w-5 text-foreground" />}
                    label="Hombre"
                    count={activeCounts.genders.Masculino || 0}
                    color="bg-gender-Masculino"
                    onCheckedChange={(checked) => onGenderFilterChange('Masculino', checked)}
                  />
                  
                  <FilterOption
                    id="Otro-gender"
                    icon={<UserRound className="h-5 w-5 text-foreground" />}
                    label="Otro"
                    count={activeCounts.genders.Otro || 0}
                    color="bg-gender-Otro"
                    onCheckedChange={(checked) => onGenderFilterChange('Otro', checked)}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <Separator className="my-6" />
          
          <div className="space-y-4">
            <h3 className="font-semibold">Leyenda</h3>
            
            <div className="space-y-2">
              <h4 className="text-sm text-muted-foreground">Tipos de Eventos</h4>
              <div className="grid grid-cols-2 gap-2">
                <LegendItem color="bg-event-Aparicion" label="Aparición" icon={<Ghost size={14} />} />
                <LegendItem color="bg-event-Agresion" label="Agresión" icon={<Angry size={14} />} />
                <LegendItem color="bg-event-Sonido" label="Sonido" icon={<Speaker size={14} />} />
                <LegendItem color="bg-event-Otro" label="Otros" icon={<HelpCircle size={14} />} />
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="text-sm text-muted-foreground">Género del Testigo</h4>
              <div className="grid grid-cols-3 gap-2">
                <LegendItem color="bg-gender-Femenino" label="Mujer" />
                <LegendItem color="bg-gender-Masculino" label="Hombre" />
                <LegendItem color="bg-gender-Otro" label="Otro" />
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="info">
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Icesi Mapa Paranormal</h2>
            
            <p className="text-sm">
              Esta cartografía temática muestra los eventos paranormales reportados en Santiago de Cali, Colombia,
              categorizados por tipo de fenómeno y género del testigo.
            </p>
            
            <h3 className="font-semibold mt-4">¿Cómo usar este mapa?</h3>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Filtra por tipo de evento o género del testigo usando las opciones del panel de filtros</li>
              <li>Haz clic en los marcadores para ver detalles sobre el evento paranormal</li>
              <li>Cambia el estilo del mapa usando las opciones en la esquina superior izquierda</li>
              <li>Usa los controles de navegación para acercar, alejar o rotar el mapa</li>
            </ul>
            
            <h3 className="font-semibold mt-4">Metodología</h3>
            <p className="text-sm">
              Los datos presentados en este mapa son recopilados a través de entrevistas, registros históricos, 
              archivos periodísticos y reportes directos de residentes y visitantes de Santiago de Cali.
              Cada evento es verificado y clasificado según criterios establecidos para investigaciones paranormales.
            </p>
            
            <div className="font-display text-center mt-6 text-sm animate-pulse-slow">
              "Lo que no se puede explicar, no significa que no exista"
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-auto pt-4 text-xs text-center text-muted-foreground">
        Icesi Mapa Paranormal {new Date().getFullYear()}
      </div>
    </div>
  );
}

function FilterOption({ id, icon, label, count, color, onCheckedChange, isChecked: externalIsChecked }: {
  id: string;
  icon?: React.ReactNode;
  label: string;
  count: number;
  color: string;
  onCheckedChange: (checked: boolean) => void;
  isChecked?: boolean;
}) {
  const [internalIsChecked, setInternalIsChecked] = useState(true);
  
  // Use externally controlled state if provided
  const isChecked = externalIsChecked !== undefined ? externalIsChecked : internalIsChecked;
  
  const handleChange = (checked: boolean) => {
    setInternalIsChecked(checked);
    onCheckedChange(checked);
  };
  
  return (
    <div className="flex items-center space-x-2">
      <Checkbox 
        id={id} 
        checked={isChecked}
        onCheckedChange={handleChange}
      />
      <div className="flex flex-1 items-center">
        {icon && <span className="mr-2">{icon}</span>}
        <Label htmlFor={id} className="flex-1 cursor-pointer">{label}</Label>
        <div className={`w-2 h-2 rounded-full ${color} mr-1`} />
        <span className="text-sm text-muted-foreground">{count}</span>
      </div>
    </div>
  );
}

function LegendItem({ color, label, icon }: {
  color: string;
  label: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-1.5 text-xs">
      <div className={`w-3 h-3 rounded-full ${color}`} />
      {icon && <span>{icon}</span>}
      <span>{label}</span>
    </div>
  );
}
