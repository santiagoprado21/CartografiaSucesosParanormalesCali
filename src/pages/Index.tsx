
import { useState } from "react";
import { MapLayout } from "@/components/MapLayout";
import { MapContainer } from "@/components/MapContainer";
import { Sidebar } from "@/components/Sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { ParanormalEvent } from "@/types/ParanormalEvent";
import { MOCK_EVENTS } from "@/data/mockEvents";

const Index = () => {
  const isMobile = useIsMobile();
  const [events, setEvents] = useState<ParanormalEvent[]>(MOCK_EVENTS);
  
  const [activeFilters, setActiveFilters] = useState({
    types: {
      apparition: true,
      aggression: true,
      sound: true,
      other: true
    },
    genders: {
      male: true,
      female: true,
      other: true
    }
  });
  
  // Estadísticas de eventos activos según filtros
  const activeCounts = {
    types: {
      apparition: events.filter(e => e.type === 'apparition' && 
                               activeFilters.genders[e.reporterGender as keyof typeof activeFilters.genders]).length,
      aggression: events.filter(e => e.type === 'aggression' && 
                               activeFilters.genders[e.reporterGender as keyof typeof activeFilters.genders]).length,
      sound: events.filter(e => e.type === 'sound' && 
                         activeFilters.genders[e.reporterGender as keyof typeof activeFilters.genders]).length,
      other: events.filter(e => e.type === 'other' && 
                        activeFilters.genders[e.reporterGender as keyof typeof activeFilters.genders]).length
    },
    genders: {
      male: events.filter(e => e.reporterGender === 'male' && 
                        activeFilters.types[e.type as keyof typeof activeFilters.types]).length,
      female: events.filter(e => e.reporterGender === 'female' && 
                          activeFilters.types[e.type as keyof typeof activeFilters.types]).length,
      other: events.filter(e => e.reporterGender === 'other' && 
                         activeFilters.types[e.type as keyof typeof activeFilters.types]).length
    },
    total: events.filter(e => 
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

  return (
    <MapLayout
      isMobile={isMobile}
      map={
        <MapContainer 
          activeFilters={activeFilters}
          onTypeFilterChange={handleTypeFilterChange}
          onGenderFilterChange={handleGenderFilterChange}
        />
      }
      sidebar={
        <Sidebar
          onTypeFilterChange={handleTypeFilterChange}
          onGenderFilterChange={handleGenderFilterChange}
          activeCounts={activeCounts}
        />
      }
    />
  );
};

export default Index;
