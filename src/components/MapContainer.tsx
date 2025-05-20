
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';
import { ParanormalEvent } from '@/types/ParanormalEvent';
import { MOCK_EVENTS } from '@/data/mockEvents';

interface MapContainerProps {
  className?: string;
  mapboxToken: string;
}

export function MapContainer({ className, mapboxToken }: MapContainerProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapStyle, setMapStyle] = useState<string>('mapbox://styles/mapbox/dark-v11');
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
  
  // Inicializar mapa
  useEffect(() => {
    if (!mapContainer.current || map.current) return;
    
    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: mapStyle,
      center: [-76.522, 3.452], // Centro aproximado de Santiago de Cali
      zoom: 12,
      pitch: 30,
      antialias: true
    });
    
    // Añadir controles
    map.current.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
    map.current.addControl(new mapboxgl.ScaleControl(), 'bottom-left');
    
    // Limpiar mapa al desmontar
    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);
  
  // Actualizar marcadores cuando cambian los eventos o filtros
  useEffect(() => {
    if (!map.current) return;
    
    // Esperar a que el mapa se cargue
    map.current.once('load', () => {
      // Filtrar eventos según los filtros activos
      const filteredEvents = events.filter(event => 
        activeFilters.types[event.type as keyof typeof activeFilters.types] &&
        activeFilters.genders[event.reporterGender as keyof typeof activeFilters.genders]
      );
      
      // Eliminar marcadores anteriores
      const markers = document.getElementsByClassName('marker');
      while(markers[0]) {
        markers[0].remove();
      }
      
      // Crear nuevos marcadores
      filteredEvents.forEach(event => {
        // Crear elemento para el marcador
        const el = document.createElement('div');
        el.className = 'marker flex items-center justify-center';
        el.style.width = '30px';
        el.style.height = '30px';
        el.style.borderRadius = '50%';
        
        // Colores según género
        let backgroundColor;
        switch(event.reporterGender) {
          case 'female':
            backgroundColor = '#FFDEE2';
            break;
          case 'male':
            backgroundColor = '#D3E4FD';
            break;
          default:
            backgroundColor = '#E5DEFF';
        }
        
        // Colores e iconos según tipo
        let borderColor, emoji;
        switch(event.type) {
          case 'apparition':
            borderColor = '#8B5CF6';
            emoji = '👻';
            break;
          case 'aggression':
            borderColor = '#F97316';
            emoji = '👹';
            break;
          case 'sound':
            borderColor = '#0EA5E9';
            emoji = '🔊';
            break;
          default:
            borderColor = '#2DD4BF';
            emoji = '❓';
        }
        
        // Aplicar estilos
        el.style.backgroundColor = backgroundColor;
        el.style.border = `3px solid ${borderColor}`;
        el.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
        el.style.fontSize = '16px';
        el.style.cursor = 'pointer';
        el.innerHTML = emoji;
        el.style.display = 'flex';
        el.style.alignItems = 'center';
        el.style.justifyContent = 'center';
        el.style.transition = 'all 0.3s ease';
        
        // Añadir hover
        el.addEventListener('mouseenter', () => {
          el.style.transform = 'scale(1.2)';
          el.style.boxShadow = `0 0 15px ${borderColor}`;
        });
        
        el.addEventListener('mouseleave', () => {
          el.style.transform = 'scale(1)';
          el.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
        });
        
        // Crear popup
        const popup = new mapboxgl.Popup({ offset: 25 })
          .setHTML(`
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
                <span class="text-sm">${event.reporterGender.charAt(0).toUpperCase() + event.reporterGender.slice(1)} witness</span>
              </div>
            </div>
          `);
        
        // Crear y añadir el marcador
        new mapboxgl.Marker(el)
          .setLngLat([event.longitude, event.latitude])
          .setPopup(popup)
          .addTo(map.current!);
      });
    });
  }, [events, activeFilters, map.current]);

  // Cambiar estilo del mapa
  const handleMapStyleChange = (value: string) => {
    if (!map.current) return;
    
    let style;
    switch(value) {
      case 'dark':
        style = 'mapbox://styles/mapbox/dark-v11';
        break;
      case 'satellite':
        style = 'mapbox://styles/mapbox/satellite-streets-v12';
        break;
      case 'light':
        style = 'mapbox://styles/mapbox/light-v11';
        break;
      default:
        style = 'mapbox://styles/mapbox/dark-v11';
    }
    
    setMapStyle(style);
    map.current.setStyle(style);
  };

  return (
    <div className={cn("relative w-full h-full", className)}>
      <div ref={mapContainer} className="absolute inset-0" />
      <div className="absolute top-4 left-4 z-10 bg-card p-2 rounded-md shadow-lg border border-border">
        <Tabs defaultValue="dark" onValueChange={handleMapStyleChange}>
          <TabsList className="grid grid-cols-3 w-[300px]">
            <TabsTrigger value="dark">Dark</TabsTrigger>
            <TabsTrigger value="satellite">Satellite</TabsTrigger>
            <TabsTrigger value="light">Light</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}
