export type ExercisePose =
  | "wall-slide"
  | "external-rotation"
  | "pendulum"
  | "scapular"
  | "neck"
  | "bridge"
  | "knee"
  | "ankle"
  | "stretch";

export type Exercise = {
  id: string;
  name: string;
  region: string;
  category: string;
  objective: string;
  summary: string;
  instructions: string[];
  equipment: string;
  notes: string;
  keywords: string[];
  pose: ExercisePose;
  demo: true;
};

export const categories = [
  "Todos",
  "Cervical",
  "Ombro",
  "Coluna lombar",
  "Quadril",
  "Joelho",
  "Tornozelo e pé",
  "Mobilidade",
  "Alongamento",
  "Fortalecimento",
] as const;

export const exercises: Exercise[] = [
  {
    id: "demo-ombro-01",
    name: "Deslizamento de braços na parede",
    region: "Ombro",
    category: "Mobilidade",
    objective: "Mobilidade do ombro",
    summary: "Movimento assistido dos braços com apoio na parede.",
    instructions: [
      "Fique de frente para a parede e apoie as mãos.",
      "Deslize os braços para cima dentro da amplitude orientada pelo profissional.",
      "Retorne devagar à posição inicial.",
    ],
    equipment: "Parede",
    notes: "Conteúdo demonstrativo — revisar com o fisioterapeuta responsável.",
    keywords: ["ombro", "braço", "mobilidade", "elevação", "parede"],
    pose: "wall-slide",
    demo: true,
  },
  {
    id: "demo-ombro-02",
    name: "Rotação externa com faixa elástica",
    region: "Ombro",
    category: "Fortalecimento",
    objective: "Fortalecimento dos rotadores externos",
    summary: "Rotação do antebraço mantendo o cotovelo junto ao corpo.",
    instructions: [
      "Mantenha o cotovelo flexionado e próximo ao tronco.",
      "Gire o antebraço para fora, controlando a faixa elástica.",
      "Volte lentamente sem perder o alinhamento.",
    ],
    equipment: "Faixa elástica",
    notes: "Conteúdo demonstrativo — carga e amplitude exigem avaliação profissional.",
    keywords: ["ombro", "manguito", "rotação", "elástico", "fortalecimento"],
    pose: "external-rotation",
    demo: true,
  },
  {
    id: "demo-ombro-03",
    name: "Movimento pendular do ombro",
    region: "Ombro",
    category: "Mobilidade",
    objective: "Movimento suave do ombro",
    summary: "Balanço leve do braço com o tronco apoiado.",
    instructions: [
      "Apoie uma das mãos em uma superfície estável.",
      "Incline levemente o tronco e deixe o outro braço relaxado.",
      "Faça movimentos suaves conforme a orientação recebida.",
    ],
    equipment: "Superfície de apoio",
    notes: "Conteúdo demonstrativo — direção e amplitude devem ser individualizadas.",
    keywords: ["ombro", "pendular", "codman", "mobilidade", "relaxamento"],
    pose: "pendulum",
    demo: true,
  },
  {
    id: "demo-ombro-04",
    name: "Retração escapular",
    region: "Ombro",
    category: "Fortalecimento",
    objective: "Controle escapular",
    summary: "Aproximação controlada das escápulas com postura ereta.",
    instructions: [
      "Sente-se ou fique em pé com o tronco ereto.",
      "Leve os ombros suavemente para trás, aproximando as escápulas.",
      "Relaxe e repita sem elevar os ombros.",
    ],
    equipment: "Nenhum",
    notes: "Conteúdo demonstrativo — confirmar execução e dosagem com o profissional.",
    keywords: ["ombro", "escápula", "postura", "costas", "fortalecimento"],
    pose: "scapular",
    demo: true,
  },
  {
    id: "demo-cervical-01",
    name: "Rotação cervical ativa",
    region: "Cervical",
    category: "Mobilidade",
    objective: "Mobilidade cervical",
    summary: "Rotação suave da cabeça dentro da amplitude confortável.",
    instructions: [
      "Mantenha o tronco ereto e os ombros relaxados.",
      "Gire a cabeça devagar para um lado.",
      "Retorne ao centro e repita para o outro lado.",
    ],
    equipment: "Nenhum",
    notes: "Conteúdo demonstrativo — interromper e buscar orientação em caso de sintomas.",
    keywords: ["cervical", "pescoço", "rotação", "mobilidade"],
    pose: "neck",
    demo: true,
  },
  {
    id: "demo-lombar-01",
    name: "Ponte",
    region: "Coluna lombar",
    category: "Fortalecimento",
    objective: "Fortalecimento de quadril e tronco",
    summary: "Elevação controlada do quadril em posição deitada.",
    instructions: [
      "Deite-se com os joelhos flexionados e os pés apoiados.",
      "Eleve o quadril de forma controlada.",
      "Retorne lentamente à posição inicial.",
    ],
    equipment: "Colchonete",
    notes: "Conteúdo demonstrativo — exercício sujeito a avaliação individual.",
    keywords: ["lombar", "quadril", "ponte", "glúteo", "core"],
    pose: "bridge",
    demo: true,
  },
  {
    id: "demo-joelho-01",
    name: "Extensão de joelho sentado",
    region: "Joelho",
    category: "Fortalecimento",
    objective: "Ativação dos extensores do joelho",
    summary: "Extensão controlada da perna em posição sentada.",
    instructions: [
      "Sente-se com os pés apoiados e o tronco ereto.",
      "Estenda um joelho até a amplitude orientada.",
      "Retorne devagar e alterne conforme a prescrição.",
    ],
    equipment: "Cadeira",
    notes: "Conteúdo demonstrativo — carga e amplitude devem ser prescritas.",
    keywords: ["joelho", "quadríceps", "extensão", "fortalecimento"],
    pose: "knee",
    demo: true,
  },
  {
    id: "demo-tornozelo-01",
    name: "Elevação de calcanhares",
    region: "Tornozelo e pé",
    category: "Fortalecimento",
    objective: "Fortalecimento da panturrilha",
    summary: "Subida controlada na ponta dos pés com apoio estável.",
    instructions: [
      "Fique em pé próximo a uma superfície estável.",
      "Eleve os calcanhares de forma controlada.",
      "Desça devagar mantendo o alinhamento dos pés.",
    ],
    equipment: "Superfície de apoio",
    notes: "Conteúdo demonstrativo — apoio e progressão exigem avaliação profissional.",
    keywords: ["tornozelo", "pé", "panturrilha", "equilíbrio", "fortalecimento"],
    pose: "ankle",
    demo: true,
  },
  {
    id: "demo-quadril-01",
    name: "Alongamento posterior da coxa",
    region: "Quadril",
    category: "Alongamento",
    objective: "Flexibilidade da cadeia posterior",
    summary: "Alongamento sentado com uma perna estendida.",
    instructions: [
      "Sente-se com uma perna estendida e a outra confortável.",
      "Incline o tronco à frente mantendo a coluna alongada.",
      "Permaneça pelo tempo orientado e retorne devagar.",
    ],
    equipment: "Colchonete",
    notes: "Conteúdo demonstrativo — intensidade e tempo devem ser individualizados.",
    keywords: ["quadril", "posterior", "coxa", "isquiotibiais", "alongamento"],
    pose: "stretch",
    demo: true,
  },
];

export function normalizeSearch(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export function matchesExercise(exercise: Exercise, query: string) {
  const normalized = normalizeSearch(query);
  if (!normalized) return true;
  const searchable = normalizeSearch(
    [
      exercise.name,
      exercise.region,
      exercise.category,
      exercise.objective,
      exercise.summary,
      ...exercise.keywords,
    ].join(" "),
  );
  return normalized.split(/\s+/).every((term) => searchable.includes(term));
}
