export interface BenefitItem {
  title: string;
  description: string;
}

export interface TierItem {
  name: string;
  price: string;
  features: string[];
}

export interface FaqItem {
  q: string;
  a: string;
}

export const membershipData: Record<string, {
  benefits: BenefitItem[];
  tiers: TierItem[];
  howToJoin: { step: string; title: string; description: string }[];
  faq: FaqItem[];
}> = {
  es: {
    benefits: [
      { title: "Notificación Anticipada de Eventos", description: "Reciba información anticipada sobre seminarios, conferencias y eventos organizados por APC-ELI." },
      { title: "Eventos Gratuitos", description: "La mayoría de los eventos de APC-ELI ofrecen registro gratuito para sus miembros." },
      { title: "Participación y Voto", description: "Participe y vote en la Asamblea General Anual de la sección." },
      { title: "Representación Internacional", description: "Sea representado ante IATEFL y otros eventos de Asociaciones de Maestros de Inglés." },
      { title: "Becas y Cursos", description: "Postúlese para becas, seminarios y talleres de verano exclusivos para miembros." },
      { title: "Publicaciones y CV", description: "Obtenga publicaciones de APC-ELI y mencione su membresía en CVs, blogs y sitios web." }
    ],
    tiers: [
      { name: "Miembro Activo", price: "Consultar", features: ["Notificación de eventos", "Registro gratuito a eventos", "Derecho a voto en AGM", "Elegibilidad para becas IATEFL", "Publicaciones", "Membresía en CV y sitios web"] }
    ],
    howToJoin: [
      { step: "1", title: "Conozca los Beneficios", description: "Revise los beneficios de asociarse a APC-ELI y decida unirse a nuestra comunidad." },
      { step: "2", title: "Contacte a APC-ELI", description: "Escriba a apcelioficial@gmail.com para recibir información sobre el proceso de afiliación." },
      { step: "3", title: "Complete su Registro", description: "Llene su solicitud de membresía y comience a disfrutar de los beneficios." }
    ],
    faq: [
      { q: "¿Quién puede ser miembro de APC-ELI?", a: "Cualquier maestro o profesor de inglés en Cuba, miembro de la Asociación de Pedagogos de Cuba, puede asociarse a APC-ELI." },
      { q: "¿Qué beneficios tiene asociarse?", a: "Notificación anticipada de eventos, registro gratuito a la mayoría de actividades, derecho a voto, representación ante IATEFL, postulación a becas, y reconocimiento profesional." },
      { q: "¿Qué es IATEFL?", a: "Es la Asociación Internacional de Profesores de Inglés como Lengua Extranjera, que organiza una conferencia anual con más de 3,000 asistentes de 100+ países." },
      { q: "¿Cómo puedo representar a APC-ELI en IATEFL?", a: "Los miembros activos pueden postularse para representar a la sección en la conferencia anual de IATEFL." },
      { q: "¿Cómo contactar a APC-ELI?", a: "Puede escribirnos a apcelioficial@gmail.com o visitar nuestra sede en Avenida 41 no 3603 entre 43 y 45, Reparto Kolhy, La Habana, Cuba." }
    ]
  },
  en: {
    benefits: [
      { title: "Advance Notice of Events", description: "Receive early information about seminars, conferences, and events organized by APC-ELI." },
      { title: "Free Events", description: "Most APC-ELI events offer free registration for members." },
      { title: "Participation and Voting", description: "Participate and vote at the section's Annual General Meeting." },
      { title: "International Representation", description: "Be represented at IATEFL and other English Teacher Association events." },
      { title: "Scholarships and Courses", description: "Apply for scholarships, seminars, and summer workshops exclusive to members." },
      { title: "Publications and CV", description: "Receive APC-ELI publications and mention membership on CVs, blogs, and websites." }
    ],
    tiers: [
      { name: "Active Member", price: "Inquire", features: ["Event notifications", "Free event registration", "Voting rights at AGM", "IATEFL scholarship eligibility", "Publications", "Membership on CV and websites"] }
    ],
    howToJoin: [
      { step: "1", title: "Learn the Benefits", description: "Review the benefits of joining APC-ELI and decide to become part of our community." },
      { step: "2", title: "Contact APC-ELI", description: "Write to apcelioficial@gmail.com to receive information about the affiliation process." },
      { step: "3", title: "Complete Registration", description: "Fill out your membership application and start enjoying the benefits." }
    ],
    faq: [
      { q: "Who can become a member of APC-ELI?", a: "Any English teacher or professor in Cuba, member of the Association of Pedagogues of Cuba, can join APC-ELI." },
      { q: "What are the benefits of joining?", a: "Advance notice of events, free registration to most activities, voting rights, IATEFL representation, scholarship applications, and professional recognition." },
      { q: "What is IATEFL?", a: "It is the International Association of Teachers of English as a Foreign Language, organizing an annual conference with over 3,000 attendees from 100+ countries." },
      { q: "How can I represent APC-ELI at IATEFL?", a: "Active members can apply to represent the section at the IATEFL annual conference." },
      { q: "How to contact APC-ELI?", a: "You can write to us at apcelioficial@gmail.com or visit our office at Avenida 41 no 3603 between 43 and 45, Reparto Kolhy, Havana, Cuba." }
    ]
  }
};
