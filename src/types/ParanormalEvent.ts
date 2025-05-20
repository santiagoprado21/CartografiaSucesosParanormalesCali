
export interface ParanormalEvent {
  id: string;
  title: string;
  description: string;
  type: 'apparition' | 'aggression' | 'sound' | 'other';
  reporterGender: 'male' | 'female' | 'other';
  date: string;
  latitude: number;
  longitude: number;
  intensity?: number;
  verified?: boolean;
  imageUrl?: string;
}
