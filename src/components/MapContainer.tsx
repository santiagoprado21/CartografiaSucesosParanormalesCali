import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';
import { ParanormalEvent } from '@/types/ParanormalEvent';
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { EventFormDialog } from "@/components/EventFormDialog";

// Define the MapContainer props interface
export interface MapContainerProps {
  className?: string;
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
  events?: ParanormalEvent[];
  onTypeFilterChange?: (type: string, checked: boolean) => void;
  onGenderFilterChange?: (gender: string, checked: boolean) => void;
  onEditEvent?: (event: ParanormalEvent) => void;
  onDeleteEvent?: (eventId: string) => void;
}

export function MapContainer({ 
  className, 
  activeFilters: externalActiveFilters,
  events = [],
  onTypeFilterChange: externalTypeFilterChange,
  onGenderFilterChange: externalGenderFilterChange,
  onEditEvent: externalEditEvent,
  onDeleteEvent: externalDeleteEvent
}: MapContainerProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);
  const markers = useRef<L.Marker[]>([]);
  const [mapStyle, setMapStyle] = useState<string>('dark');
  const [internalEvents, setInternalEvents] = useState<ParanormalEvent[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState<ParanormalEvent | null>(null);
  
  // Use external events if provided, otherwise use internal state
  const displayEvents = events.length > 0 ? events : internalEvents;
  
  // Use external filters if provided, otherwise use internal state
  const [internalActiveFilters, setInternalActiveFilters] = useState({
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

  // Use external filters if provided, otherwise use internal ones
  const activeFilters = externalActiveFilters || internalActiveFilters;
  
  // Inicializar mapa
  useEffect(() => {
    if (!mapContainer.current || map.current) return;
    
    // Crear el mapa con Leaflet
    map.current = L.map(mapContainer.current).setView([3.452, -76.522], 12);
    
    // Añadir capa de mapa base según estilo seleccionado
    updateMapStyle(mapStyle);
    
    // Añadir escala
    L.control.scale({ imperial: false }).addTo(map.current);
    
    // Renderizar eventos en el mapa
    renderEvents();
    
    // Limpiar mapa al desmontar
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);
  
  // Actualizar marcadores cuando cambian los eventos o filtros
  useEffect(() => {
    renderEvents();
  }, [displayEvents, activeFilters]);
  
  // Función para actualizar el estilo del mapa
  const updateMapStyle = (style: string) => {
    if (!map.current) return;
    
    // Remover capas de mosaicos existentes
    map.current.eachLayer((layer) => {
      if (layer instanceof L.TileLayer) {
        map.current?.removeLayer(layer);
      }
    });
    
    // Configurar nueva capa según el estilo elegido
    let tileLayer;
    switch(style) {
      case 'dark':
        tileLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          maxZoom: 19
        });
        break;
      case 'satellite':
        tileLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
          attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        });
        break;
      case 'light':
        tileLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          maxZoom: 19
        });
        break;
      default:
        tileLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          maxZoom: 19
        });
    }
    
    tileLayer.addTo(map.current);
  };
  
  // Función para renderizar eventos en el mapa
  const renderEvents = () => {
    if (!map.current) return;
    
    // Limpiar marcadores existentes
    markers.current.forEach(marker => {
      marker.remove();
    });
    markers.current = [];
    
    // Filtrar eventos según los filtros activos
    const filteredEvents = displayEvents.filter(event => 
      activeFilters.types[event.type as keyof typeof activeFilters.types] &&
      activeFilters.genders[event.reporterGender as keyof typeof activeFilters.genders]
    );
    
    // Crear nuevos marcadores para eventos filtrados
    filteredEvents.forEach(event => {
      // Colores según género
      let backgroundColor;
      switch(event.reporterGender) {
        case 'Femenino':
          backgroundColor = '#FFDEE2';
          break;
        case 'Masculino':
          backgroundColor = '#D3E4FD';
          break;
        default:
          backgroundColor = '#E5DEFF';
      }
      
      // Colores e iconos según tipo
      let borderColor, icon;
      switch(event.type) {
        case 'Aparicion':
          borderColor = '#8B5CF6';
          icon = '👻';
          break;
        case 'Agresion':
          borderColor = '#F97316';
          icon = '👹';
          break;
        case 'Sonido':
          borderColor = '#0EA5E9';
          icon = '🔊';
          break;
        default:
          borderColor = '#2DD4BF';
          icon = '❓';
      }
      
      // Crear icono personalizado para el marcador
      const customIcon = L.divIcon({
        className: 'custom-leaflet-marker',
        html: `<div class="marker-icon" style="background-color: ${backgroundColor}; border: 3px solid ${borderColor}; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 10px rgba(0,0,0,0.5); transition: all 0.3s ease;">${icon}</div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, -15],
      });
      
      // Crear marcador y añadirlo al mapa
      const marker = L.marker([event.latitude, event.longitude], { icon: customIcon });
      
      // Añadir popup con información
      marker.bindPopup(`
        <div>
          <h3 class="font-display font-bold text-lg">${event.title}</h3>
          <p class="text-sm text-muted-foreground">${event.date}</p>
          <div class="my-2 border-t border-border"></div>
          <p>${event.description}</p>
          <div class="mt-3 flex items-center gap-2">
            <span class="inline-block w-3 h-3 rounded-full" style="background-color:${borderColor}"></span>
            <span class="text-sm font-semibold">${event.type.charAt(0).toUpperCase() + event.type.slice(1)}</span>
          </div>
          <div class="mt-1 flex items-center gap-2">
            <span class="inline-block w-3 h-3 rounded-full" style="background-color:${backgroundColor}"></span>
            <span class="text-sm">${event.reporterGender.charAt(0).toUpperCase() + event.reporterGender.slice(1)} </span>
          </div>
          <div class="mt-3 text-center">
            <button class="edit-event-btn bg-primary text-primary-foreground hover:bg-primary/90 px-2 py-1 rounded text-xs" data-event-id="${event.id}">Editar evento</button>
          </div>
        </div>
      `);

      // Añadir listener para editar evento desde el popup
      marker.on('popupopen', () => {
        setTimeout(() => {
          const editBtn = document.querySelector(`.edit-event-btn[data-event-id="${event.id}"]`) as HTMLElement;
          if (editBtn) {
            editBtn.addEventListener('click', () => {
              handleEditEvent(event);
            });
          }
        }, 100);
      });
      
      marker.addTo(map.current);
      markers.current.push(marker);
    });
  };

  // Cambiar estilo del mapa
  const handleMapStyleChange = (value: string) => {
    if (!map.current) return;
    setMapStyle(value);
    updateMapStyle(value);
  };

  // Manejar filtros
  const handleTypeFilterChange = (type: string, checked: boolean) => {
    if (externalTypeFilterChange) {
      externalTypeFilterChange(type, checked);
    } else {
      setInternalActiveFilters(prev => ({
        ...prev,
        types: {
          ...prev.types,
          [type]: checked
        }
      }));
    }
  };

  const handleGenderFilterChange = (gender: string, checked: boolean) => {
    if (externalGenderFilterChange) {
      externalGenderFilterChange(gender, checked);
    } else {
      setInternalActiveFilters(prev => ({
        ...prev,
        genders: {
          ...prev.genders,
          [gender]: checked
        }
      }));
    }
  };

  // Manejar eventos
  const handleAddEvent = () => {
    setCurrentEvent(null);
    setIsFormOpen(true);
  };

  const handleEditEvent = (event: ParanormalEvent) => {
    if (externalEditEvent) {
      externalEditEvent(event);
    } else {
      setCurrentEvent(event);
      setIsFormOpen(true);
    }
  };

  const handleSaveEvent = (event: ParanormalEvent) => {
    if (!externalEditEvent) {
      if (currentEvent) {
        // Editar evento existente
        setInternalEvents(prevEvents => 
          prevEvents.map(e => e.id === event.id ? event : e)
        );
      } else {
        // Añadir nuevo evento
        const newEvent = {
          ...event,
          id: crypto.randomUUID(),
        };
        setInternalEvents(prevEvents => [...prevEvents, newEvent]);
      }
    }
    setIsFormOpen(false);
    setCurrentEvent(null);
  };

  const handleDeleteEvent = (eventId: string) => {
    if (externalDeleteEvent) {
      externalDeleteEvent(eventId);
    } else {
      setInternalEvents(prev => prev.filter(e => e.id !== eventId));
    }
  };

  return (
    <div className={cn("relative w-full h-full", className)}>
      <div
        ref={mapContainer}
        className="absolute inset-0"
        style={{ zIndex: 1 }} // Asegura que el mapa quede en el fondo
      />
  
      <div
        className="absolute top-4 left-4 bg-card p-2 rounded-md shadow-lg border border-border"
        style={{ zIndex: 10 }} // Tabs encima del mapa
      >
        <Tabs defaultValue="dark" onValueChange={handleMapStyleChange}>
          <TabsList className="grid grid-cols-3 w-[300px]">
            <TabsTrigger value="dark">Oscuro</TabsTrigger>
            <TabsTrigger value="satellite">Satelite</TabsTrigger>
            <TabsTrigger value="light">Claro</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
  
      <div
        className="absolute top-4 right-4"
        style={{ zIndex: 10 }} // Botón encima del mapa
      >
        <Button onClick={handleAddEvent} className="flex items-center gap-2">
          <PlusCircle size={16} />
          Añadir evento
        </Button>
      </div>
  
      <EventFormDialog 
        isOpen={isFormOpen} 
        onOpenChange={setIsFormOpen} 
        event={currentEvent}
        onSave={handleSaveEvent}
      />
  
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-leaflet-marker {
          background: transparent;
          border: none;
        }
        .marker-icon:hover {
          transform: scale(1.2);
          box-shadow: 0 0 15px rgba(139, 92, 246, 0.8);
        }
        .leaflet-popup-content-wrapper {
          background-color: #1c1b22;
          color: #e4e4e7;
          border-radius: 0.5rem;
          border: 1px solid #2e2d36;
        }
        .leaflet-popup-tip {
          background-color: #1c1b22;
          border: 1px solid #2e2d36;
        }
        .leaflet-container {
          font-family: 'Inter', sans-serif;
        }
      `}} />
    </div>
  );}