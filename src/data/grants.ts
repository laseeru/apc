export interface GrantProject {
  name: string;
  period: string;
  description: string;
  impact: string;
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

export const grantsData: Record<string, {
  projects: GrantProject[];
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
        impact: "Aprox. 130 profesores de EFL de zonas rurales y montañosas beneficiados"
      },
      {
        name: "PRELIM 1 y 2",
        period: "2019-2022",
        description: "Programa de apoyo del Reino Unido a profesores de inglés en el extranjero. El British Council en Cuba proporcionó los fondos de conectividad para los participantes de PRELIM.",
        impact: "Profesores de inglés en todo el país beneficiados con fondos de conectividad del British Council Cuba"
      }
    ],
    opportunities: [
      {
        name: "Beca IATEFL",
        amount: "Cobertura parcial o total",
        deadline: "Ver convocatoria",
        description: "Oportunidad de participar en la conferencia anual de IATEFL. Se priorizan candidatos de diferentes provincias."
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
      { title: "Webinars y Webcourses", date: "Durante todo el año", location: "Virtual", description: "Webinars y webcourses para profesores en ejercicio, trainees y estudiantes, facilitando la interacción con expertos internacionales." },
      { title: "Festival del Idioma Inglés", date: "Anual", location: "La Habana", description: "Festival anual con actividades culturales y académicas para celebrar el idioma inglés." },
      { title: "Concurso y Festivales Estudiantiles", date: "Durante el año", location: "Nacional", description: "Concursos y festivales para estudiantes, incluyendo actividades de desarrollo de habilidades del siglo XXI." }
    ],
    pastWorkshops: [
      { title: "Curso de Invierno", date: "Enero 2021", location: "Sede APC, La Habana", description: "Con la participación de Julia Simpks (Escocia) como tallerista invitada." },
      { title: "National ELT Colloquium", date: "2021", location: "Virtual", description: "Webinar con Ken Wilson como orador principal: 'Reducing fear, increasing confidence'." },
      { title: "English Language Festival", date: "Diciembre 2021", location: "Virtual", description: "Con Joan Cutting (Escocia) liderando una sesión sobre interculturalidad Escocia-Cuba." },
      { title: "Hands Up Project - Reading Webinar", date: "2021", location: "Virtual", description: "Susan Piper lideró sesiones de lectura para el programa de maestría de la Universidad Pedagógica Varona." }
    ]
  },
  en: {
    projects: [
      {
        name: "Hornby Trust Teacher Association Project Awards",
        period: "2019/20 & 2021/2022",
        description: "Training project for approximately 130 primary and secondary EFL teachers from rural and mountainous areas. Participants completed tasks through Telegram via synchronous and asynchronous sessions including voice chat, with a UK expert joining the training sessions.",
        impact: "Approx. 130 primary and secondary EFL teachers from rural and mountainous areas benefitted"
      },
      {
        name: "PRELIM 1 and 2",
        period: "2019-2022",
        description: "UK ELT supporting overseas English language teachers program. The British Council in Cuba kindly provided the connectivity funds for the PRELIM participants.",
        impact: "English teachers across the country benefitted with British Council Cuba connectivity funds"
      }
    ],
    opportunities: [
      {
        name: "IATEFL Scholarship",
        amount: "Partial or full coverage",
        deadline: "See call for applications",
        description: "Opportunity to participate in the annual IATEFL conference. Candidates from different provinces are prioritized."
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
      { title: "Webinars and Webcourses", date: "Year-round", location: "Virtual", description: "Webinars and webcourses for in-service teachers, trainees, and students, facilitating interaction with international experts." },
      { title: "English Language Festival", date: "Annual", location: "Havana", description: "Annual festival with cultural and academic activities to celebrate the English language." },
      { title: "Student Contests and Festivals", date: "Throughout the year", location: "National", description: "Contests and festivals for students, including 21st century skills development activities." }
    ],
    pastWorkshops: [
      { title: "Winter Course", date: "January 2021", location: "APC HQ, Havana", description: "With Julia Simpks (Scotland) as guest workshop leader." },
      { title: "National ELT Colloquium", date: "2021", location: "Virtual", description: "Webinar with Ken Wilson as keynote speaker: 'Reducing fear, increasing confidence'." },
      { title: "English Language Festival", date: "December 2021", location: "Virtual", description: "With Joan Cutting (Scotland) leading a session on Scotland-Cuba interculturality." },
      { title: "Hands Up Project - Reading Webinar", date: "2021", location: "Virtual", description: "Susan Piper led reading sessions for the Master's program at Universidad Pedagógica Varona." }
    ]
  }
};
