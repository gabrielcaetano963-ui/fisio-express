import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpen,
  Check,
  ChevronDown,
  Clock,
  Download,
  Heart,
  Infinity as InfinityIcon,
  Lock,
  Quote,
  ShieldCheck,
  Smartphone,
  Star,
} from "lucide-react";

import heroBundle from "@/assets/hero-bundle.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import phone1 from "@/assets/phone-1.jpg";
import bonusCertificate from "@/assets/bonus-certificate.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Guia Ilustrado do Catecismo | Entenda a fé católica de forma simples" },
      {
        name: "description",
        content:
          "Coleção digital com 74 quadros ilustrados do Catecismo da Igreja Católica: acesso imediato, vitalício e no celular. Aprenda a fé de forma simples e profunda.",
      },
      { property: "og:title", content: "Guia Ilustrado do Catecismo da Igreja Católica" },
      {
        property: "og:description",
        content:
          "74 quadros ilustrados que explicam o Catecismo de forma simples e profunda. Acesso imediato e vitalício.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const testimonials = [
  {
    name: "Mariana Coutinho",
    role: "Catequista, Belo Horizonte",
    text: "Eu tentava ler o Catecismo há anos e sempre parava no terceiro parágrafo. Com os quadros ilustrados finalmente entendi a lógica da fé.",
  },
  {
    name: "Padre Anselmo Vieira",
    role: "Paróquia São Judas",
    text: "Uso o material nas reuniões de catequese. A linguagem é fiel ao Magistério e ao mesmo tempo acessível para quem está começando.",
  },
  {
    name: "Rafael Mendonça",
    role: "Recém-convertido",
    text: "Voltei à Igreja depois de 15 anos. Este guia respondeu perguntas que eu tinha vergonha de fazer em voz alta.",
  },
  {
    name: "Luciana Prado",
    role: "Mãe de três filhos",
    text: "Imprimi alguns quadros e colei na cozinha. Meus filhos aprenderam os sacramentos sem eu precisar explicar nada.",
  },
  {
    name: "Débora Alencar",
    role: "Grupo de oração",
    text: "O que mais gosto é poder abrir no celular na fila do banco e estudar cinco minutos. Não parece estudo, parece oração.",
  },
  {
    name: "Carlos Eduardo Nunes",
    role: "Seminarista",
    text: "Excelente material de revisão. As referências aos números do Catecismo estão todas ali, o que dá segurança doutrinária.",
  },
];

const benefits = [
  {
    icon: Download,
    title: "Acesso imediato",
    text: "Você recebe tudo por e-mail em menos de dois minutos após a confirmação.",
  },
  {
    icon: InfinityIcon,
    title: "Vitalício",
    text: "Baixou, é seu para sempre. Sem mensalidade, sem renovação, sem prazo.",
  },
  {
    icon: Smartphone,
    title: "Celular, PC ou impresso",
    text: "Arquivos em alta resolução, prontos para ler na tela ou imprimir em casa.",
  },
  {
    icon: ShieldCheck,
    title: "Fiel ao Magistério",
    text: "Todo conteúdo referenciado nos números oficiais do Catecismo da Igreja Católica.",
  },
];

const learnings = [
  "Por que existe o mal, se Deus é bom",
  "O que realmente acontece na Missa",
  "Como funcionam os sete sacramentos",
  "O sentido da confissão e da penitência",
  "O papel de Maria na história da salvação",
  "O que a Igreja ensina sobre o purgatório",
  "Como rezar quando parece que nada acontece",
  "A diferença entre pecado mortal e venial",
];

const faqs = [
  {
    q: "Isto é um livro físico?",
    a: "Não. É uma coleção digital em PDF de alta resolução. Você recebe os arquivos por e-mail e pode ler no celular, no computador ou imprimir em casa.",
  },
  {
    q: "Preciso ter estudado teologia para entender?",
    a: "Nenhum conhecimento prévio é necessário. Cada quadro parte do zero, com linguagem simples e referência ao número correspondente do Catecismo.",
  },
  {
    q: "Em quanto tempo recebo o acesso?",
    a: "Imediatamente após a confirmação do pagamento. No cartão, leva cerca de dois minutos; no Pix, poucos segundos.",
  },
  {
    q: "Serve para catequese de crianças?",
    a: "Sim. Muitos catequistas usam os quadros impressos como apoio visual em encontros com crianças e adultos.",
  },
  {
    q: "E se eu não gostar?",
    a: "Você tem 7 dias de garantia incondicional. Basta responder ao e-mail de entrega e devolvemos 100% do valor, sem perguntas.",
  },
];

function Index() {
  return (
    <main className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative bg-navy-deep text-cream">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 0%, oklch(0.34 0.08 262) 0%, transparent 70%)",
          }}
        />
        <div className="relative container-page py-14 text-center md:py-20">
          <p className="eyebrow text-gold">Coleção digital ilustrada</p>
          <h1 className="mx-auto mt-5 max-w-3xl text-3xl leading-tight md:text-5xl">
            Entenda todo o Catecismo da Igreja Católica de forma{" "}
            <em className="not-italic text-gold">visual, simples e profunda</em>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm text-cream/70 md:text-base">
            74 quadros ilustrados que traduzem 2.865 parágrafos de doutrina em explicações
            claras — para quem quer conhecer a fé sem se perder no caminho.
          </p>

          <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-lg border border-gold/25 bg-navy shadow-lift">
            <img
              src={heroBundle}
              alt="Coleção de guias ilustrados do Catecismo da Igreja Católica"
              width={1408}
              height={1008}
              className="w-full"
            />
          </div>

          <div className="mt-9">
            <a href="#oferta" className="btn-gold btn-gold-hover">
              Quero conhecer a coleção
            </a>
            <p className="mt-4 flex items-center justify-center gap-2 text-xs text-cream/60">
              <Lock className="size-3.5" /> Acesso imediato e vitalício • Garantia de 7 dias
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-page py-16 md:py-20">
        <h2 className="text-center text-2xl md:text-3xl">Quem já leu, diz o que sentiu</h2>
        <div className="mx-auto mt-3 max-w-xs rule-gold" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="card-cream flex flex-col gap-4 p-6">
              <Quote className="size-5 text-gold" />
              <blockquote className="text-sm leading-relaxed text-muted-foreground">
                {t.text}
              </blockquote>
              <figcaption className="mt-auto border-t border-border pt-4">
                <div className="flex gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-current" />
                  ))}
                </div>
                <p className="mt-2 font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* SAMPLE / PREVIEW */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="container-page text-center">
          <h2 className="text-2xl md:text-3xl">Veja por dentro um dos 74 quadros do Catecismo</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
            Cada tema ocupa uma página inteira: a explicação, as referências e a arte sacra que
            fixa o ensinamento na memória.
          </p>
          <div className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-lg border border-border bg-card shadow-lift">
            <img
              src={gallery1}
              alt="Exemplo de quadro ilustrado sobre o Novo Testamento"
              width={900}
              height={1150}
              loading="lazy"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="container-page py-16 md:py-20">
        <h2 className="text-center text-2xl md:text-3xl">
          Feito para quem tem devoção e pouco tempo
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.title} className="card-cream bg-secondary/60 p-6">
              <b.icon className="size-6 text-gold" />
              <h3 className="mt-4 text-lg">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="container-page pb-16 md:pb-20">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl">Veja como o Catecismo se torna simples</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
            Uma amostra das páginas: doutrina, história da Igreja, sacramentos, oração e vida
            moral — tudo ilustrado.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 md:gap-5">
          {[gallery1, gallery2, gallery2, gallery1, gallery2, gallery1].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Página ilustrada ${i + 1} da coleção`}
              width={900}
              height={1150}
              loading="lazy"
              className="w-full rounded-md border border-border shadow-soft"
            />
          ))}
        </div>
      </section>

      {/* LEARNINGS */}
      <section className="bg-navy-deep py-16 text-cream md:py-20">
        <div className="container-page">
          <h2 className="text-center text-2xl md:text-3xl">
            O que você vai entender sobre a fé católica
          </h2>
          <ul className="mt-10 grid gap-3 md:grid-cols-2">
            {learnings.map((l) => (
              <li
                key={l}
                className="flex items-start gap-3 rounded-md border border-gold/20 bg-navy px-5 py-4 text-sm"
              >
                <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                <span className="text-cream/85">{l}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* BONUSES */}
      <section className="container-page py-16 md:py-20">
        <div className="text-center">
          <p className="eyebrow text-accent-foreground/70">Bônus inclusos</p>
          <h2 className="mt-2 text-2xl md:text-3xl">Tudo o que você vai receber</h2>
        </div>

        <div className="mt-10 space-y-5">
          <article className="card-cream grid items-center gap-6 p-6 md:grid-cols-[1fr_1.4fr]">
            <img
              src={gallery2}
              alt="Bônus: 150 Salmos comentados"
              width={900}
              height={1150}
              loading="lazy"
              className="w-full rounded-md border border-border"
            />
            <div>
              <p className="eyebrow text-gold">Bônus 01</p>
              <h3 className="mt-1 text-xl">Os 150 Salmos comentados</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Todo o Saltério com uma introdução curta para cada salmo: quem escreveu, em que
                situação rezar e o que a Igreja enxerga nele.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {["Índice por intenção de oração", "Versão para impressão", "Referências patrísticas"].map(
                  (i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="size-4 text-success" /> {i}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </article>

          <article className="card-cream grid items-center gap-6 p-6 md:grid-cols-[1fr_1.4fr]">
            <img
              src={bonusCertificate}
              alt="Bônus: certificado de conclusão"
              width={1000}
              height={750}
              loading="lazy"
              className="w-full rounded-md border border-border"
            />
            <div>
              <p className="eyebrow text-gold">Bônus 02</p>
              <h3 className="mt-1 text-xl">100 orações essenciais + certificado</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Um caderno com as orações da tradição católica, do Sinal da Cruz às ladainhas, e um
                certificado ornamentado para imprimir ao concluir a leitura.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {["Orações em português e latim", "Novenas completas", "Certificado personalizável"].map(
                  (i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="size-4 text-success" /> {i}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </article>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <div className="card-cream overflow-hidden">
            <img
              src={phone1}
              alt="Leitura da coleção no celular"
              width={1000}
              height={750}
              loading="lazy"
              className="w-full"
            />
            <div className="p-6">
              <Smartphone className="size-5 text-gold" />
              <h3 className="mt-3 text-lg">Cabe no seu bolso</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Leia cinco minutos por dia, na fila, no ônibus ou antes de dormir.
              </p>
            </div>
          </div>
          <div className="card-cream overflow-hidden">
            <img
              src={bonusCertificate}
              alt="Material pronto para impressão"
              width={1000}
              height={750}
              loading="lazy"
              className="w-full"
            />
            <div className="p-6">
              <BookOpen className="size-5 text-gold" />
              <h3 className="mt-3 text-lg">Pronto para imprimir</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Arquivos em 300 dpi: imprima em casa ou na gráfica e monte seu próprio volume.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section id="oferta" className="bg-secondary py-16 md:py-20">
        <div className="container-page">
          <h2 className="text-center text-2xl md:text-3xl">Escolha sua oferta</h2>
          <div className="mx-auto mt-3 max-w-xs rule-gold" />

          <div className="mx-auto mt-10 max-w-lg space-y-6">
            <div className="card-cream p-7 text-center">
              <p className="eyebrow text-muted-foreground">Plano essencial</p>
              <h3 className="mt-2 text-xl">Guia Ilustrado do Catecismo</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Os 74 quadros ilustrados completos, em PDF de alta resolução.
              </p>
              <ul className="mx-auto mt-5 max-w-xs space-y-2 text-left text-sm">
                {["74 quadros ilustrados", "Acesso imediato e vitalício", "Leia no celular ou imprima"].map(
                  (i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="size-4 text-success" /> {i}
                    </li>
                  ),
                )}
              </ul>
              <p className="mt-6 font-display text-4xl font-semibold">R$ 27,90</p>
              <p className="text-xs text-muted-foreground">pagamento único</p>
              <a href="#oferta" className="btn-gold btn-gold-hover mt-6 w-full">
                Quero o plano essencial
              </a>
            </div>

            <div className="relative rounded-lg border-2 border-gold bg-card p-7 text-center shadow-lift">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-navy-deep px-4 py-1 text-[0.65rem] font-semibold tracking-[0.16em] text-gold uppercase">
                Mais escolhido
              </span>
              <p className="eyebrow text-gold">Coleção completa</p>
              <h3 className="mt-2 text-xl">Catecismo + todos os bônus</h3>
              <img
                src={heroBundle}
                alt="Coleção completa com bônus"
                width={1408}
                height={1008}
                loading="lazy"
                className="mt-5 w-full rounded-md"
              />
              <ul className="mx-auto mt-6 max-w-xs space-y-2 text-left text-sm">
                {[
                  "74 quadros ilustrados do Catecismo",
                  "Bônus: 150 Salmos comentados",
                  "Bônus: 100 orações essenciais",
                  "Certificado de conclusão",
                  "Atualizações futuras gratuitas",
                ].map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="size-4 text-success" /> {i}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted-foreground line-through">R$ 129,00</p>
              <p className="font-display text-5xl font-semibold text-navy">R$ 37,90</p>
              <p className="text-xs text-muted-foreground">pagamento único • acesso vitalício</p>
              <a href="#oferta" className="btn-gold btn-gold-hover mt-6 w-full">
                Quero a coleção completa
              </a>
              <p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Clock className="size-3.5" /> Oferta de lançamento
              </p>
            </div>
          </div>

          {/* GUARANTEE */}
          <div className="mx-auto mt-10 flex max-w-lg items-start gap-4 rounded-lg border border-success/30 bg-card p-6">
            <ShieldCheck className="size-8 shrink-0 text-success" />
            <div>
              <h3 className="text-lg">Garantia incondicional de 7 dias</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Se o material não fizer sentido para a sua caminhada, devolvemos cada centavo. Sem
                formulário, sem justificativa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-page py-16 md:py-20">
        <h2 className="text-center text-2xl md:text-3xl">Perguntas frequentes</h2>
        <div className="mx-auto mt-10 max-w-2xl divide-y divide-border overflow-hidden rounded-lg border border-border bg-card">
          {faqs.map((f) => (
            <details key={f.q} className="group px-6 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold">
                {f.q}
                <ChevronDown className="size-4 shrink-0 text-gold transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-navy-deep py-16 text-center text-cream md:py-20">
        <div className="container-page">
          <Heart className="mx-auto size-6 text-gold" />
          <h2 className="mx-auto mt-4 max-w-2xl text-2xl md:text-3xl">
            Comece hoje a conhecer a fé que você já <em className="not-italic text-gold">reza</em>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-cream/70">
            74 quadros, dois bônus, acesso vitalício. Tudo por menos que um almoço.
          </p>
          <a href="#oferta" className="btn-gold btn-gold-hover mt-8">
            Garantir minha coleção
          </a>
        </div>
      </section>

      <footer className="bg-navy py-8 text-center text-xs text-cream/50">
        <div className="container-page">
          <p>Guia Ilustrado do Catecismo — material de formação católica.</p>
          <p className="mt-2">Conteúdo digital. Este site não é afiliado a nenhuma editora.</p>
        </div>
      </footer>
    </main>
  );
}
