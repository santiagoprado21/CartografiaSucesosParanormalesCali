
import { useState, useEffect } from "react";
import { MapLayout } from "@/components/MapLayout";
import { MapContainer } from "@/components/MapContainer";
import { Sidebar } from "@/components/Sidebar";
import { MapboxTokenInput } from "@/components/MapboxTokenInput";
import { useIsMobile } from "@/hooks/use-mobile";
import { ParanormalEvent } from "@/types/ParanormalEvent";
import { MOCK_EVENTS } from "@/data/mockEvents";

const Index = () => {
  const isMobile = useIsMobile();
  const [mapboxToken, setMapboxToken] = useState<string>("");
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

  // Cargar token de localStorage si existe
  useEffect(() => {
    const storedToken = localStorage.getItem("mapbox-token");
    if (storedToken) {
      setMapboxToken(storedToken);
    }
  }, []);

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

  // Mostrar pantalla de entrada de token si no hay token
  if (!mapboxToken) {
    return <MapboxTokenInput onTokenSubmit={setMapboxToken} />;
  }

  return (
    <MapLayout
      isMobile={isMobile}
      map={<MapContainer mapboxToken={mapboxToken} />}
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
