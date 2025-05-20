
import { useState } from "react";
import { MapLayout } from "@/components/MapLayout";
import { MapContainer } from "@/components/MapContainer";
import { Sidebar } from "@/components/Sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { ParanormalEvent } from "@/types/ParanormalEvent";
import { MOCK_EVENTS } from "@/data/mockEvents";
import { EventFormDialog } from "@/components/EventFormDialog";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const isMobile = useIsMobile();
  const { toast } = useToast();
  const [events, setEvents] = useState<ParanormalEvent[]>(MOCK_EVENTS);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState<ParanormalEvent | null>(null);
  
  const [activeFilters, setActiveFilters] = useState({
    types: {
      Aparicion: true,
      Agresion: true,
      Sonido: true,
      Otro: true
    },
    genders: {
      Masculino: true,
      Femenino: true,
      Otro: true
    }
  });
  
  // Estadísticas de eventos activos según filtros
  const activeCounts = {
    types: {
      Aparicion: events.filter(e => e.type === 'Aparicion' && 
                               activeFilters.genders[e.reporterGender as keyof typeof activeFilters.genders]).length,
      Agresion: events.filter(e => e.type === 'Agresion' && 
                               activeFilters.genders[e.reporterGender as keyof typeof activeFilters.genders]).length,
      Sonido: events.filter(e => e.type === 'Sonido' && 
                         activeFilters.genders[e.reporterGender as keyof typeof activeFilters.genders]).length,
      Otro: events.filter(e => e.type === 'Otro' && 
                        activeFilters.genders[e.reporterGender as keyof typeof activeFilters.genders]).length
    },
    genders: {
      Masculino: events.filter(e => e.reporterGender === 'Masculino' && 
                        activeFilters.types[e.type as keyof typeof activeFilters.types]).length,
      Femenino: events.filter(e => e.reporterGender === 'Femenino' && 
                          activeFilters.types[e.type as keyof typeof activeFilters.types]).length,
      Otro: events.filter(e => e.reporterGender === 'Otro' && 
                         activeFilters.types[e.type as keyof typeof activeFilters.types]).length
    },
    total: events.filter(e => 
             activeFilters.types[e.type as keyof typeof activeFilters.types] && 
             activeFilters.genders[e.reporterGender as keyof typeof activeFilters.genders]).length,
    verified: events.filter(e => 
              e.verified && 
              activeFilters.types[e.type as keyof typeof activeFilters.types] && 
              activeFilters.genders[e.reporterGender as keyof typeof activeFilters.genders]).length
  };

  // Handlers para filtros
  const handleTypeFilterChange = (type: string, checked: boolean) => {
    setActiveFilters(prev => ({
      ...prev,
      types: {
        ...prev.types,
        [type]: checked
      }
    }));
  };

  const handleGenderFilterChange = (gender: string, checked: boolean) => {
    setActiveFilters(prev => ({
      ...prev,
      genders: {
        ...prev.genders,
        [gender]: checked
      }
    }));
  };

  // Manejo de eventos paranormales
  const handleAddNewEvent = () => {
    setCurrentEvent(null);
    setIsFormOpen(true);
  };

  const handleEditEvent = (event: ParanormalEvent) => {
    setCurrentEvent(event);
    setIsFormOpen(true);
  };

  const handleSaveEvent = (eventData: ParanormalEvent) => {
    if (currentEvent) {
      // Actualizar evento existente
      setEvents(prev => prev.map(e => e.id === eventData.id ? eventData : e));
      toast({
        title: "Evento actualizado",
        description: `${eventData.title} ha sido actualizado correctamente.`
      });
    } else {
      // Añadir nuevo evento
      setEvents(prev => [...prev, { ...eventData, id: `${prev.length + 1}` }]);
      toast({
        title: "Evento añadido",
        description: `${eventData.title} ha sido añadido a la base de datos.`
      });
    }
  };

  const handleDeleteEvent = (eventId: string) => {
    setEvents(prev => prev.filter(e => e.id !== eventId));
    toast({
      title: "Evento eliminado",
      description: "El evento ha sido eliminado correctamente.",
      variant: "destructive"
    });
  };

  return (
    <>
      <MapLayout
        isMobile={isMobile}
        map={
          <MapContainer 
            activeFilters={activeFilters}
            onTypeFilterChange={handleTypeFilterChange}
            onGenderFilterChange={handleGenderFilterChange}
            events={events}
            onEditEvent={handleEditEvent}
            onDeleteEvent={handleDeleteEvent}
          />
        }
        sidebar={
          <div className="flex flex-col h-full">
            <div className="p-4">
              <Button 
                onClick={handleAddNewEvent} 
                className="w-full" 
                variant="outline"
              >
                <PlusCircle className="mr-2 h-4 w-4" />
                Añadir evento paranormal
              </Button>
            </div>
            <Sidebar
              onTypeFilterChange={handleTypeFilterChange}
              onGenderFilterChange={handleGenderFilterChange}
              activeCounts={activeCounts}
              activeFilters={activeFilters}
            />
          </div>
        }
      />

      <EventFormDialog 
        isOpen={isFormOpen} 
        onOpenChange={setIsFormOpen}
        event={currentEvent}
        onSave={handleSaveEvent}
      />
    </>
  );
};

export default Index;
