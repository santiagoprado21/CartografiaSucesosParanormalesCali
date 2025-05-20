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
      apparition: boolean;
      aggression: boolean;
      sound: boolean;
      other: boolean;
    };
    genders: {
      male: boolean;
      female: boolean;
      other: boolean;
    }
  };
}

export function Sidebar({ onTypeFilterChange, onGenderFilterChange, activeCounts, activeFilters }: SidebarProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="text-center mb-6">
        <h1 className="font-display text-3xl font-bold">Atlas Paranormal</h1>
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
                    id="apparition"
                    icon={<Ghost className="h-5 w-5 text-event-apparition" />}
                    label="Aparición"
                    count={activeCounts.types.apparition || 0}
                    color="bg-event-apparition"
                    onCheckedChange={(checked) => onTypeFilterChange('apparition', checked)}
                  />
                  
                  <FilterOption
                    id="aggression"
                    icon={<Angry className="h-5 w-5 text-event-aggression" />}
                    label="Agresión"
                    count={activeCounts.types.aggression || 0}
                    color="bg-event-aggression"
                    onCheckedChange={(checked) => onTypeFilterChange('aggression', checked)}
                  />
                  
                  <FilterOption
                    id="sound"
                    icon={<Speaker className="h-5 w-5 text-event-sound" />}
                    label="Sonido"
                    count={activeCounts.types.sound || 0}
                    color="bg-event-sound"
                    onCheckedChange={(checked) => onTypeFilterChange('sound', checked)}
                  />
                  
                  <FilterOption
                    id="other"
                    icon={<HelpCircle className="h-5 w-5 text-event-other" />}
                    label="Otros"
                    count={activeCounts.types.other || 0}
                    color="bg-event-other"
                    onCheckedChange={(checked) => onTypeFilterChange('other', checked)}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>Género del Testigo</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <FilterOption
                    id="female"
                    icon={<UserRound className="h-5 w-5 text-foreground" />}
                    label="Mujer"
                    count={activeCounts.genders.female || 0}
                    color="bg-gender-female"
                    onCheckedChange={(checked) => onGenderFilterChange('female', checked)}
                  />
                  
                  <FilterOption
                    id="male"
                    icon={<UserRound className="h-5 w-5 text-foreground" />}
                    label="Hombre"
                    count={activeCounts.genders.male || 0}
                    color="bg-gender-male"
                    onCheckedChange={(checked) => onGenderFilterChange('male', checked)}
                  />
                  
                  <FilterOption
                    id="other-gender"
                    icon={<UserRound className="h-5 w-5 text-foreground" />}
                    label="Otro"
                    count={activeCounts.genders.other || 0}
                    color="bg-gender-other"
                    onCheckedChange={(checked) => onGenderFilterChange('other', checked)}
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
                <LegendItem color="bg-event-apparition" label="Aparición" icon={<Ghost size={14} />} />
                <LegendItem color="bg-event-aggression" label="Agresión" icon={<Angry size={14} />} />
                <LegendItem color="bg-event-sound" label="Sonido" icon={<Speaker size={14} />} />
                <LegendItem color="bg-event-other" label="Otros" icon={<HelpCircle size={14} />} />
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="text-sm text-muted-foreground">Género del Testigo</h4>
              <div className="grid grid-cols-3 gap-2">
                <LegendItem color="bg-gender-female" label="Mujer" />
                <LegendItem color="bg-gender-male" label="Hombre" />
                <LegendItem color="bg-gender-other" label="Otro" />
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="info">
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Atlas Paranormal de Cali</h2>
            
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
        © Atlas Paranormal {new Date().getFullYear()}
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
