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
      { title: "Información Anticipada", description: "Ser los primeros en enterarse acerca de los seminarios, conferencias y eventos organizados por APC-ELI." },
      { title: "Buena Inversión", description: "Buena inversión por lo que se obtiene a cambio del pago de membresía: la mayoría de los eventos de APC-ELI son sin pago para los miembros." },
      { title: "Grupos de Interés Especial", description: "Participar en los grupos de interés especial y comunidades de prácticas de APC-ELI." },
      { title: "Representación Internacional", description: "Ser representado y representar a la APC-ELI ante IATEFL y otros eventos de otras Asociaciones de Maestros de Inglés." },
      { title: "Becas y Talleres", description: "Postularse para becas, seminarios y talleres de invierno." },
      { title: "Eventos, Cursos y Servicios", description: "Ser considerados para diversos eventos, cursos y servicios." },
      { title: "Publicaciones", description: "Obtener publicaciones de APC-ELI y que su trabajo profesional sea publicitado." },
      { title: "Reconocimiento Profesional", description: "Hacer mención de su membresía en blogs, sitios web y CVs para acreditar su status profesional, así como también postularse a trabajos y becas." }
    ],
    tiers: [
      { name: "Miembro Activo", price: "Consultar", features: ["Notificación de eventos", "Registro gratuito a eventos locales", "Derecho a voto en AGM", "Elegibilidad para becas IATEFL", "Publicaciones", "Membresía en CV y sitios web"] }
    ],
    howToJoin: [
      { step: "1", title: "Conozca los Beneficios", description: "Revise los beneficios de asociarse a APC-ELI y decida unirse a nuestra comunidad." },
      { step: "2", title: "Contacte a APC-ELI", description: "Escriba a apcelioficial@gmail.com para recibir información sobre el proceso de afiliación." },
      { step: "3", title: "Complete su Registro", description: "Llene su solicitud de membresía y comience a disfrutar de los beneficios." }
    ],
    faq: [
      { q: "¿Quién puede ser miembro de APC-ELI?", a: "Cualquier maestro o profesor de inglés en Cuba, miembro de la Asociación de Pedagogos de Cuba, puede asociarse a APC-ELI." },
      { q: "¿Qué beneficios tiene asociarse?", a: "Información anticipada de eventos, registro gratuito a la mayoría de los eventos, grupos de interés especial, representación ante IATEFL, postulación a becas, publicaciones y reconocimiento profesional." },
      { q: "¿Qué es IATEFL?", a: "Es la Asociación Internacional de Profesores de Inglés como Lengua Extranjera, que organiza una conferencia anual con más de 3,000 asistentes de 100+ países." },
      { q: "¿Cómo puedo representar a APC-ELI en IATEFL?", a: "Los miembros activos pueden ser seleccionados y apoyados para representar a los profesores en diversos eventos, incluyendo la conferencia anual de IATEFL. Vea en la página de Becas y Talleres algunos de los profesores que APC-ELI ha apoyado." },
      { q: "¿Cómo contactar a APC-ELI?", a: "Puede escribirnos a apcelioficial@gmail.com o visitar nuestra sede en Avenida 41 no 3603 entre 43 y 45, Reparto Kolhy, La Habana, Cuba." }
    ]
  },
  en: {
    benefits: [
      { title: "Advance Notice", description: "Get advance notice of the seminars, conferences and events organized by APC-ELI." },
      { title: "Good Value for Money", description: "Good value for money when becoming a member as most APC-ELI events offer free registration to its members." },
      { title: "Special Interest Groups", description: "Participate in the APC-ELI Special Interest Groups and the communities of practice." },
      { title: "International Representation", description: "Be represented by APC-ELI and represent it at IATEFL conferences and other Teachers' Associations events." },
      { title: "Scholarships and Workshops", description: "Present their proposals for scholarships, seminars and winter workshops." },
      { title: "Events, Courses and Services", description: "Be considered for various events, courses and services." },
      { title: "Publications", description: "Get publications produced or downloaded by APC-ELI and have your professional career published." },
      { title: "Professional Recognition", description: "Mention membership in their blogs, sites and CVs as proof of their professional status, and then apply for jobs and scholarships." }
    ],
    tiers: [
      { name: "Active Member", price: "Inquire", features: ["Event notifications", "Free local events registration", "Voting rights at AGM", "IATEFL scholarship eligibility", "Publications", "Membership on CV and websites"] }
    ],
    howToJoin: [
      { step: "1", title: "Learn the Benefits", description: "Review the benefits of joining APC-ELI and decide to become part of our community." },
      { step: "2", title: "Contact APC-ELI", description: "Write to apcelioficial@gmail.com to receive information about the affiliation process." },
      { step: "3", title: "Complete Registration", description: "Fill out your membership application and start enjoying the benefits." }
    ],
    faq: [
      { q: "Who can become a member of APC-ELI?", a: "Any English teacher or professor in Cuba, member of the Association of Pedagogues of Cuba, can join APC-ELI." },
      { q: "What are the benefits of joining?", a: "Advance notice of events, free registration to most events, special interest groups, IATEFL representation, scholarship applications, publications, and professional recognition." },
      { q: "What is IATEFL?", a: "It is the International Association of Teachers of English as a Foreign Language, organizing an annual conference with over 3,000 attendees from 100+ countries." },
      { q: "How can I represent APC-ELI at IATEFL?", a: "Active members can be selected and supported to represent teachers at several events, including the IATEFL annual conference. See the Grants & Workshops page for some of the teachers APC-ELI has supported." },
      { q: "How to contact APC-ELI?", a: "You can write to us at apcelioficial@gmail.com or visit our office at Avenida 41 no 3603 between 43 and 45, Reparto Kolhy, Havana, Cuba." }
    ]
  }
};
