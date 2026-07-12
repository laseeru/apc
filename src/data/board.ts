export interface BoardMember {
  name: string;
  role: string;
  institution: string;
  bio: string;
}

export const boardData: Record<string, BoardMember[]> = {
  es: [
    {
      name: "E. Garbey Savigne, PhD",
      role: "Presidente / Coordinador Nacional",
      institution: "Universidad de Ciencias Médicas de La Habana",
      bio: "Coordinador Nacional de APC-ELI. Representó a la asociación en IATEFL 2019 en Liverpool, financiado por el British Council, el sindicato de maestros del Reino Unido y la contribución individual de Russell Stannard."
    },
    {
      name: "Isora Enríquez O'Farrill, PhD",
      role: "Oficial de Desarrollo Profesional e Investigación",
      institution: "Universidad Pedagógica Enrique J. Varona",
      bio: "Miembro del ejecutivo de APC-ELI. Representó a la asociación en la reunión de asociaciones en Lima, Perú junto al profesor Ildefonso Díaz Sandoval de la provincia Artemisa."
    },
    {
      name: "María de los Ángeles Reyes, MEd",
      role: "Oficial de Organización",
      institution: "Facultad de Ciencias Médicas Manuel Fajardo",
      bio: "Oficial de Organización, coordinadora de las actividades y eventos organizativos de APC-ELI."
    },
    {
      name: "Diana Rosa Morales, PhD",
      role: "Oficial de Conferencias y Eventos",
      institution: "UCLV Martha Abreu",
      bio: "Oficial de Conferencias y Eventos, coordinadora de las conferencias nacionales y eventos científicos de APC-ELI."
    },
    {
      name: "Ana Iris Testa González, MSc",
      role: "Oficial de Marketing Digital",
      institution: "Facultad de Ciencias Médicas Julio Trigo",
      bio: "Oficial de Marketing Digital, responsable de la comunicación digital y la promoción de las actividades de la sección."
    }
  ],
  en: [
    {
      name: "E. Garbey Savigne, PhD",
      role: "Chairperson / National Coordinator",
      institution: "Havana Medical University",
      bio: "National Coordinator of APC-ELI. Represented the association at IATEFL 2019 in Liverpool, funded by the British Council, the UK teachers' union, and individual contribution from Russell Stannard."
    },
    {
      name: "Isora Enríquez O'Farrill, PhD",
      role: "Professional Development and Research Officer",
      institution: "Enrique J. Varona Pedagogical University",
      bio: "Executive member of APC-ELI. Represented the association at the associations meeting in Lima, Peru alongside Professor Ildefonso Díaz Sandoval from Artemisa province."
    },
    {
      name: "María de los Ángeles Reyes, MEd",
      role: "Organizing Officer",
      institution: "Manuel Fajardo Medical School",
      bio: "Organizing Officer, coordinating the activities and organizational events of APC-ELI."
    },
    {
      name: "Diana Rosa Morales, PhD",
      role: "Conference and Events Officer",
      institution: "UCLV Martha Abreu",
      bio: "Conference and Events Officer, coordinator of national conferences and scientific events of APC-ELI."
    },
    {
      name: "Ana Iris Testa González, MSc",
      role: "Digital and Marketing Officer",
      institution: "Julio Trigo Medical School",
      bio: "Digital and Marketing Officer, responsible for digital communication and promotion of the section's activities."
    }
  ]
};
