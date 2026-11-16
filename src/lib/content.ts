export type Locale = "es" | "en";
export type PageKey =
  | "home"
  | "firm"
  | "solutions"
  | "advisory"
  | "industries"
  | "contact"
  | "privacy"
  | "terms"
  | "disclaimer";

type Section = {
  title: string;
  body: string;
  bullets?: string[];
};

type PageCopy = {
  slug: string;
  title: string;
  eyebrow: string;
  intro: string;
  sections: Section[];
};

export const SITE_URL = "https://westernsouthinvestco.com";
export const CONTACT_EMAIL = "contact@westernsouthinvestco.com";
export const PHONE_NUMBERS = ["+51 974 245 051", "+51 993 671 253"];

export const navigation: Record<Locale, { key: PageKey; label: string }[]> = {
  es: [
    { key: "firm", label: "Nuestra firma" },
    { key: "solutions", label: "Soluciones" },
    { key: "advisory", label: "Asesoría patrimonial" },
    { key: "industries", label: "Industrias" },
    { key: "contact", label: "Contacto" },
  ],
  en: [
    { key: "firm", label: "Our Firm" },
    { key: "solutions", label: "Investment Solutions" },
    { key: "advisory", label: "Advisory & Wealth" },
    { key: "industries", label: "Industries" },
    { key: "contact", label: "Contact" },
  ],
};

export const ui = {
  es: {
    name: "Westernsouth Investment & Co.",
    home: "Inicio",
    explore: "Explorar soluciones",
    about: "Conocer nuestra firma",
    contact: "Contacto institucional",
    contactUs: "Conversemos",
    overview: "Una firma independiente, una visión de largo plazo",
    overviewBody:
      "Conectamos capital, conocimiento y oportunidades a través de inversión, financiamiento privado y asesoría financiera. Cada mandato se aborda con criterio independiente, análisis riguroso y una comprensión cercana de sus objetivos.",
    capabilities: "Capacidades de inversión",
    capabilitiesIntro:
      "Estructuramos soluciones de capital de acuerdo con la etapa, los activos y las necesidades de cada empresa.",
    philosophy: "Disciplina en cada decisión",
    philosophyIntro:
      "La flexibilidad financiera no significa menor rigor. Significa diseñar estructuras adecuadas a la realidad de cada empresa, evaluando riesgos, garantías y capacidad de generación de flujos.",
    industries: "Experiencia multisectorial",
    industriesIntro:
      "Nuestra actividad de inversión actual abarca industrias esenciales de la economía peruana y latinoamericana.",
    currentInvestments: "Inversiones actuales",
    sectorsOfInterest: "Sectores de interés",
    advisory: "Asesoría corporativa y patrimonial",
    advisoryIntro:
      "Acompañamos decisiones financieras y patrimoniales con discreción, perspectiva integral y atención personalizada.",
    regionalVision: "Perspectiva latinoamericana",
    regionalVisionBody:
      "Desde Lima, trabajamos con una mirada regional y de largo plazo. Aspiramos a contribuir al desarrollo de alternativas de financiamiento e inversión en América Latina.",
    institutionalAccess: "Un punto de contacto para cada necesidad",
    corporate: "Empresas e instituciones",
    investor: "Oportunidades de inversión",
    privateWealth: "Asesoría patrimonial",
    learnMore: "Conocer más",
    readMore: "Explorar",
    sendMessage: "Enviar consulta",
    legal: "Información legal",
    privacy: "Aviso de privacidad",
    terms: "Términos de uso",
    disclaimer: "Aviso legal",
    footerNote:
      "La información de este sitio tiene fines informativos y no constituye una oferta pública de valores ni una recomendación de inversión.",
    location: "Lima, Perú",
    values: [
      "Preservación del capital",
      "Gestión integral del riesgo",
      "Disciplina financiera",
      "Protección de activos",
      "Creación de valor de largo plazo",
    ],
    heroLabel: "Inversión · Financiamiento privado · Asesoría",
    aumLabel: "Assets Under Management",
  },
  en: {
    name: "Westernsouth Investment & Co.",
    home: "Home",
    explore: "Explore solutions",
    about: "Discover our firm",
    contact: "Institutional contact",
    contactUs: "Start a conversation",
    overview: "An independent firm. A long-term perspective.",
    overviewBody:
      "We connect capital, expertise and opportunity through investment, private financing and financial advisory. Every mandate is approached with independent judgment, rigorous analysis and a close understanding of client objectives.",
    capabilities: "Investment capabilities",
    capabilitiesIntro:
      "We structure capital solutions around each company's stage, assets and financing needs.",
    philosophy: "Discipline in every decision",
    philosophyIntro:
      "Financial flexibility does not mean less rigor. It means designing structures suited to each company's circumstances, with careful assessment of risk, collateral and cash-flow capacity.",
    industries: "Multisector perspective",
    industriesIntro:
      "Our current investment activity spans essential industries across Peru and Latin America.",
    currentInvestments: "Current investments",
    sectorsOfInterest: "Sectors of interest",
    advisory: "Corporate advisory & private wealth",
    advisoryIntro:
      "We support financial and wealth decisions with discretion, an integrated perspective and personalized attention.",
    regionalVision: "A Latin American perspective",
    regionalVisionBody:
      "Based in Lima, we take a regional, long-term view. We aspire to contribute to the development of financing and investment alternatives across Latin America.",
    institutionalAccess: "A dedicated point of contact",
    corporate: "Companies & institutions",
    investor: "Investment opportunities",
    privateWealth: "Private wealth advisory",
    learnMore: "Learn more",
    readMore: "Explore",
    sendMessage: "Send an enquiry",
    legal: "Legal information",
    privacy: "Privacy notice",
    terms: "Terms of use",
    disclaimer: "Legal disclaimer",
    footerNote:
      "This website is for informational purposes only and does not constitute a public offering of securities or investment advice.",
    location: "Lima, Peru",
    values: [
      "Capital preservation",
      "Comprehensive risk management",
      "Financial discipline",
      "Asset protection",
      "Long-term value creation",
    ],
    heroLabel: "Investment · Private financing · Advisory",
    aumLabel: "Assets Under Management",
  },
} satisfies Record<Locale, Record<string, string | string[]>>;

export const pages: Record<Locale, Record<Exclude<PageKey, "home">, PageCopy>> = {
  es: {
    firm: {
      slug: "nuestra-firma",
      title: "Capital con criterio. Relaciones de largo plazo.",
      eyebrow: "Nuestra firma",
      intro:
        "Westernsouth Investment & Co. es una firma independiente de inversión y estructuración financiera con US$200 millones en activos bajo gestión. Nuestra actividad se concentra en la asignación de capital, la estructuración de inversiones, el financiamiento privado y el desarrollo de soluciones adaptadas a empresas e inversionistas.",
      sections: [
        {
          title: "Misión",
          body: "Ampliar el acceso al capital mediante soluciones financieras flexibles, rigurosamente estructuradas y respaldadas por una gestión disciplinada del riesgo, contribuyendo al crecimiento de empresas con potencial de desarrollo.",
        },
        {
          title: "Visión",
          body: "Consolidarnos como una firma de inversión de referencia en América Latina, contribuyendo al fortalecimiento de los mercados de capitales y a la expansión de alternativas de financiamiento e inversión.",
        },
        {
          title: "Filosofía de inversión",
          body: "La flexibilidad financiera no significa menor rigor. Diseñamos estructuras de capital adecuadas a la realidad de cada empresa, evaluando riesgos, garantías y capacidad de generación de flujos.",
          bullets: [
            "Asignación disciplinada de capital",
            "Debida diligencia integral",
            "Decisiones ajustadas al riesgo",
            "Protección frente a escenarios adversos",
            "Relaciones de largo plazo",
            "Transparencia y responsabilidad",
          ],
        },
        {
          title: "Perspectiva de largo plazo",
          body: "Westernsouth aspira a ampliar su participación en los mercados de capitales latinoamericanos y, en el futuro, desarrollar plataformas y vehículos de inversión regulados. Estas iniciativas son objetivos futuros; no representan licencias o vehículos actualmente existentes.",
        },
      ],
    },
    solutions: {
      slug: "soluciones",
      title: "Soluciones de capital para necesidades complejas.",
      eyebrow: "Investment Solutions",
      intro:
        "Combinamos inversión, crédito privado y estructuración a medida para responder a necesidades empresariales diversas. Cada alternativa está sujeta a evaluación, debida diligencia y aprobación específica; no existen aprobaciones automáticas ni condiciones generales garantizadas.",
      sections: [
        {
          title: "Investment Banking & Private Equity",
          body: "Participación en estructuras accionarias y desarrollo de soluciones de inversión mediante instrumentos de equity y capital híbrido.",
          bullets: [
            "Inversiones de capital y growth equity",
            "Inversiones corporativas",
            "Financiamiento para adquisiciones",
            "Estructuración de capital",
            "Transacciones de inversión estratégica",
          ],
        },
        {
          title: "Private Credit",
          body: "Financiamiento privado de mediano y largo plazo para empresas con necesidades de crecimiento, expansión, capital productivo o estructuras especiales.",
          bullets: [
            "Préstamos directos y deuda senior garantizada",
            "Financiamiento de mediano y largo plazo",
            "Financiamiento para crecimiento",
            "Deuda privada estructurada",
          ],
        },
        {
          title: "Asset-Backed Lending",
          body: "Soluciones de crédito respaldadas por activos y garantías reales. La existencia de una garantía no implica aprobación automática ni elimina el análisis de capacidad de pago.",
          bullets: [
            "Valorización de activos y análisis de garantías",
            "Debida diligencia legal",
            "Estructuración del financiamiento",
            "Evaluación de capacidad de pago",
          ],
        },
        {
          title: "Tailor-Made Financial Structures",
          body: "Soluciones financieras a medida para empresas con estructuras corporativas, patrimoniales o de financiamiento complejas.",
          bullets: [
            "Finanzas estructuradas",
            "Estructuras híbridas de deuda y capital",
            "Financiamiento a medida",
            "Estructuración de transacciones y activos",
          ],
        },
      ],
    },
    advisory: {
      slug: "asesoria-patrimonial",
      title: "Asesoría con perspectiva integral y discreción.",
      eyebrow: "Advisory & Wealth Management",
      intro:
        "Acompañamos a empresas, inversionistas y familias en decisiones financieras relevantes, con atención personalizada y un enfoque cuidadoso del riesgo. Los servicios no implican garantía de rentabilidad ni protección absoluta frente a pérdidas.",
      sections: [
        {
          title: "Asesoría corporativa",
          body: "Apoyamos a las empresas en la evaluación de alternativas financieras y decisiones estratégicas de capital.",
          bullets: [
            "Asesoría financiera",
            "Valorización de negocios",
            "Estructuración financiera",
            "Consultoría en finanzas corporativas",
          ],
        },
        {
          title: "Private Wealth",
          body: "Diseñamos conversaciones y estrategias patrimoniales personalizadas, con discreción, análisis y una visión de largo plazo.",
          bullets: [
            "Construcción de portafolios de inversión",
            "Estrategias de renta fija y renta variable",
            "Planificación patrimonial y sucesoria",
            "Estructuración de patrimonios",
            "Planificación intergeneracional",
          ],
        },
        {
          title: "Segmentos de referencia",
          body: "Los siguientes importes son umbrales orientativos para conversar sobre el alcance de cada servicio. No garantizan aceptación ni constituyen mínimos regulatorios.",
          bullets: [
            "Construcción de portafolios: desde US$250,000",
            "Sucesiones patrimoniales: desde US$1,000,000",
            "Estructuras hereditarias: desde US$5,000,000",
          ],
        },
      ],
    },
    industries: {
      slug: "industrias",
      title: "Capital y conocimiento en industrias esenciales.",
      eyebrow: "Industrias",
      intro:
        "Nuestra actividad de inversión actual abarca cuatro sectores. Las descripciones presentan áreas generales de actividad y no identifican empresas, activos, proyectos ni participaciones de portafolio.",
      sections: [
        {
          title: "Minería",
          body: "Evaluamos oportunidades relacionadas con activos, servicios y necesidades de capital a lo largo de la cadena minera.",
        },
        {
          title: "Petróleo y gas",
          body: "Consideramos necesidades de financiamiento y oportunidades vinculadas a infraestructura, servicios y activos del sector.",
        },
        {
          title: "Inmobiliario",
          body: "Analizamos oportunidades de inversión, financiamiento y estructuras respaldadas por activos inmobiliarios.",
        },
        {
          title: "Pesca",
          body: "Observamos necesidades de capital productivo y oportunidades de financiamiento en actividades pesqueras e industriales.",
        },
        {
          title: "Otros sectores de interés",
          body: "También nos interesan oportunidades en infraestructura, manufactura, textiles y bienes de consumo. El interés sectorial no implica inversiones actuales.",
        },
      ],
    },
    contact: {
      slug: "contacto",
      title: "Iniciemos una conversación.",
      eyebrow: "Contacto institucional",
      intro:
        "Comparta brevemente el propósito de su consulta. Nuestro equipo revisará su mensaje y, si corresponde, se pondrá en contacto. No envíe información confidencial, documentos de identidad ni datos financieros sensibles mediante este formulario.",
      sections: [],
    },
    privacy: {
      slug: "privacidad",
      title: "Aviso de privacidad",
      eyebrow: "Borrador para revisión jurídica",
      intro:
        "Este texto es un borrador informativo y debe ser revisado y completado por asesoría legal antes de su publicación.",
      sections: [
        {
          title: "Información que recibimos",
          body: "Si utiliza el formulario, recibimos los datos que usted proporciona, como nombre, correo electrónico, empresa, teléfono, tipo de consulta y mensaje. No solicitamos datos financieros sensibles ni documentos de identidad.",
        },
        {
          title: "Uso y comunicaciones",
          body: "La información se utiliza para responder consultas institucionales y dar seguimiento a comunicaciones iniciadas por usted. El formulario transmite los datos al proveedor de correo configurado por Westernsouth para su entrega al correo institucional.",
        },
        {
          title: "Conservación, derechos y contacto",
          body: "Antes de publicar, Westernsouth debe definir los plazos de conservación, los procedimientos para atender derechos de titulares, las medidas de seguridad y los datos de identificación y contacto del responsable del tratamiento, conforme a las normas aplicables.",
        },
      ],
    },
    terms: {
      slug: "terminos-de-uso",
      title: "Términos de uso",
      eyebrow: "Borrador para revisión jurídica",
      intro:
        "Este borrador requiere revisión jurídica y adaptación antes de su publicación. El acceso al sitio implica el uso de información general, no la contratación de un servicio.",
      sections: [
        {
          title: "Contenido informativo",
          body: "El contenido se ofrece con fines informativos generales y puede cambiar sin previo aviso. No constituye asesoría financiera, legal, tributaria o de inversión ni una oferta o invitación para comprar o vender valores.",
        },
        {
          title: "Uso del sitio",
          body: "El usuario debe utilizar el sitio de forma lícita y no intentar interferir con su disponibilidad, seguridad o funcionamiento. Los contenidos y marcas pertenecen a sus respectivos titulares y no pueden reutilizarse sin autorización.",
        },
        {
          title: "Alcance y revisión",
          body: "Las decisiones deben basarse en asesoría independiente y documentación definitiva. Este texto no limita derechos irrenunciables y debe completarse con las condiciones legales aplicables a la operación del sitio.",
        },
      ],
    },
    disclaimer: {
      slug: "aviso-legal",
      title: "Aviso legal",
      eyebrow: "Borrador para revisión jurídica",
      intro:
        "La información de este sitio se dirige a fines institucionales y generales. El texto es un borrador que requiere revisión jurídica antes de publicarse.",
      sections: [
        {
          title: "Sin oferta ni recomendación",
          body: "Ninguna sección de este sitio constituye una oferta pública de valores, una solicitud de inversión, una recomendación personalizada ni una oferta vinculante de financiamiento. El envío de una consulta no crea una relación contractual.",
        },
        {
          title: "Riesgos y resultados",
          body: "Toda inversión y financiamiento está sujeto a riesgos. No se garantiza rentabilidad, aprobación crediticia, liquidez, preservación del capital ni ausencia de pérdidas. Las cifras y descripciones deben confirmarse antes de tomar decisiones.",
        },
        {
          title: "Información corporativa",
          body: "Westernsouth Investment & Co. se presenta como firma independiente de inversión y estructuración financiera. Este sitio no afirma que sea un banco, una SAFI autorizada o una entidad supervisada por un regulador específico.",
        },
      ],
    },
  },
  en: {
    firm: {
      slug: "our-firm",
      title: "Capital with purpose. Relationships built for the long term.",
      eyebrow: "Our Firm",
      intro:
        "Westernsouth Investment & Co. is an independent investment and financial structuring firm with US$200 million in assets under management. Our work focuses on capital allocation, investment structuring, private financing and tailored financial solutions for companies and investors.",
      sections: [
        {
          title: "Mission",
          body: "Broaden access to capital through flexible, rigorously structured financial solutions supported by disciplined risk management, contributing to the growth of businesses with development potential.",
        },
        {
          title: "Vision",
          body: "Become a recognized investment firm in Latin America, contributing to stronger capital markets and a wider range of financing and investment alternatives.",
        },
        {
          title: "Investment philosophy",
          body: "Financial flexibility does not mean less rigor. We design capital structures around each company's circumstances, assessing risk, collateral and cash-flow capacity.",
          bullets: [
            "Disciplined capital allocation",
            "Comprehensive due diligence",
            "Risk-adjusted investment decisions",
            "Downside protection",
            "Long-term partnerships",
            "Transparency and accountability",
          ],
        },
        {
          title: "A long-term perspective",
          body: "Westernsouth aspires to expand its participation in Latin American capital markets and, in the future, develop regulated investment platforms and vehicles. These are future objectives, not existing licenses or vehicles.",
        },
      ],
    },
    solutions: {
      slug: "investment-solutions",
      title: "Capital solutions for complex needs.",
      eyebrow: "Investment Solutions",
      intro:
        "We combine investment, private credit and tailored structuring to address a range of corporate needs. Every opportunity is subject to specific assessment, due diligence and approval; there are no automatic approvals or generally guaranteed terms.",
      sections: [
        {
          title: "Investment Banking & Private Equity",
          body: "Participation in equity structures and the development of investment solutions using equity and hybrid capital instruments.",
          bullets: [
            "Equity investments and growth equity",
            "Corporate investments",
            "Acquisition financing",
            "Capital structuring",
            "Strategic investment transactions",
          ],
        },
        {
          title: "Private Credit",
          body: "Medium- and long-term private financing for businesses pursuing growth, expansion, productive capital or bespoke structures.",
          bullets: [
            "Direct lending and senior secured debt",
            "Medium- and long-term financing",
            "Growth financing",
            "Structured private debt",
          ],
        },
        {
          title: "Asset-Backed Lending",
          body: "Credit solutions secured by assets and real collateral. Collateral does not provide automatic approval or replace an assessment of repayment capacity.",
          bullets: [
            "Asset valuation and collateral analysis",
            "Legal due diligence",
            "Loan structuring",
            "Repayment capacity assessment",
          ],
        },
        {
          title: "Tailor-Made Financial Structures",
          body: "Bespoke financial solutions for companies with complex corporate, wealth or financing structures.",
          bullets: [
            "Structured finance",
            "Hybrid debt and equity",
            "Bespoke financing",
            "Transaction and asset structuring",
          ],
        },
      ],
    },
    advisory: {
      slug: "advisory-wealth",
      title: "Advisory with perspective and discretion.",
      eyebrow: "Advisory & Wealth Management",
      intro:
        "We support companies, investors and families with important financial decisions through personalized attention and a careful approach to risk. Our services do not guarantee returns or provide absolute protection against loss.",
      sections: [
        {
          title: "Corporate Advisory",
          body: "We help companies assess financial alternatives and make strategic capital decisions.",
          bullets: [
            "Financial advisory",
            "Business valuation",
            "Financial structuring",
            "Corporate finance consulting",
          ],
        },
        {
          title: "Private Wealth",
          body: "We shape personalized wealth conversations and strategies with discretion, analysis and a long-term outlook.",
          bullets: [
            "Investment portfolio construction",
            "Fixed income and equity portfolio strategies",
            "Wealth and succession planning",
            "Estate structuring",
            "Intergenerational wealth planning",
          ],
        },
        {
          title: "Indicative service segments",
          body: "The following amounts are indicative thresholds for discussing the scope of each service. They do not guarantee acceptance and are not regulatory minimums.",
          bullets: [
            "Portfolio construction: from US$250,000",
            "Wealth succession: from US$1,000,000",
            "Inheritance structures: from US$5,000,000",
          ],
        },
      ],
    },
    industries: {
      slug: "industries",
      title: "Capital and insight across essential industries.",
      eyebrow: "Industries",
      intro:
        "Our current investment activity spans four sectors. The descriptions below refer to general areas of activity and do not identify portfolio companies, assets, projects or ownership interests.",
      sections: [
        {
          title: "Mining",
          body: "We assess opportunities related to assets, services and capital needs across the mining value chain.",
        },
        {
          title: "Oil & Gas",
          body: "We consider financing needs and opportunities connected with the sector's infrastructure, services and assets.",
        },
        {
          title: "Real Estate",
          body: "We assess investment, financing and asset-backed structuring opportunities in real estate.",
        },
        {
          title: "Fisheries",
          body: "We consider productive capital needs and financing opportunities across fisheries and related industrial activities.",
        },
        {
          title: "Other sectors of interest",
          body: "We are also interested in opportunities in infrastructure, manufacturing, textiles and consumer goods. Sector interest does not imply current investments.",
        },
      ],
    },
    contact: {
      slug: "contact",
      title: "Let's begin a conversation.",
      eyebrow: "Institutional Contact",
      intro:
        "Briefly describe the purpose of your enquiry. Our team will review your message and follow up where appropriate. Please do not send confidential information, identity documents or sensitive financial data through this form.",
      sections: [],
    },
    privacy: {
      slug: "privacy",
      title: "Privacy Notice",
      eyebrow: "Draft for legal review",
      intro:
        "This is an informational draft and must be reviewed and completed by legal counsel before publication.",
      sections: [
        {
          title: "Information we receive",
          body: "If you use the contact form, we receive the information you provide, such as your name, email address, company, phone number, enquiry type and message. We do not request sensitive financial data or identity documents.",
        },
        {
          title: "Use and communications",
          body: "Information is used to respond to institutional enquiries and follow up on communications you initiate. The form transmits your information to the email provider configured by Westernsouth for delivery to the institutional inbox.",
        },
        {
          title: "Retention, rights and contact",
          body: "Before publication, Westernsouth must define retention periods, procedures for handling data-subject requests, security measures and the controller's identification and contact details in accordance with applicable laws.",
        },
      ],
    },
    terms: {
      slug: "terms-of-use",
      title: "Terms of Use",
      eyebrow: "Draft for legal review",
      intro:
        "This draft requires legal review and adaptation before publication. Access to this site provides general information and does not engage the user to a service.",
      sections: [
        {
          title: "Informational content",
          body: "Content is provided for general informational purposes and may change without notice. It is not financial, legal, tax or investment advice, nor an offer or invitation to buy or sell securities.",
        },
        {
          title: "Use of this website",
          body: "Users must use the website lawfully and must not interfere with its availability, security or operation. Content and trademarks belong to their respective owners and may not be reused without permission.",
        },
        {
          title: "Scope and review",
          body: "Decisions should be based on independent advice and definitive documentation. This draft does not limit non-waivable rights and must be completed to reflect the legal terms applicable to website operations.",
        },
      ],
    },
    disclaimer: {
      slug: "legal-disclaimer",
      title: "Legal Disclaimer",
      eyebrow: "Draft for legal review",
      intro:
        "Information on this website is provided for general and institutional purposes. This text is a draft and requires legal review before publication.",
      sections: [
        {
          title: "No offer or recommendation",
          body: "No part of this website constitutes a public offering of securities, solicitation of an investment, personalized recommendation or binding financing offer. Submitting an enquiry does not create a contractual relationship.",
        },
        {
          title: "Risks and outcomes",
          body: "All investments and financing arrangements involve risk. No return, credit approval, liquidity, preservation of capital or absence of loss is guaranteed. Figures and descriptions should be confirmed before decisions are made.",
        },
        {
          title: "Corporate information",
          body: "Westernsouth Investment & Co. is presented as an independent investment and financial structuring firm. This website does not claim that it is a bank, an authorized SAFI or an entity supervised by a specific regulator.",
        },
      ],
    },
  },
};

export const investmentCapabilities: Record<
  Locale,
  { title: string; description: string }[]
> = {
  es: [
    {
      title: "Investment Banking & Private Equity",
      description:
        "Inversiones de capital y estructuras híbridas para acompañar etapas de crecimiento y decisiones estratégicas.",
    },
    {
      title: "Private Credit",
      description:
        "Financiamiento privado de mediano y largo plazo para crecimiento, expansión y capital productivo.",
    },
    {
      title: "Asset-Backed Lending",
      description:
        "Estructuras crediticias respaldadas por activos, sujetas a valorización y análisis de capacidad de pago.",
    },
    {
      title: "Tailor-Made Financial Structures",
      description:
        "Soluciones a medida para necesidades corporativas, patrimoniales y de financiamiento complejas.",
    },
  ],
  en: [
    {
      title: "Investment Banking & Private Equity",
      description:
        "Equity investments and hybrid structures for growth and strategic corporate decisions.",
    },
    {
      title: "Private Credit",
      description:
        "Medium- and long-term private financing for growth, expansion and productive capital.",
    },
    {
      title: "Asset-Backed Lending",
      description:
        "Credit structures secured by assets, subject to valuation and repayment-capacity review.",
    },
    {
      title: "Tailor-Made Financial Structures",
      description:
        "Bespoke solutions for complex corporate, wealth and financing needs.",
    },
  ],
};

export const sectors: Record<
  Locale,
  { title: string; description: string; image: string; alt: string }[]
> = {
  es: [
    {
      title: "Minería",
      description: "Activos, servicios y necesidades de capital a lo largo de la cadena minera.",
      image:
        "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1200&q=85",
      alt: "Estructura industrial de gran escala",
    },
    {
      title: "Petróleo y gas",
      description: "Infraestructura, servicios y activos vinculados al sector energético.",
      image:
        "https://images.unsplash.com/photo-1513828583688-c52646e60143?auto=format&fit=crop&w=1200&q=85",
      alt: "Instalación industrial energética",
    },
    {
      title: "Inmobiliario",
      description: "Oportunidades de inversión, financiamiento y estructuras respaldadas por activos.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
      alt: "Arquitectura contemporánea de oficinas",
    },
    {
      title: "Pesca",
      description: "Capital productivo y financiamiento para actividades pesqueras e industriales.",
      image:
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=85",
      alt: "Mar abierto y actividad costera",
    },
  ],
  en: [
    {
      title: "Mining",
      description: "Assets, services and capital needs across the mining value chain.",
      image:
        "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1200&q=85",
      alt: "Large-scale industrial structure",
    },
    {
      title: "Oil & Gas",
      description: "Infrastructure, services and assets connected with the energy sector.",
      image:
        "https://images.unsplash.com/photo-1513828583688-c52646e60143?auto=format&fit=crop&w=1200&q=85",
      alt: "Industrial energy facility",
    },
    {
      title: "Real Estate",
      description: "Investment, financing and asset-backed structuring opportunities.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
      alt: "Contemporary office architecture",
    },
    {
      title: "Fisheries",
      description: "Productive capital and financing across fisheries and industrial activities.",
      image:
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=85",
      alt: "Open sea and coastal activity",
    },
  ],
};

export const otherSectors: Record<Locale, string[]> = {
  es: ["Infraestructura", "Manufactura", "Textiles", "Bienes de consumo"],
  en: ["Infrastructure", "Manufacturing", "Textiles", "Consumer goods"],
};

export function getPath(locale: Locale, key: PageKey): string {
  if (key === "home") return `/${locale}`;
  const slug = pages[locale][key].slug;
  if (key === "privacy" || key === "terms" || key === "disclaimer") {
    return `/${locale}/legal/${slug}`;
  }
  return `/${locale}/${slug}`;
}

export function findPage(locale: Locale, segments: string[]): PageKey | null {
  if (segments.length === 0) return "home";
  const slug = segments.at(-1);
  for (const [key, page] of Object.entries(pages[locale]) as [
    Exclude<PageKey, "home">,
    PageCopy,
  ][]) {
    const legal = key === "privacy" || key === "terms" || key === "disclaimer";
    if (page.slug === slug && (legal ? segments.length === 2 && segments[0] === "legal" : segments.length === 1)) {
      return key;
    }
  }
  return null;
}

export function getAlternatePath(locale: Locale, key: PageKey): string {
  return getPath(locale === "es" ? "en" : "es", key);
}
