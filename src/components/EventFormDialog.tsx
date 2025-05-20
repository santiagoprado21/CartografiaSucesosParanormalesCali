
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

interface EventFormDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  event: ParanormalEvent | null;
  onSave: (event: ParanormalEvent) => void;
}

export function EventFormDialog({ isOpen, onOpenChange, event, onSave }: EventFormDialogProps) {
  const [formData, setFormData] = useState<Partial<ParanormalEvent>>({
    title: "",
    description: "",
    type: "apparition",
    reporterGender: "female",
    date: new Date().toLocaleDateString("es-ES"),
    latitude: 3.452,
    longitude: -76.522,
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
      return;
    }

    // Asegurar que todos los campos requeridos estén presentes
    const eventToSave = {
      id: event?.id || "",
      title: formData.title || "",
      description: formData.description || "",
      type: formData.type as ParanormalEvent["type"],
      reporterGender: formData.reporterGender as ParanormalEvent["reporterGender"],
      date: formData.date || new Date().toLocaleDateString("es-ES"),
      latitude: formData.latitude || 3.452,
      longitude: formData.longitude || -76.522,
    };

    onSave(eventToSave);
  };

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
