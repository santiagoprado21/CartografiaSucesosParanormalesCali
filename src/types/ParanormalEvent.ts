
export interface ParanormalEvent {
  id: string;
  title: string;
  description: string;
  type: 'Aparicion' | 'Agresion' | 'Sonido' | 'Otro';
  reporterGender: 'Masculino' | 'Femenino' | 'Otro';
  date: string;
  latitude: number;
  longitude: number;
  intensity?: number;
  verified?: boolean;
  imageUrl?: string;
}
