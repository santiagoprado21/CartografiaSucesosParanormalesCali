
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

interface MapboxTokenInputProps {
  onTokenSubmit: (token: string) => void;
}

export function MapboxTokenInput({ onTokenSubmit }: MapboxTokenInputProps) {
  const [token, setToken] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!token.trim()) {
      toast({
        title: "Token requerido",
        description: "Por favor, ingrese un token de Mapbox válido",
        variant: "destructive",
      });
      return;
    }
    
    onTokenSubmit(token);
    localStorage.setItem("mapbox-token", token);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="font-display text-xl">Atlas Paranormal de Cali</CardTitle>
          <CardDescription>
            Para visualizar el mapa, necesita un token público de Mapbox.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="token" className="text-sm font-medium">
                  Token público de Mapbox
                </label>
                <Input
                  id="token"
                  placeholder="pk.eyJ1IjoiZX..."
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                />
              </div>
              <div className="text-sm text-muted-foreground">
                <p>Para obtener un token:</p>
                <ol className="list-decimal ml-5 space-y-1">
                  <li>Cree una cuenta en <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-accent underline">Mapbox</a></li>
                  <li>Vaya a su cuenta y busque la sección de tokens</li>
                  <li>Copie su token público (comienza con "pk.")</li>
                </ol>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handleSubmit}>
            Ingresar al mapa
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
