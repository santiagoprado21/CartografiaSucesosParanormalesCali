
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ParanormalEvent } from "@/types/ParanormalEvent";
import { useState, useEffect } from "react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";

interface EventFormDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  event: ParanormalEvent | null;
  onSave: (event: ParanormalEvent) => void;
}

export function EventFormDialog({ isOpen, onOpenChange, event, onSave }: EventFormDialogProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState<Partial<ParanormalEvent>>({
    title: "",
    description: "",
    type: "apparition",
    reporterGender: "female",
    date: new Date().toLocaleDateString("es-ES"),
    latitude: 3.452,
    longitude: -76.522,
    intensity: 5,
    verified: false,
    imageUrl: "",
  });

  // Actualizar el formulario cuando se edita un evento existente
  useEffect(() => {
    if (event) {
      setFormData(event);
    } else {
      // Reset form para nuevo evento
      setFormData({
        title: "",
        description: "",
        type: "apparition",
        reporterGender: "female",
        date: new Date().toLocaleDateString("es-ES"),
        latitude: 3.452,
        longitude: -76.522,
        intensity: 5,
        verified: false,
        imageUrl: "",
      });
    }
  }, [event]);

  const handleChange = (field: keyof ParanormalEvent, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.title || !formData.description) {
      toast({
        title: "Campos incompletos",
        description: "Por favor completa todos los campos obligatorios.",
        variant: "destructive"
      });
      return;
    }

    // Generar un ID único si es un nuevo evento
    const newId = event?.id || Math.random().toString(36).substring(2, 9);

    // Asegurar que todos los campos requeridos estén presentes
    const eventToSave: ParanormalEvent = {
      id: newId,
      title: formData.title || "",
      description: formData.description || "",
      type: formData.type as ParanormalEvent["type"],
      reporterGender: formData.reporterGender as ParanormalEvent["reporterGender"],
      date: formData.date || new Date().toLocaleDateString("es-ES"),
      latitude: formData.latitude || 3.452,
      longitude: formData.longitude || -76.522,
      intensity: formData.intensity,
      verified: formData.verified || false,
      imageUrl: formData.imageUrl,
    };

    toast({
      title: event ? "Evento actualizado" : "Evento añadido",
      description: `${formData.title} ha sido ${event ? "actualizado" : "añadido"} exitosamente.`
    });

    onSave(eventToSave);
    onOpenChange(false);
  };

  const imageOptions = [
    { value: "no-image", label: "Sin imagen" },
    { value: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7", label: "Mujer con laptop" },
    { value: "https://images.unsplash.com/photo-1518770660439-4636190af475", label: "Circuito negro" },
    { value: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d", label: "Persona con MacBook" },
    { value: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158", label: "Mujer en computadora" },
    { value: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5", label: "Matrix" },
    { value: "https://images.unsplash.com/photo-1506744038136-46273834b3fb", label: "Paisaje con lago" },
    { value: "https://images.unsplash.com/photo-1501854140801-50d01698950b", label: "Montañas verdes" },
    { value: "https://images.unsplash.com/photo-1518877593221-1f28583780b4", label: "Ballena saltando" }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{event ? "Editar evento" : "Añadir evento paranormal"}</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 pt-3">
          <div className="grid gap-2">
            <Label htmlFor="title">Título</Label>
            <Input
              id="title"
              value={formData.title || ""}
              onChange={(e) => handleChange("title", e.target.value)}
              placeholder="La Dama de Blanco"
              required
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="description">Descripción</Label>
            <Textarea
              id="description"
              value={formData.description || ""}
              onChange={(e) => handleChange("description", e.target.value)}
              placeholder="Describe el evento paranormal..."
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="type">Tipo de evento</Label>
              <Select 
                value={formData.type} 
                onValueChange={(value) => handleChange("type", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apparition">Aparición</SelectItem>
                  <SelectItem value="aggression">Agresión</SelectItem>
                  <SelectItem value="sound">Sonido</SelectItem>
                  <SelectItem value="other">Otro</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="reporterGender">Género del testigo</Label>
              <Select 
                value={formData.reporterGender} 
                onValueChange={(value) => handleChange("reporterGender", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona género" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="female">Mujer</SelectItem>
                  <SelectItem value="male">Hombre</SelectItem>
                  <SelectItem value="other">Otro</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="date">Fecha</Label>
            <Input
              id="date"
              value={formData.date || ""}
              onChange={(e) => handleChange("date", e.target.value)}
              placeholder="DD/MM/YYYY"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="latitude">Latitud</Label>
              <Input
                id="latitude"
                type="number"
                step="0.0001"
                value={formData.latitude || 0}
                onChange={(e) => handleChange("latitude", parseFloat(e.target.value))}
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="longitude">Longitud</Label>
              <Input
                id="longitude"
                type="number"
                step="0.0001"
                value={formData.longitude || 0}
                onChange={(e) => handleChange("longitude", parseFloat(e.target.value))}
              />
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="intensity">Intensidad del evento (1-10)</Label>
            <div className="flex items-center gap-4 pt-2">
              <span className="text-xs">1</span>
              <Slider
                id="intensity"
                min={1}
                max={10}
                step={1}
                value={[formData.intensity || 5]}
                onValueChange={(values) => handleChange("intensity", values[0])}
                className="flex-1"
              />
              <span className="text-xs">10</span>
              <span className="ml-2 w-8 text-center font-bold">{formData.intensity || 5}</span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox 
              id="verified" 
              checked={formData.verified || false}
              onCheckedChange={(checked) => handleChange("verified", checked)}
            />
            <Label htmlFor="verified" className="cursor-pointer">Evento verificado</Label>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="imageUrl">Imagen</Label>
            <Select 
              value={formData.imageUrl || "no-image"} 
              onValueChange={(value) => handleChange("imageUrl", value === "no-image" ? "" : value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecciona una imagen" />
              </SelectTrigger>
              <SelectContent>
                {imageOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {formData.imageUrl && (
              <div className="mt-2">
                <img 
                  src={formData.imageUrl} 
                  alt="Vista previa" 
                  className="h-32 w-full object-cover rounded-md border border-border"
                />
              </div>
            )}
          </div>
          
          <div className="flex justify-end gap-2 pt-2">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => onOpenChange(false)}
            >
              Cancelar
            </Button>
            <Button type="submit">
              {event ? "Guardar cambios" : "Añadir evento"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
