
import { ParanormalEvent } from '@/types/ParanormalEvent';

// Datos simulados para Santiago de Cali
export const MOCK_EVENTS: ParanormalEvent[] = [
  {
    id: '1',
    title: 'La Dama de Blanco',
    description: 'Una figura femenina vestida de blanco apareció flotando en medio de la calle a la media noche. Varios transeúntes reportaron sentir un frío intenso.',
    type: 'apparition',
    reporterGender: 'male',
    date: '12/04/2023',
    latitude: 3.451, 
    longitude: -76.532
  },
  {
    id: '2',
    title: 'Arañazos inexplicables',
    description: 'Un visitante del Hotel Aristi reportó despertarse con arañazos en la espalda que formaban un extraño símbolo después de escuchar ruidos durante la noche.',
    type: 'aggression',
    reporterGender: 'female',
    date: '23/06/2023',
    latitude: 3.454,
    longitude: -76.534
  },
  {
    id: '3',
    title: 'Lamentos en el Teatro Municipal',
    description: 'Varios empleados y espectadores reportaron escuchar llantos y lamentos provenientes del escenario después de las funciones.',
    type: 'sound',
    reporterGender: 'female',
    date: '05/02/2024',
    latitude: 3.455,
    longitude: -76.537
  },
  {
    id: '4',
    title: 'Manifestación en el Cerro de las Tres Cruces',
    description: 'Un grupo de excursionistas reportó ver luces extrañas que formaban patrones geométricos en el cielo nocturno.',
    type: 'other',
    reporterGender: 'male',
    date: '18/11/2023',
    latitude: 3.467,
    longitude: -76.554
  },
  {
    id: '5',
    title: 'Aparición en el Cementerio Central',
    description: 'Un guardia de seguridad reportó ver la figura de un niño jugando entre las tumbas que desapareció al acercarse.',
    type: 'apparition',
    reporterGender: 'male',
    date: '31/10/2023',
    latitude: 3.445,
    longitude: -76.526
  },
  {
    id: '6',
    title: 'Objetos lanzados en casa antigua',
    description: 'Una familia reportó que objetos pequeños eran arrojados por una fuerza invisible dentro de su casa colonial en San Antonio.',
    type: 'aggression',
    reporterGender: 'female',
    date: '14/03/2024',
    latitude: 3.448,
    longitude: -76.541
  },
  {
    id: '7',
    title: 'Voces y cantos en la Universidad del Valle',
    description: 'Estudiantes y profesores reportaron escuchar coros y cantos dentro de aulas vacías durante la noche.',
    type: 'sound',
    reporterGender: 'other',
    date: '07/09/2023',
    latitude: 3.375,
    longitude: -76.534
  },
  {
    id: '8',
    title: 'Fluctuaciones electromagnéticas en Pance',
    description: 'Investigadores paranormales documentaron fluctuaciones inexplicables en equipos electrónicos cerca del río.',
    type: 'other',
    reporterGender: 'female',
    date: '02/05/2023',
    latitude: 3.331,
    longitude: -76.574
  },
  {
    id: '9',
    title: 'El Monje del Convento La Merced',
    description: 'Varios turistas fotografiaron lo que parece ser la silueta de un monje en hábito que no estaba presente al tomar la fotografía.',
    type: 'apparition',
    reporterGender: 'other',
    date: '19/07/2023',
    latitude: 3.454,
    longitude: -76.530
  },
  {
    id: '10',
    title: 'Empujones en el Boulevar del Río',
    description: 'Varios peatones reportaron sentir empujones cuando no había nadie cerca, especialmente durante la noche.',
    type: 'aggression',
    reporterGender: 'male',
    date: '28/01/2024',
    latitude: 3.450,
    longitude: -76.533
  },
  {
    id: '11',
    title: 'Campanas en la madrugada',
    description: 'Vecinos del barrio San Fernando reportan escuchar campanadas a las 3:33 AM provenientes de una iglesia abandonada.',
    type: 'sound',
    reporterGender: 'female',
    date: '13/12/2023',
    latitude: 3.421,
    longitude: -76.542
  },
  {
    id: '12',
    title: 'Cambios de temperatura en Cristo Rey',
    description: 'Visitantes del mirador reportaron cambios drásticos de temperatura sin explicación en puntos específicos del monumento.',
    type: 'other',
    reporterGender: 'male',
    date: '10/08/2023',
    latitude: 3.459,
    longitude: -76.554
  },
  {
    id: '13',
    title: 'La niña del Parque del Perro',
    description: 'Dueños de restaurantes y clientes reportan ver a una niña vestida con ropa antigua que desaparece al intentar acercarse.',
    type: 'apparition',
    reporterGender: 'female',
    date: '15/05/2023',
    latitude: 3.437,
    longitude: -76.545
  },
  {
    id: '14',
    title: 'Rasguños en la Biblioteca Departamental',
    description: 'Un bibliotecario reportó ser arañado mientras organizaba libros en la sección de historia local.',
    type: 'aggression',
    reporterGender: 'male',
    date: '03/04/2024',
    latitude: 3.423,
    longitude: -76.529
  },
  {
    id: '15',
    title: 'Música antigua en La Tertulia',
    description: 'Guardias de seguridad reportan escuchar música de la época colonial cuando el museo está vacío.',
    type: 'sound',
    reporterGender: 'other',
    date: '22/09/2023',
    latitude: 3.446,
    longitude: -76.543
  }
];
