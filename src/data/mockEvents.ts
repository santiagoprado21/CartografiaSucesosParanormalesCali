import { ParanormalEvent } from '@/types/ParanormalEvent';

// Datos simulados para Santiago de Cali
export const MOCK_EVENTS: ParanormalEvent[] = [
  {
    id: '1',
    title: 'La Dama de Blanco',
    description: 'Una figura femenina vestida de blanco apareció flotando en medio de la calle a la media noche. Varios transeúntes reportaron sentir un frío intenso.',
    type: 'Aparicion',
    reporterGender: 'Masculino',
    date: '12/04/2023',
    latitude: 3.451, 
    longitude: -76.532,
    intensity: 8,
    verified: true,
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb'
  },
  {
    id: '2',
    title: 'Arañazos inexplicables',
    description: 'Un visitante del Hotel Aristi reportó despertarse con arañazos en la espalda que formaban un extraño símbolo después de escuchar ruidos durante la noche.',
    type: 'Agresion',
    reporterGender: 'Femenino',
    date: '23/06/2023',
    latitude: 3.454,
    longitude: -76.534,
    intensity: 7,
    verified: true,
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475'
  },
  {
    id: '3',
    title: 'Lamentos en el Teatro Municipal',
    description: 'Varios empleados y espectadores reportaron escuchar llantos y lamentos provenientes del escenario después de las funciones.',
    type: 'Sonido',
    reporterGender: 'Femenino',
    date: '05/02/2024',
    latitude: 3.455,
    longitude: -76.537
  },
  {
    id: '4',
    title: 'Manifestación en el Cerro de las Tres Cruces',
    description: 'Un grupo de excursionistas reportó ver luces extrañas que formaban patrones geométricos en el cielo nocturno.',
    type: 'Otro',
    reporterGender: 'Masculino',
    date: '18/11/2023',
    latitude: 3.467,
    longitude: -76.554
  },
  {
    id: '5',
    title: 'Aparición en el Cementerio Central',
    description: 'Un guardia de seguridad reportó ver la figura de un niño jugando entre las tumbas que desapareció al acercarse.',
    type: 'Aparicion',
    reporterGender: 'Masculino',
    date: '31/10/2023',
    latitude: 3.445,
    longitude: -76.526
  },
  {
    id: '6',
    title: 'Objetos lanzados en casa antigua',
    description: 'Una familia reportó que objetos pequeños eran arrojados por una fuerza invisible dentro de su casa colonial en San Antonio.',
    type: 'Agresion',
    reporterGender: 'Masculino',
    date: '14/03/2024',
    latitude: 3.448,
    longitude: -76.541
  },
  {
    id: '7',
    title: 'Voces y cantos en la Universidad del Valle',
    description: 'Estudiantes y profesores reportaron escuchar coros y cantos dentro de aulas vacías durante la noche.',
    type: 'Sonido',
    reporterGender: 'Otro',
    date: '07/09/2023',
    latitude: 3.375,
    longitude: -76.534
  },
  {
    id: '8',
    title: 'Fluctuaciones electromagnéticas en Pance',
    description: 'Investigadores paranormales documentaron fluctuaciones inexplicables en equipos electrónicos cerca del río.',
    type: 'Otro',
    reporterGender: 'Femenino',
    date: '02/05/2023',
    latitude: 3.331,
    longitude: -76.574
  },
  {
    id: '9',
    title: 'El Monje del Convento La Merced',
    description: 'Varios turistas fotografiaron lo que parece ser la silueta de un monje en hábito que no estaba presente al tomar la fotografía.',
    type: 'Aparicion',
    reporterGender: 'Otro',
    date: '19/07/2023',
    latitude: 3.454,
    longitude: -76.530
  },
  {
    id: '10',
    title: 'Empujones en el Boulevar del Río',
    description: 'Varios peatones reportaron sentir empujones cuando no había nadie cerca, especialmente durante la noche.',
    type: 'Agresion',
    reporterGender: 'Masculino',
    date: '28/01/2024',
    latitude: 3.450,
    longitude: -76.533
  },
  {
    id: '11',
    title: 'Campanas en la madrugada',
    description: 'Vecinos del barrio San Fernando reportan escuchar campanadas a las 3:33 AM provenientes de una iglesia abandonada.',
    type: 'Sonido',
    reporterGender: 'Femenino',
    date: '13/12/2023',
    latitude: 3.421,
    longitude: -76.542
  },
  {
    id: '12',
    title: 'Cambios de temperatura en Cristo Rey',
    description: 'Visitantes del mirador reportaron cambios drásticos de temperatura sin explicación en puntos específicos del monumento.',
    type: 'Otro',
    reporterGender: 'Masculino',
    date: '10/08/2023',
    latitude: 3.459,
    longitude: -76.554
  },
  {
    id: '13',
    title: 'La niña del Parque del Perro',
    description: 'Dueños de restaurantes y clientes reportan ver a una niña vestida con ropa antigua que desaparece al intentar acercarse.',
    type: 'Aparicion',
    reporterGender: 'Femenino',
    date: '15/05/2023',
    latitude: 3.437,
    longitude: -76.545
  },
  {
    id: '14',
    title: 'Rasguños en la Biblioteca Departamental',
    description: 'Un bibliotecario reportó ser arañado mientras organizaba libros en la sección de historia local.',
    type: 'Agresion',
    reporterGender: 'Masculino',
    date: '03/04/2024',
    latitude: 3.423,
    longitude: -76.529
  },
  {
    id: '15',
    title: 'Música antigua en La Tertulia',
    description: 'Guardias de seguridad reportan escuchar música de la época colonial cuando el museo está vacío.',
    type: 'Sonido',
    reporterGender: 'Otro',
    date: '22/09/2023',
    latitude: 3.446,
    longitude: -76.543
  },
  {
    id: '16',
    title: 'Fenómeno lumínico en Chipichape',
    description: 'Varios clientes del centro comercial reportaron ver luces de colores que se movían de forma no natural a través de los pasillos después del horario de cierre.',
    type: 'Aparicion',
    reporterGender: 'Femenino',
    date: '05/01/2024',
    latitude: 3.463,
    longitude: -76.528,
    intensity: 6,
    verified: false
  },
  {
    id: '17',
    title: 'Sensación de ahogo en Pance',
    description: 'Excursionistas reportaron sentir que algo les apretaba el cuello mientras acampaban cerca del río en una zona específica.',
    type: 'Agresion',
    reporterGender: 'Masculino',
    date: '19/02/2024',
    latitude: 3.322,
    longitude: -76.571,
    intensity: 8,
    verified: true,
    imageUrl: 'https://images.unsplash.com/photo-1501854140801-50d01698950b'
  },
  {
    id: '18',
    title: 'Cánticos antiguos en ruinas coloniales',
    description: 'Arqueólogos documentaron grabaciones de cánticos en una lengua desconocida que aparecían en sus equipos sin explicación mientras excavaban en ruinas coloniales.',
    type: 'Sonido',
    reporterGender: 'Otro',
    date: '14/03/2024',
    latitude: 3.442,
    longitude: -76.527,
    intensity: 7,
    verified: true
  },
  {
    id: '19',
    title: 'Niebla con formas humanas',
    description: 'Vecinos del barrio Granada reportan haber visto niebla que adopta formas humanas y parece seguir a los transeúntes durante las noches más frías.',
    type: 'Aparicion',
    reporterGender: 'Femenino',
    date: '28/03/2024',
    latitude: 3.458,
    longitude: -76.528,
    intensity: 5,
    verified: false,
    imageUrl: 'https://images.unsplash.com/photo-1518877593221-1f28583780b4'
  },
  {
    id: '20',
    title: 'Pájaros inmóviles en el aire',
    description: 'Varios testigos reportaron ver grupos de pájaros completamente inmóviles en el aire, como si el tiempo se hubiera detenido, durante aproximadamente 3 minutos.',
    type: 'Otro',
    reporterGender: 'Masculino',
    date: '04/04/2024',
    latitude: 3.401,
    longitude: -76.543,
    intensity: 9,
    verified: true
  },
  {
    id: '21',
    title: 'Voces infantiles en escuela abandonada',
    description: 'Vecinos del sector reportan escuchar risas y voces de niños provenientes de una escuela que lleva abandonada más de 15 años.',
    type: 'Sonido',
    reporterGender: 'Femenino',
    date: '11/04/2024',
    latitude: 3.426,
    longitude: -76.552,
    intensity: 8,
    verified: false
  },
  {
    id: '22',
    title: 'Muebles reordenados',
    description: 'Una familia reporta que al volver a casa después del trabajo, encuentran todos los muebles en posiciones distintas a como los dejaron, a pesar de que la casa estaba cerrada.',
    type: 'Agresion',
    reporterGender: 'Masculino',
    date: '17/04/2024',
    latitude: 3.437,
    longitude: -76.532,
    intensity: 6,
    verified: true,
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d'
  },
  {
    id: '23',
    title: 'Sombra gigante en el Cerro de las Tres Cruces',
    description: 'Excursionistas reportan haber visto una sombra humanoide de proporciones gigantes proyectada sobre la montaña, sin ninguna fuente que pudiera proyectarla.',
    type: 'Aparicion',
    reporterGender: 'Otro',
    date: '23/04/2024',
    latitude: 3.467,
    longitude: -76.556,
    intensity: 9,
    verified: false
  },
  {
    id: '24',
    title: 'Marcas circulares en cultivos',
    description: 'Agricultores de la zona rural encontraron patrones geométricos perfectos en sus cultivos que aparecieron de la noche a la mañana sin explicación.',
    type: 'Otro',
    reporterGender: 'Masculino',
    date: '01/05/2024',
    latitude: 3.390,
    longitude: -76.510,
    intensity: 7,
    verified: true,
    imageUrl: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7'
  },
  {
    id: '25',
    title: 'Interferencias electrónicas en la Universidad',
    description: 'Estudiantes y profesores reportan que todos los dispositivos electrónicos fallan simultáneamente en determinados salones del edificio de ingeniería.',
    type: 'Otro',
    reporterGender: 'Femenino',
    date: '07/05/2024',
    latitude: 3.375,
    longitude: -76.534,
    intensity: 6,
    verified: false
  },
  {
    id: '26',
    title: 'Temperatura bajo cero en habitación sellada',
    description: 'Una familia reportó que una habitación específica de su casa alcanzó temperaturas bajo cero en pleno día caluroso, formando escarcha en las paredes.',
    type: 'Otro',
    reporterGender: 'Masculino',
    date: '12/05/2024',
    latitude: 3.447,
    longitude: -76.539,
    intensity: 8,
    verified: true,
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5'
  },
  {
    id: '27',
    title: 'Reloj que retrocede',
    description: 'Empleados de una oficina reportan que a las 3:33 pm todos los días, el reloj de pared principal retrocede exactamente 33 minutos para luego volver a la hora correcta.',
    type: 'Otro',
    reporterGender: 'Femenino',
    date: '16/05/2024',
    latitude: 3.452,
    longitude: -76.530,
    intensity: 7,
    verified: false
  },
  {
    id: '28',
    title: 'Perros que ladran al vacío',
    description: 'Residentes del barrio El Peñón reportan que sus perros se alinean todos los anocheceres ladrando a un punto específico en el cielo donde no hay nada visible.',
    type: 'Sonido',
    reporterGender: 'Otro',
    date: '19/05/2024',
    latitude: 3.452,
    longitude: -76.540,
    intensity: 5,
    verified: true
  },
  {
    id: '29',
    title: 'Fotografías con rostros adicionales',
    description: 'Visitantes de un restaurante tradicional reportan que al tomar fotografías aparecen rostros adicionales de personas que no estaban presentes.',
    type: 'Aparicion',
    reporterGender: 'Femenino',
    date: '01/06/2024',
    latitude: 3.448,
    longitude: -76.535,
    intensity: 9,
    verified: false,
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158'
  },
  {
    id: '30',
    title: 'Melodía repetitiva en la Casa Proartes',
    description: 'Personal de limpieza reporta escuchar siempre la misma melodía de piano antigua cuando están solos en el edificio, a pesar de que no hay piano en el lugar.',
    type: 'Sonido',
    reporterGender: 'Masculino',
    date: '08/06/2024',
    latitude: 3.454,
    longitude: -76.536,
    intensity: 6,
    verified: true
  },
  {
    id: '31',
    title: 'Barrio Departamental',
    description: 'En mi habitación tenía una mesa o comedor, donde en la noche se apreció una niña acurrucada debajo de la mesa.',
    type: 'Aparicion',
    reporterGender: 'Femenino',
    date: '15/02/2009',
    latitude: 3.4179082,
    longitude: -76.5377247,
    intensity: 8,
    verified: true
  },
  {
    id: '32',
    title: 'Intento abrir la puerta',
    description: 'Estaba en una habitación con una amiga y se escuchaba como se intentaba abrir la puerta muchas veces de seguido(fuerte) y no había nadie más en la casa',
    type: 'Sonido',
    reporterGender: 'Femenino',
    date: '15/10/2018',
    latitude: 3.3960162,
    longitude: -76.5390294,
    intensity: 8,
    verified: true
  },
  {
    id: '33',
    title: 'Sonido en el closet',
    description: 'Estaba acostado con mi pareja durmiendo y el closet del cuarto empezó a sonar como si lo quisieran abrir',
    type: 'Sonido',
    reporterGender: 'Masculino',
    date: '12/06/2024',
    latitude: 3.3534145,
    longitude: -76.5344107,
    intensity: 8,
    verified: true
  },
  {
    id: '34',
    title: 'Agresion mientras duerme',
    description: 'A mi tio, una rara presencia parecía como si se le hubiera sentado en el pecho mientras el dormía, no lo dejaba levantar ni respirar bien, luego de eso fue arañado en el pecho',
    type: 'Agresion',
    reporterGender: 'Masculino',
    date: '10/08/2006',
    latitude: 3.4219753,
    longitude: -76.5353107,
    intensity: 8,
    verified: true
  },
  {
    id: '35',
    title: 'Iglesia Cristiana',
    description: 'Me encontraba en una iglesia cristiana, tenía unos 12 años. Al final estaban haciendo un "exorcismo" y dijeron que cerrarmos los ojos, mi mamá, mi tia y yo estábamos atrás del todo, con sillas vacías a nuestro alrededor y una fila de sillas separandonos, ya que me hice más adelante de ellas. Después de tanto grito y oración sentí que alguien me tocaba el hombro y me calmé, sentí paz. Al terminar les pregunté a ellas si alguna lo hizo y me dijeron que no, además ellas nunca cerraron sus ojos, por lo que vieron que nadie me tocó',
    type: 'Otro',
    reporterGender: 'Masculino',
    date: '09/08/2012',
    latitude: 3.4529202,
    longitude: -76.5336042,
    intensity: 8,
    verified: true
  },
  {
    id: '36',
    title: 'Presencia familiar',
    description: 'Estaba poniéndole flores a la tumba de mi tía fallecida dos años atrás y cuando estaba arreglando la tumba, me dí cuenta que las flores que le había puesto estaban muy feas. Quise mirar al frente que había un arbol gigante y de inmediato la vi a ella (mi tía) una silueta muy blanca como con luz, no mencionaba nada y me miraba fijamente',
    type: 'Aparicion',
    reporterGender: 'Masculino',
    date: '31/12/2016',
    latitude: 3.3730556,
    longitude: -76.5526249,
    intensity: 8,
    verified: true
  },
  {
    id: '37',
    title: 'Tv descompuesto',
    description: 'Me encienden el TV en diferentes sitios donde voy',
    type: 'Otro',
    reporterGender: 'Femenino',
    date: '10/12/2020',
    latitude: 3.318519,
    longitude: -76.538288,
    intensity: 8,
    verified: true
  },
  {
    id: '38',
    title: 'Jardin infantil',
    description: 'Estaba haciendo las horas de servicio social obligatorias para graduarme de el colegio. Era el año de 2014 y lo hice en un jardín del ICBF (jardín Ana María). Muchos de los niños eran hijos de mujeres vendedoras ambulantes o cabeza de hogar. Había una niña que se llamaba Laura Sofía y tenía unos 4 años. Hacía dibujos diabólicos y cuando era la hora de la siesta, empezaba a cantar en lenguas extrañas mientras los demás niños dormían. Las profesoras le tenían miedo por su comportamiento extraño y su forma de mirar a los ojos, ignorar las indicaciones y golpear a los otros niños. La niña no hablaba español, solo miraba a los demás de forma muy rara y cantaba durante la siesta en ese “idioma” que nadie entendía. Las melodías eran muy extrañas y las profesoras tuvieron que llevar un sacerdote. Sin embargo, creo que el problema era más psicológico que otra cosa.',
    type: 'Sonido',
    reporterGender: 'Femenino',
    date: '14/08/2014',
    latitude: 3.4718403,
    longitude: -76.5258371,
    intensity: 8,
    verified: true
  },
  {
    id: '39',
    title: 'Sombras en la casa',
    description: 'Sentir que detrás de mi esta una persona verlas pasar rápido',
    type: 'Aparicion',
    reporterGender: 'Femenino',
    date: '10/04/2025',
    latitude: 3.3852884,
    longitude: -76.5414583,
    intensity: 8,
    verified: true
  },
  {
    id: '40',
    title: 'Pasos detras de mi',
    description: 'Saliendo del trabajo sentía como si alguien me siguiera sentía los pasos atrás de mi mire hacia atrás no había nadie ',
    type: 'Sonido',
    reporterGender: 'Masculino',
    date: '10/04/2025',
    latitude: 3.3410977,
    longitude: -76.5266171,
    intensity: 8,
    verified: true
  },
  {
    id: '41',
    title: 'La llorona',
    description: 'Estaba caminando por mi barrio, cuando alguien gritó “la llorona” y salimos corriendo, posterior a eso, veo que tengo una raja en brazo y no me había golpeado con nada.',
    type: 'Agresion',
    reporterGender: 'Masculino',
    date: '19/02/2017',
    latitude: 3.392998,
    longitude: -76.6175538,
    intensity: 8,
    verified: true
  },
  {
    id: '42',
    title: 'Personas o espiritus',
    description: 'Detrás del conjunto donde vivo de noche se escuchan ruidos de gente caminando o haciendo cosas',
    type: 'Sonido',
    reporterGender: 'Masculino',
    date: '13/02/2025',
    latitude: 3.3767191,
    longitude: -76.5447569,
    intensity: 8,
    verified: true
  },
  {
    id: '43',
    title: 'Aparicion manejando',
    description: 'Iba manejando de camino a casa, y vi una silueta de una persona pasar la calle muy rápido por lo que me tocó frenar para ver si si era una persona o que había sido, pero al bajarme del carro me di cuenta que no había nada ni nadie cerca',
    type: 'Aparicion',
    reporterGender: 'Masculino',
    date: '25/02/2025',
    latitude: 3.369004,
    longitude: -76.5293458,
    intensity: 8,
    verified: true
  },
  {
    id: '44',
    title: 'Edificio Coltabaco',
    description: 'Se dice que en el edificio coltabaco, se escuchan golpes, se apagan y prenden las luces, entre otros.',
    type: 'Sonido',
    reporterGender: 'Femenino',
    date: '24/03/2025',
    latitude: 3.4534064,
    longitude: -76.5352001,
    intensity: 8,
    verified: true
  },
  {
    id: '45',
    title: 'Sueños pesados',
    description: 'Estaba durmiendo y sentí una sombra negra que trataba de ahogarme … nunca la vi … pero trataba de orar y no podía… los médicos indicaron que fue una fiebre de 40 ocasionó esto',
    type: 'Otro',
    reporterGender: 'Femenino',
    date: '24/03/2025',
    latitude: 3.428957,
    longitude: -76.532679,
    intensity: 8,
    verified: true
  },
  {
    id: '46',
    title: 'Niño llorando',
    description: 'Se escuchaba claramente el llanto de un niño, aunque no había nadie cerca. El sonido venía de un rincón oscuro de la casa, pero al revisar, no había nada. El llanto era constante, triste, y parecía moverse por el lugar. Fue real. Todos en la casa lo escuchamos',
    type: 'Sonido',
    reporterGender: 'Masculino',
    date: '20/06/2022',
    latitude: 3.3755592,
    longitude: -76.5208724,
    intensity: 8,
    verified: true
  },
  {
    id: '47',
    title: 'Aparicion Cercana',
    description: 'El abuelo de un amigo apareció en la ventana de su casa, en el tercer piso, juré que me estaba saludando desde allá',
    type: 'Aparicion',
    reporterGender: 'Masculino',
    date: '20/06/2017',
    latitude: 3.4603914,
    longitude: -76.5097257,
    intensity: 8,
    verified: true
  },
  {
    id: '48',
    title: 'Luz brillante',
    description: 'Me encontraba durmiendo cuando de repente sentí una luz muy fuerte, como si hubieran prendido la luz del cuarto, al momento de abrir mis ojos veo una persona parada a los pies de mi cama, era un mujer (no se me hacía familiar). Muy asustado comienzo a gritar y mis familiares debido a mis llamados abrieron la puerta de mi habitación. Justo antes de eso con una sonrisa en su expresión, el ente en forma de mujer se acerca lentamente a mi hasta cegarme prácticamente con la luz blanca que la rodeaba y desapareció.',
    type: 'Aparicion',
    reporterGender: 'Masculino',
    date: '14/07/2021',
    latitude: 3.3952327,
    longitude: -76.5367698,
    intensity: 8,
    verified: true
  },
  {
    id: '49',
    title: 'Cadenas en mi casa',
    description: 'En varias noches, se escuchaban cadenas arrastrándose por el piso de la casa. Nadie más vivía con nosotros y no había objetos que pudieran causar ese sonido. Era como si alguien invisible caminara con grilletes.',
    type: 'Sonido',
    reporterGender: 'Masculino',
    date: '22/10/2019',
    latitude: 3.3783469,
    longitude: -76.5260732,
    intensity: 8,
    verified: true
  },
  {
    id: '50',
    title: 'Duende',
    description: 'Todas las noches escucho canicas y silbidos afuera de mi casa, dicen que es un duende',
    type: 'Sonido',
    reporterGender: 'Masculino',
    date: '19/05/2025',
    latitude: 3.3870519,
    longitude: -76.541811,
    intensity: 8,
    verified: true
  },
  {
    id: '51',
    title: 'Cerro de las tres cruces',
    description: 'Subiendo al cerro de las tres cruces escuché un sonido extraño',
    type: 'Sonido',
    reporterGender: 'Masculino',
    date: '02/05/2021',
    latitude: 3.4678639,
    longitude: -76.5557777,
    intensity: 8,
    verified: true
  },
  {
    id: '52',
    title: 'Sombra detras de persiana',
    description: 'Vi una sombra detrás de una persiana en mi apartamento',
    type: 'Aparicion',
    reporterGender: 'Masculino',
    date: '19/03/2019',
    latitude: 3.403312,
    longitude: -76.5581355,
    intensity: 8,
    verified: true
  }
];
