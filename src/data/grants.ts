export interface GrantProject {
  name: string;
  period?: string;
  description: string;
  impact?: string;
  images?: { src: string; caption: string }[];
}

export interface GrantOpportunity {
  name: string;
  amount: string;
  deadline: string;
  description: string;
}

export interface WorkshopItem {
  title: string;
  date: string;
  location: string;
  description?: string;
}

export interface GrantWorkshop {
  title: string;
  partner: string;
}

export const supportedTeachers = [
  "Alfredo Camacho",
  "María de los Ángeles Reyes",
  "Heriberto García",
  "Raidel Hernández",
  "Liliana Casar",
  "Juan Carlos Izaguirre",
  "Juan Carlos Vega",
  "Santiago Rivera",
  "Eduardo Escalona",
  "Yasmani Camacho",
  "Lissette Rubio",
  "Isora Enríquez",
  "Ana Iris Testa",
  "Eduardo Garbey",
];

export const supportedTeacherPhotos = [
  "/images/iatefl/iatefl-01.jpg",
  "/images/iatefl/iatefl-02.jpg",
  "/images/iatefl/iatefl-03.jpg",
  "/images/iatefl/iatefl-04.jpg",
  "/images/iatefl/iatefl-06.jpg",
  "/images/iatefl/iatefl-07.jpg",
  "/images/iatefl/iatefl-08.jpg",
  "/images/iatefl/iatefl-09.jpg",
  "/images/iatefl/iatefl-10.jpg",
];

export const grantsData: Record<string, {
  projects: GrantProject[];
  grantWorkshops: GrantWorkshop[];
  booklets: { src: string; caption: string }[];
  opportunities: GrantOpportunity[];
  eligibility: string[];
  upcomingWorkshops: WorkshopItem[];
  pastWorkshops: WorkshopItem[];
}> = {
  es: {
    projects: [
      {
        name: "Hornby Trust Teacher Association Project Awards",
        period: "2019/20 & 2021/2022",
        description: "Proyecto de formación para aproximadamente 130 profesores de inglés de primaria y secundaria en zonas rurales y montañosas. Los participantes completaron las tareas a través de Telegram en sesiones sincrónicas y asincrónicas, incluyendo chat de voz, con la participación de un experto del Reino Unido.",
        impact: "Aprox. 130 profesores de EFL de zonas rurales y montañosas beneficiados",
        images: [
          { src: "/images/activities/leadership-management-1.jpg", caption: "Entrenamiento en Liderazgo y Dirección en La Habana" }
        ]
      },
      {
        name: "PRELIM 1, 2 y 3",
        description: "Como parte de los grants de la Hornby Educational Trust, con talleres de formación de profesores y la publicación de un libro de texto para niños de la enseñanza primaria. El British Council en Cuba proporcionó los fondos de conectividad para los participantes de PRELIM.",
        impact: "Talleres de formación de profesores y un libro de texto para la enseñanza primaria",
        images: [
          { src: "/images/grants/prelim-2.jpg", caption: "PRELIM 2, con la Universidad de Sheffield" },
          { src: "/images/grants/prelim-online-session.jpg", caption: "Sesión en línea de PRELIM" },
          { src: "/images/grants/lets-play-and-learn-english.jpg", caption: "Libro de texto 'Let's Play and Learn English'" }
        ]
      },
      {
        name: "Grant de IATEFL: Proyecto comunitario Kinship",
        description: "Otro grant, en esta ocasión de IATEFL, para el proyecto comunitario Kinship. Se publicó un folleto para el proyecto y se recolectaron materiales educativos para los niños.",
        images: [
          { src: "/images/grants/kinship-children-1.jpg", caption: "Niños del proyecto comunitario Kinship" },
          { src: "/images/grants/kinship-booklet.jpg", caption: "Folleto publicado para el proyecto comunitario Kinship" },
          { src: "/images/grants/kinship-materials.jpg", caption: "Materiales educativos recolectados para el proyecto" }
        ]
      },
      {
        name: "Grant Roger Bowers",
        description: "Taller de desarrollo profesional celebrado en Santiago de Cuba como parte del grant Roger Bowers.",
        images: [
          { src: "/images/activities/roger-bowers-santiago-1.jpg", caption: "Taller en Santiago de Cuba" }
        ]
      }
    ],
    grantWorkshops: [
      { title: "Prelim 1", partner: "International House Bristol" },
      { title: "Prelim 2", partner: "Universidad de Sheffield" },
      { title: "Prelim 3", partner: "LILA college" },
      { title: "Roger Bowers", partner: "Celebrado en Santiago de Cuba" },
      { title: "Taller de Liderazgo y Dirección", partner: "Hornby Educational Trust" }
    ],
    booklets: [
      { src: "/images/grants/booklets.jpg", caption: "Folletos producidos como parte de los grants recibidos" },
      { src: "/images/grants/grant-booklets.jpg", caption: "Folletos producidos como parte de los grants recibidos" },
      { src: "/images/grants/lets-play-and-learn-english.jpg", caption: "Let's Play and Learn English" }
    ],
    opportunities: [
      {
        name: "Beca IATEFL",
        amount: "Cobertura parcial o total",
        deadline: "Ver convocatoria",
        description: "Los miembros activos pueden ser seleccionados y apoyados para representar a los profesores en diversos eventos, incluyendo la conferencia anual de IATEFL. Se priorizan candidatos de diferentes provincias."
      },
      {
        name: "Curso de Invierno",
        amount: "Gratuito para miembros",
        deadline: "Anualmente en enero",
        description: "Curso de desarrollo profesional organizado en colaboración con el British Council y talleristas internacionales."
      }
    ],
    eligibility: [
      "Miembro activo de APC-ELI al corriente con sus obligaciones",
      "Afiliado a una institución educativa cubana",
      "Interés en el desarrollo profesional y la colaboración internacional",
      "Se consideran candidatos de todas las provincias"
    ],
    upcomingWorkshops: [
      { title: "El Mes Naranja", date: "Noviembre 2026", location: "En línea / Presencial", description: "Actividades para estudiantes y profesores." },
      { title: "6ta Conferencia en Línea de Asociados de TESOL Spain", date: "27–28 de noviembre de 2026", location: "Zoom", description: "'Shared Visions, Singular Voices'. TESOL Spain, asociación hermana de APC-ELI, ha invitado a nuestra asociación a participar." },
      { title: "British Week en Cuba", date: "Diciembre 2026", location: "Presencial, centros seleccionados", description: "Actividades abiertas al público general en centros seleccionados." },
      { title: "8va Conferencia Nacional de APC-ELI", date: "10–11 de diciembre de 2026", location: "Híbrida, varias sedes", description: "Para profesores y estudiantes de pregrado de inglés, con 101 ponencias presenciales y en línea." }
    ],
    pastWorkshops: [
      { title: "Taller científico-metodológico: Identidad e Interculturalidad", date: "22 de octubre de 2026", location: "Google Meet", description: "El Prof. Rob Williams compartió sus puntos de vista sobre el tema y respondió preguntas de los participantes." },
      { title: "Taller English for Development", date: "Septiembre 2026", location: "Matanzas", description: "Segunda fase del programa Inglés para el Desarrollo, promovido por los ministerios de educación cubanos con el apoyo del British Council y financiamiento del Reino de los Países Bajos." },
      { title: "Taller de actualización del Proyecto #InglésParaElDesarrollo", date: "Julio 2026", location: "Matanzas", description: "Desarrollado y patrocinado por el British Council." },
      { title: "El Mes Verde: Día Mundial del Medio Ambiente", date: "Junio 2026", location: "La Habana y provincias", description: "Actividades lideradas por APC-ELI a solicitud del British Council Cuba." },
      { title: "Curso de Invierno", date: "Enero 2021", location: "Sede APC, La Habana", description: "Con la participación de Julia Simpkins (Escocia) como tallerista invitada." },
      { title: "National ELT Colloquium", date: "2021", location: "Virtual", description: "Webinar con Ken Wilson como orador principal: 'Reducing fear, increasing confidence'." },
      { title: "English Language Festival", date: "Diciembre 2021", location: "Virtual", description: "Con Joan Cutting (Escocia) liderando una sesión sobre interculturalidad Escocia-Cuba." },
      { title: "Hands Up Project - Reading Webinar", date: "2021", location: "Virtual", description: "Sue Piper lideró sesiones de lectura para el programa de maestría de la Universidad Pedagógica Varona." }
    ]
  },
  en: {
    projects: [
      {
        name: "Hornby Trust Teacher Association Project Awards",
        period: "2019/20 & 2021/2022",
        description: "Training project for approximately 130 primary and secondary EFL teachers from rural and mountainous areas. Participants completed tasks through Telegram via synchronous and asynchronous sessions including voice chat, with a UK expert joining the training sessions.",
        impact: "Approx. 130 primary and secondary EFL teachers from rural and mountainous areas benefitted",
        images: [
          { src: "/images/activities/leadership-management-1.jpg", caption: "Leadership and Management training in Havana" }
        ]
      },
      {
        name: "PRELIM 1, 2 and 3",
        description: "Part of the Hornby Educational Trust grants, with teacher training workshops and the publication of a textbook for primary school children. The British Council in Cuba kindly provided the connectivity funds for the PRELIM participants.",
        impact: "Teacher training workshops and a primary school textbook",
        images: [
          { src: "/images/grants/prelim-2.jpg", caption: "PRELIM 2, with the University of Sheffield" },
          { src: "/images/grants/prelim-online-session.jpg", caption: "PRELIM online session" },
          { src: "/images/grants/lets-play-and-learn-english.jpg", caption: "'Let's Play and Learn English' textbook" }
        ]
      },
      {
        name: "IATEFL Grant: Kinship Community Project",
        description: "Another grant, on this occasion from IATEFL, for the Kinship community project. A booklet was published for the project and educational materials were collected for the children.",
        images: [
          { src: "/images/grants/kinship-children-1.jpg", caption: "Children at the Kinship community project" },
          { src: "/images/grants/kinship-booklet.jpg", caption: "Booklet published for the Kinship community project" },
          { src: "/images/grants/kinship-materials.jpg", caption: "Educational materials collected for the project" }
        ]
      },
      {
        name: "Roger Bowers Grant",
        description: "A professional development workshop held in Santiago de Cuba as part of the Roger Bowers grant.",
        images: [
          { src: "/images/activities/roger-bowers-santiago-1.jpg", caption: "A workshop in Santiago de Cuba" }
        ]
      }
    ],
    grantWorkshops: [
      { title: "Prelim 1", partner: "International House Bristol" },
      { title: "Prelim 2", partner: "University of Sheffield" },
      { title: "Prelim 3", partner: "LILA college" },
      { title: "Roger Bowers", partner: "Held in Santiago de Cuba" },
      { title: "Leadership and Management workshop", partner: "Hornby Educational Trust" }
    ],
    booklets: [
      { src: "/images/grants/booklets.jpg", caption: "Booklets produced as part of the grants received" },
      { src: "/images/grants/grant-booklets.jpg", caption: "Booklets produced as part of the grants received" },
      { src: "/images/grants/lets-play-and-learn-english.jpg", caption: "Let's Play and Learn English" }
    ],
    opportunities: [
      {
        name: "IATEFL Scholarship",
        amount: "Partial or full coverage",
        deadline: "See call for applications",
        description: "Active members can be selected and supported to represent teachers at several events, including the IATEFL annual conference. Candidates from different provinces are prioritized."
      },
      {
        name: "Winter Course",
        amount: "Free for members",
        deadline: "Annually in January",
        description: "Professional development course organized in collaboration with the British Council and international workshop leaders."
      }
    ],
    eligibility: [
      "Current APC-ELI member in good standing",
      "Affiliated with a Cuban educational institution",
      "Interest in professional development and international collaboration",
      "Candidates from all provinces are considered"
    ],
    upcomingWorkshops: [
      { title: "The Orange Month", date: "November 2026", location: "Online / In person", description: "Activities for students and teachers." },
      { title: "6th TESOL Spain Associates Online Conference", date: "November 27–28, 2026", location: "Zoom", description: "'Shared Visions, Singular Voices'. TESOL Spain, APC-ELI's partner teachers' association, has invited our association to take part." },
      { title: "British Week in Cuba", date: "December 2026", location: "In person, selected centers", description: "Activities open to the general public at selected centers." },
      { title: "8th APC-ELI National Conference", date: "December 10–11, 2026", location: "Hybrid, multiple venues", description: "For teachers and EFL undergraduates, with 101 in-person and online presentations." }
    ],
    pastWorkshops: [
      { title: "Scientific and Methodological workshop: Identity and Interculturality", date: "October 22, 2026", location: "Google Meet", description: "Prof. Rob Williams shared his views on the topic and answered questions from the participants." },
      { title: "English for Development workshop", date: "September 2026", location: "Matanzas", description: "Second phase of the English for Development programme, promoted by the Cuban ministries of Education with the support of the British Council and funding from the Kingdom of the Netherlands." },
      { title: "#InglésParaElDesarrollo update workshop", date: "July 2026", location: "Matanzas", description: "Developed and fully sponsored by the British Council." },
      { title: "The Green Month: World Environment Day", date: "June 2026", location: "Havana and provinces", description: "Activities led by APC-ELI at the request of the British Council Cuba." },
      { title: "Winter Course", date: "January 2021", location: "APC HQ, Havana", description: "With Julia Simpkins (Scotland) as guest workshop leader." },
      { title: "National ELT Colloquium", date: "2021", location: "Virtual", description: "Webinar with Ken Wilson as keynote speaker: 'Reducing fear, increasing confidence'." },
      { title: "English Language Festival", date: "December 2021", location: "Virtual", description: "With Joan Cutting (Scotland) leading a session on Scotland-Cuba interculturality." },
      { title: "Hands Up Project - Reading Webinar", date: "2021", location: "Virtual", description: "Sue Piper led reading sessions for the Master's program at Universidad Pedagógica Varona." }
    ]
  }
};
