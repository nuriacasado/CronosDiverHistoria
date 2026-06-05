export const levels = [
  {
    id: "antiguo-regimen",
    order: 1,
    title: "El fin de un mundo",
    topic: "Antiguo Régimen e Ilustración",
    description:
      "Comprende cómo la razón empezó a cuestionar el poder absoluto de los reyes y las desigualdades de la sociedad estamental.",
    keyConcepts: ["Absolutismo", "Ilustración", "Sociedad estamental", "Privilegios", "División de poderes"],
    events: [
      { year: 1751, title: "La Enciclopedia", description: "Difusión de ideas ilustradas." },
      { year: 1776, title: "Independencia de EE. UU.", description: "Ejemplo de revolución liberal." },
      { year: 1789, title: "Revolución Francesa", description: "Crisis del absolutismo y del Antiguo Régimen." },
    ],
    oralGoals: [
      "Explicar qué era el Antiguo Régimen.",
      "Relacionar Ilustración y crítica al absolutismo.",
      "Diferenciar sociedad estamental y sociedad actual de derechos.",
    ],
    questions: [
      {
        question: "¿Qué era el Antiguo Régimen?",
        hint: "Piensa en tres aspectos: política, sociedad y economía.",
        model:
          "El Antiguo Régimen era el sistema político, social y económico anterior a las revoluciones liberales. En política predominaba la monarquía absoluta; en sociedad había estamentos con privilegios; y en economía tenía mucho peso la agricultura. Fue cuestionado por la Ilustración porque defendía la razón, la igualdad jurídica y la división de poderes.",
      },
      {
        question: "¿Por qué la Ilustración criticaba el absolutismo?",
        hint: "Recuerda las ideas de razón, derechos y límites al poder.",
        model:
          "La Ilustración criticaba el absolutismo porque defendía que el poder no debía depender solo del rey. Los ilustrados valoraban la razón, la educación, la libertad, la igualdad ante la ley y la separación de poderes. Por eso sus ideas ayudaron a preparar las revoluciones liberales.",
      },
    ],
    mistakes: ["Decir que todos tenían los mismos derechos.", "Confundir absolutismo con democracia.", "Explicar la Revolución Francesa solo como una pelea violenta."],
  },
  {
    id: "revoluciones",
    order: 2,
    title: "La fuerza del cambio",
    topic: "Revoluciones liberales e industriales",
    description:
      "Analiza cómo las nuevas ideas políticas, las máquinas y las fábricas transformaron la vida cotidiana y la organización social.",
    keyConcepts: ["Revolución Industrial", "Burguesía", "Proletariado", "Liberalismo", "Constitución"],
    events: [
      { year: 1769, title: "Máquina de vapor", description: "Impulso técnico de la industrialización." },
      { year: 1815, title: "Congreso de Viena", description: "Intento de restaurar el absolutismo." },
      { year: 1848, title: "Primavera de los Pueblos", description: "Oleada revolucionaria liberal y nacionalista." },
    ],
    oralGoals: [
      "Explicar los cambios de la Revolución Industrial.",
      "Relacionar liberalismo, derechos y constituciones.",
      "Diferenciar burguesía y proletariado.",
    ],
    questions: [
      {
        question: "¿Qué cambios provocó la Revolución Industrial?",
        hint: "Habla de fábricas, ciudades, clases sociales y condiciones de vida.",
        model:
          "La Revolución Industrial cambió la forma de producir porque las fábricas y las máquinas sustituyeron parte del trabajo artesanal. Muchas personas se trasladaron a las ciudades para trabajar. Crecieron la burguesía industrial y el proletariado, pero también aparecieron problemas como largas jornadas, bajos salarios y malas condiciones laborales.",
      },
      {
        question: "¿Qué relación hay entre liberalismo y constituciones?",
        hint: "Piensa en limitar el poder y reconocer derechos.",
        model:
          "El liberalismo defendía limitar el poder absoluto de los reyes mediante leyes, división de poderes y reconocimiento de derechos. Las constituciones fueron importantes porque recogían esas normas básicas y establecían cómo debía organizarse el Estado.",
      },
    ],
    mistakes: ["Pensar que la Revolución Industrial fue solo inventar máquinas.", "Confundir burguesía con nobleza.", "Olvidar las consecuencias sociales."],
  },
  {
    id: "imperialismo",
    order: 3,
    title: "El gran reparto",
    topic: "Imperialismo y Primera Guerra Mundial",
    description:
      "Relaciona la expansión colonial europea con las tensiones internacionales que desembocaron en la Primera Guerra Mundial.",
    keyConcepts: ["Imperialismo", "Colonialismo", "Paz Armada", "Trincheras", "Tratado de Versalles"],
    events: [
      { year: 1885, title: "Conferencia de Berlín", description: "Reparto colonial de África." },
      { year: 1914, title: "Inicio de la I Guerra Mundial", description: "El atentado de Sarajevo actúa como detonante." },
      { year: 1919, title: "Tratado de Versalles", description: "Duras condiciones para Alemania." },
    ],
    oralGoals: [
      "Explicar las causas del imperialismo.",
      "Diferenciar causas profundas y detonante de la guerra.",
      "Comprender las consecuencias de Versalles.",
    ],
    questions: [
      {
        question: "¿Qué fue el imperialismo?",
        hint: "Incluye economía, poder político y prestigio internacional.",
        model:
          "El imperialismo fue la expansión de las potencias industriales sobre territorios de África y Asia. Buscaban materias primas, nuevos mercados, prestigio y control estratégico. Esta competencia aumentó las rivalidades entre países europeos.",
      },
      {
        question: "¿Por qué empezó la Primera Guerra Mundial?",
        hint: "No te quedes solo en el asesinato del archiduque.",
        model:
          "La Primera Guerra Mundial tuvo causas profundas como el imperialismo, el nacionalismo, la carrera armamentística y las alianzas entre potencias. El asesinato del archiduque Francisco Fernando fue el detonante, pero el conflicto se explica por tensiones acumuladas durante años.",
      },
    ],
    mistakes: ["Decir que la guerra empezó solo por un asesinato.", "Confundir causa y detonante.", "No mencionar las rivalidades coloniales."],
  },
  {
    id: "guerras-totales",
    order: 4,
    title: "El eclipse de Europa",
    topic: "Entreguerras, totalitarismos y Segunda Guerra Mundial",
    description:
      "Comprende cómo la crisis económica y política favoreció los totalitarismos y llevó al mundo a una nueva guerra.",
    keyConcepts: ["Fascismo", "Nazismo", "Gran Depresión", "Totalitarismo", "Holocausto"],
    events: [
      { year: 1929, title: "Crack del 29", description: "Crisis económica mundial." },
      { year: 1933, title: "Hitler llega al poder", description: "Ascenso del nazismo en Alemania." },
      { year: 1939, title: "Invasión de Polonia", description: "Inicio de la Segunda Guerra Mundial." },
      { year: 1945, title: "Fin de la guerra y ONU", description: "Nuevo orden internacional." },
    ],
    oralGoals: [
      "Explicar el ascenso de los totalitarismos.",
      "Relacionar crisis económica y radicalización política.",
      "Valorar la gravedad histórica del Holocausto.",
    ],
    questions: [
      {
        question: "¿Por qué crecieron los fascismos en Europa?",
        hint: "Relaciona miedo, crisis, paro y promesas de orden.",
        model:
          "Los fascismos crecieron en un contexto de crisis económica, miedo al comunismo, descontento social y debilidad de algunas democracias. Prometían orden, grandeza nacional y soluciones rápidas, pero defendían regímenes autoritarios, violentos y contrarios a las libertades.",
      },
      {
        question: "¿Por qué la Segunda Guerra Mundial cambió el mundo?",
        hint: "Habla de destrucción, ONU, Guerra Fría y derechos humanos.",
        model:
          "La Segunda Guerra Mundial cambió el mundo por su enorme destrucción, el Holocausto, el uso de la bomba atómica y el debilitamiento de Europa. Después se creó la ONU y comenzó un nuevo equilibrio internacional dominado por Estados Unidos y la URSS, que dio lugar a la Guerra Fría.",
      },
    ],
    mistakes: ["Explicar el nazismo sin mencionar el contexto de entreguerras.", "Confundir fascismo y democracia.", "Tratar el Holocausto como un hecho secundario."],
  },
  {
    id: "espana-siglo-xx",
    order: 5,
    title: "España: del conflicto a la democracia",
    topic: "España en el siglo XX",
    description:
      "Ordena las grandes etapas de la España contemporánea: República, Guerra Civil, franquismo, Transición y Constitución.",
    keyConcepts: ["II República", "Guerra Civil", "Franquismo", "Transición", "Constitución de 1978"],
    events: [
      { year: 1931, title: "II República", description: "Etapa reformista y democrática." },
      { year: 1936, title: "Inicio de la Guerra Civil", description: "Sublevación militar contra la República." },
      { year: 1939, title: "Inicio del franquismo", description: "Dictadura tras la victoria franquista." },
      { year: 1975, title: "Inicio de la Transición", description: "Proceso hacia la democracia." },
      { year: 1978, title: "Constitución Española", description: "Base del sistema democrático actual." },
    ],
    oralGoals: [
      "Ordenar las etapas principales de España en el siglo XX.",
      "Explicar causas y consecuencias de la Guerra Civil.",
      "Valorar la importancia de la Constitución de 1978.",
    ],
    questions: [
      {
        question: "¿Cuáles fueron las grandes etapas de España en el siglo XX?",
        hint: "Ordénalas: República, Guerra Civil, franquismo y democracia.",
        model:
          "España vivió en el siglo XX varias etapas muy distintas: la Segunda República, la Guerra Civil, la dictadura franquista y la Transición democrática. La Constitución de 1978 consolidó un sistema democrático con derechos, libertades y división de poderes.",
      },
      {
        question: "¿Por qué fue importante la Constitución de 1978?",
        hint: "Relaciona democracia, derechos y organización del Estado.",
        model:
          "La Constitución de 1978 fue importante porque estableció las bases de la democracia actual. Reconoció derechos y libertades, organizó los poderes del Estado y permitió superar legalmente la dictadura mediante un sistema democrático.",
      },
    ],
    mistakes: ["Saltar de la Guerra Civil directamente a la democracia.", "No explicar el franquismo como dictadura.", "Confundir Transición con Constitución."],
  },
];