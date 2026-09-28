"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

const services = [
  { n: "01", title: "Modelagem 3D", text: "Transformamos sua ideia em um projeto exclusivo, pensado para ganhar forma do jeito que você imaginou.", benefit: "Da ideia para a realidade", image: "/Lampada_7.webp", position: "center" },
  { n: "02", title: "Impressão 3D", text: "Produzimos peças únicas com cuidado em cada detalhe, prontas para decorar, presentear ou facilitar o seu dia a dia.", benefit: "Sua criação ganha forma", image: "/Estante.webp", position: "center" },
  { n: "03", title: "Personalização", text: "Criamos presentes, personagens e objetos cheios de significado, feitos especialmente para você.", benefit: "Uma peça verdadeiramente sua", image: "/Boneco_7.webp", position: "center" },
  { n: "04", title: "Projetos corporativos", text: "Criamos peças que valorizam sua marca e tornam presentes, eventos e ambientes ainda mais memoráveis.", benefit: "Sua marca em forma de objeto", image: "/Placa_7.jpeg", position: "center" },
];

const processSteps = [
  {
    n: "01",
    title: "Você envia a ideia",
    desc: "Referência, medida ou uma descrição inicial.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    ),
  },
  {
    n: "02",
    title: "Modelagem 3D",
    desc: "A peça é desenhada e validada digitalmente.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
    ),
  },
  {
    n: "03",
    title: "Impressão",
    desc: "Fatiamento e produção camada por camada.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 6 2 18 2 18 9"></polyline>
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
        <rect x="6" y="14" width="12" height="8"></rect>
      </svg>
    ),
  },
  {
    n: "04",
    title: "Entrega",
    desc: "Retirada ou envio da sua peça pronta.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13"></rect>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
        <circle cx="5.5" cy="18.5" r="2.5"></circle>
        <circle cx="18.5" cy="18.5" r="2.5"></circle>
      </svg>
    ),
  },
];

const googleReviews = [
  {
    name: "Raquel Moreno Cordeiro Neves",
    text: "Excelente trabalho, postura impecável!\nAgradeço pela dedicação e cuidado com os trabalhos feitos! Que vcs alcancem ainda mais sucesso!!!\nParabéns aos profissionais!",
  },
  {
    name: "Tainara Caldas",
    text: "Fiz uma placa linda da minha empresa para levar em eventos. Atendimento de primeira, muito atenciosa! Recomendo!",
  },
  {
    name: "Emporio Premium",
    text: "Trabalho maravilhoso!!! super atenciosa, me deu muita atenção, tirou minhas duvidas...com certeza voltarei a fazer outros trabalhos com ela!! Preço super justo pelo maravilhoso trabalho!",
  },
  {
    name: "Victor Hugo Pimentel Pozes",
    text: "Tive uma experiência excelente! O atendimento foi impecável do início ao fim, sempre com muita atenção, educação e disposição para tirar todas as minhas dúvidas. O trabalho de impressão 3D superou minhas expectativas: peças com acabamento perfeito, ótima qualidade e entregues dentro do prazo.\n\nÉ nítido o cuidado e o profissionalismo em cada detalhe. Sem dúvida, uma empresa que se preocupa com a satisfação do cliente e entrega um serviço de alto nível.\n\nRecomendo de olhos fechados para quem procura qualidade, comprometimento e um atendimento realmente diferenciado. Com certeza voltarei a fazer novos projetos com eles!",
  },
  {
    name: "Mirela Scopel de Oliveira",
    text: "Atendimento de primeira!! Muito profissionalismo!! Tira as dúvidas, se preocupa de não dar um prazo, sem ter certeza que não conseguirá atender.",
  },
  {
    name: "Alexandre Souza",
    text: "Excelente qualidade e atendimento muito rápido! Recomendo!",
  },
];

const projectCarousels = [
  {
    id: "main",
    isMain: true,
    slides: [
      {
        image: "/No_sei_2_otimizado.webp",
        tag: "SOB ENCOMENDA",
        category: "ORGANIZAÇÃO E DECORAÇÃO",
        title: "Conjunto de porta-objetos",
        specs: "DOIS MÓDULOS · TAMPA REMOVÍVEL · ACABAMENTO TEXTURIZADO",
        cropClass: "crop-b"
      },
      {
        image: "/Castelo_otimizado.webp",
        tag: "SOB ENCOMENDA",
        category: "DECORAÇÃO TEMÁTICA",
        title: "Globo iluminado com castelo",
        specs: "CÚPULA DECORATIVA · ILUMINAÇÃO INTERNA · BASE PERSONALIZADA",
        cropClass: "crop-c"
      },
      {
        image: "/No_sei_otimizado.webp",
        tag: "SOB ENCOMENDA",
        category: "ORGANIZAÇÃO PARA AMBIENTES",
        title: "Organizador modular de bancada",
        specs: "DIVISÓRIAS FUNCIONAIS · DESIGN COMPACTO · PROJETO SOB MEDIDA",
        cropClass: "crop-a"
      }
    ]
  },
  {
    id: "second",
    isMain: false,
    slides: [
      {
        image: "/Gatinho_otimizado.webp",
        tag: "PERSONALIZADO",
        category: "HOMENAGEM PERSONALIZADA",
        title: "Heroína dos Gatinhos",
        specs: "MINIATURA TEMÁTICA · MEDALHA PERSONALIZADA · PINTURA COLORIDA",
        cropClass: "crop-b"
      },
      {
        image: "/Cachorrosoucachorronao_otimizado.webp",
        tag: "PERSONALIZADO",
        category: "PERSONALIZAÇÃO PET",
        title: "Memorial personalizado do seu pet",
        specs: "MINIATURA REALISTA · QUADRO ILUSTRADO · BASE DECORATIVA",
        cropClass: "crop-a"
      },
      {
        image: "/Boneco_9_otimizado.webp",
        tag: "PERSONALIZADO",
        category: "MINIATURA SOB MEDIDA",
        title: "Retrato em miniatura",
        specs: "PERSONAGEM PERSONALIZADO · ACESSÓRIO MODELADO · BASE ILUSTRADA",
        cropClass: "crop-a"
      }
      
    ]
  },
  {
    id: "third",
    isMain: false,
    slides: [
      {
        image: "/Corporativo_1.webp",
        tag: "CORPORATIVO",
        category: "MASCOTE CORPORATIVO",
        title: "Personagem Pneumax",
        specs: "IDENTIDADE VISUAL APLICADA · ESCULTURA 3D · PINTURA PERSONALIZADA",
        cropClass: "crop-c"
      },
      {
        image: "/Corporativo_2_melhorado.webp",
        tag: "CORPORATIVO",
        category: "MASCOTE PARA MARCAS",
        title: "Mascote PMX Pneus",
        specs: "PERSONAGEM TEMÁTICO · ELEMENTOS DA MARCA · ACABAMENTO PREMIUM",
        cropClass: "crop-a"
      }
    ]
  }
];

function ProjectCard({ project }: { project: typeof projectCarousels[0] }) {
  const [current, setCurrent] = useState(0);

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((prev) => (prev === 0 ? project.slides.length - 1 : prev - 1));
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((prev) => (prev === project.slides.length - 1 ? 0 : prev + 1));
  };

  const active = project.slides[current];
  const alignImageTop = ["Retrato em miniatura", "Mascote PMX Pneus", "Personagem Pneumax"].includes(active.title);

  return (
    <article className={`project ${project.isMain ? "project-main" : ""} reveal`}>
      <div className={`project-image ${active.cropClass}`}>
        <img
          className={`project-image-media object-cover ${alignImageTop ? "md:object-top" : ""}`}
          style={alignImageTop ? { objectPosition: "center top" } : undefined}
          src={active.image}
          alt={active.title}
        />
        <span>{active.tag}</span>

        {project.slides.length > 1 && (
          <>
            <button className="carousel-btn prev-btn" onClick={prevSlide} aria-label="Anterior">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button className="carousel-btn next-btn" onClick={nextSlide} aria-label="Próximo">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
            <div className="carousel-dots">
              {project.slides.map((_, idx) => (
                <span
                  key={idx}
                  className={`dot ${idx === current ? "active" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrent(idx);
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="project-info">
        <p>{active.category}</p>
        <h3>{active.title}</h3>
        <div>{active.specs}</div>
      </div>
    </article>
  );
}

function Logo({ small = false }: { small?: boolean }) {
  if (small) return (
    <img
      className="logo-image"
      src="/logo_mf_png.png"
      alt="MF Design e Modelagem 3D"
      width={88}
      height={58}
      style={{ width: 88, height: 58, objectFit: "contain" }}
    />
  );
  return <span className="logo"><img className="logo-mark" src="/logo_mf_png.png" alt="MF" width={112} height={75} /><span>DESIGN E</span><em>MODELAGEM 3D</em></span>;
}

function WhatsappIcon({ size = 18, style = {} }: { size?: number; style?: React.CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={{ display: "inline-block", verticalAlign: "middle", marginRight: size === 18 ? "6px" : "0px", ...style }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.553 4.11 1.519 5.84L0 24l6.328-1.48A11.937 11.937 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.805 0-3.52-.468-5.016-1.287l-.36-.213-3.734.873.886-3.636-.234-.373A9.956 9.956 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z" />
    </svg>
  );
}

function ServicesCarousel() {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const extendedServices = [...services, ...services];

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % services.length);
  };

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 40) {
      nextSlide();
    } else if (distance < -40) {
      prevSlide();
    }
  };

  return (
    <div 
      className="services-carousel-container reveal"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="services-carousel-header">
        <div className="carousel-dots services-dots">
          {services.map((s, idx) => (
            <button
              key={s.n}
              className={`dot ${idx === current ? "active" : ""}`}
              onClick={() => setCurrent(idx)}
              aria-label={`Ir para ${s.title}`}
            />
          ))}
        </div>
        <div className="services-carousel-nav">
          <button className="carousel-btn-nav" onClick={prevSlide} aria-label="Anterior">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button className="carousel-btn-nav" onClick={nextSlide} aria-label="Próximo">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>

      <div 
        className="services-carousel-viewport"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="services-carousel-track"
          style={{
            transform: `translateX(calc(-${current} * (100% / var(--services-visible) + var(--services-gap) / var(--services-visible))))`
          }}
        >
          {extendedServices.map((s, idx) => {
            const isOriginalIndex = (idx % services.length) === current;
            return (
              <article 
                className={`service-card ${isOriginalIndex ? "card-active" : ""}`} 
                key={`${s.n}-${idx}`}
                onClick={() => setCurrent(idx % services.length)}
                style={{
                  backgroundImage: `url('${s.image}')`,
                  backgroundPosition: s.position,
                }}
              >
                <div className="card-top">
                  <span>{s.n}</span>
                  <i>↗</i>
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <div className="benefit">{s.benefit}</div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [solid, setSolid] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isHome, setIsHome] = useState(true);
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [idea, setIdea] = useState("");
  const [expandedReview, setExpandedReview] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let scrollStopTimer: number | undefined;
    const onScroll = () => {
      setSolid(window.scrollY > 50);
      setIsHome(window.scrollY < window.innerHeight * 0.85);
      setIsScrolling(true);
      window.clearTimeout(scrollStopTimer);
      scrollStopTimer = window.setTimeout(() => {
        setIsScrolling(false);
      }, 700);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    const observer = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")), { threshold: .12 });
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(scrollStopTimer);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!menu) return;

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setMenu(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenu(false);
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [menu]);

  const handleWhatsAppSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é *${name}*.${service ? `\n*Serviço de interesse:* ${service}` : ""}${idea ? `\n\n*Detalhes da ideia:* ${idea}` : ""}`;
    const url = `https://wa.me/5527997845945?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };
  return <main>
    <header ref={headerRef} className={`header ${solid ? "solid" : ""} ${isHome ? "home" : ""} ${isScrolling ? "scrolling" : ""} ${menu ? "open" : ""}`}>
      <nav id="main-navigation" aria-label="Navegação principal" aria-hidden={!menu}><a href="#inicio" onClick={() => setMenu(false)}>Início</a><a href="#sobre" onClick={() => setMenu(false)}>Sobre nós</a><a href="#servicos" onClick={() => setMenu(false)}>Serviços</a><a href="#portfolio" onClick={() => setMenu(false)}>Portfólio</a><a href="https://www.google.com/search?sca_esv=9d29e6ff159d06e4&sxsrf=APpeQntNHpeGsUEcr_B1AwkLvtR_yH0q9A:1786975096582&kgmid=/g/11yqxxrc6r&q=MF+Design+e+Modelagem+3D+-+Impress%C3%A3o+3D+Personalizada&shem=dlvs1,epsd1,ltae,rimspwouoe&shndl=30&source=sh/x/loc/uni/m1/1&kgs=05bfb0987bfaa6de&utm_source=dlvs1,epsd1,ltae,rimspwouoe,sh/x/loc/uni/m1/1" target="_blank" rel="noreferrer" onClick={() => setMenu(false)}>Avaliações</a><a href="#contato" onClick={() => setMenu(false)}>Contato</a></nav>
      <a className="button button-gold header-cta" href="https://wa.me/5527997845945" target="_blank" rel="noreferrer"><WhatsappIcon /> Quero transformar minha ideia em 3D <span>↗</span></a>
      <button className="menu" type="button" aria-label={menu ? "Fechar menu" : "Abrir menu"} aria-controls="main-navigation" aria-expanded={menu} onClick={() => setMenu(!menu)}><i /><i /><i /></button>
    </header>

    <section className="hero" id="inicio">
      <div className="hero-photo" aria-hidden="true">
        <video className="hero-video" autoPlay muted loop playsInline preload="metadata">
          <source src="/mf-home-video.mp4" type="video/mp4" />
        </video>
      </div><div className="hero-shade" />
      <div className="hero-content reveal visible">
        <span className="logo hero-branded-logo">
          <img src="/logo_mf_png.png" alt="MF" width={220} height={150} />
          <span>DESIGN E</span>
          <em>MODELAGEM 3D</em>
        </span>
        <h1>Você imagina,<br /><span>a gente dá forma.</span></h1>
        <p className="hero-text">Transformamos fotos, ideias, referências e projetos em peças únicas por meio da modelagem e impressão 3D.</p>
        <div className="actions"><a className="button button-gold" href="https://wa.me/5527997845945" target="_blank" rel="noreferrer"><WhatsappIcon /> Quero transformar minha ideia em 3D <span>↗</span></a></div>
      </div>
      <div className="hero-spec"><span></span><span></span></div>
    </section>

    <section className="about section" id="sobre">
      <div className="section-number reveal">SOBRE A MF</div>
      <div className="about-text reveal">
        <div className="about-title">
          <p className="eyebrow dark-gold">Da ideia ao objeto</p>
          <h2>Tecnologia para criar<br />o que <span>ainda não existe.</span></h2>
        </div>
        <div className="about-copy">
          <p>A MF Design e Modelagem 3D une criatividade, precisão técnica e fabricação digital para transformar ideias em peças reais.</p>
          <p>Do brinde corporativo ao presente único, cada projeto recebe o mesmo cuidado: entender a necessidade, modelar com precisão e produzir com acabamento de vitrine.</p>
          <a href="#processo">Conheça nosso processo <span>→</span></a>
        </div>
      </div>
      <div className="about-media reveal">
        <div className="about-image-card">
          <img
            src="/Lampada_rosa.webp"
            alt="Luminária rosa personalizada produzida pela MF Design e Modelagem 3D"
            width={800}
            height={600}
          />
        </div>
      </div>
    </section>

    <section className="services section" id="servicos">
      <div className="section-number reveal">SERVIÇOS</div>
      <div className="services-head reveal"><div><p className="eyebrow gold">Quatro soluções principais</p><h2>O caminho certo<br />para cada <span>ideia.</span></h2></div><p>Você não precisa chegar com tudo resolvido. Basta uma referência, uma medida ou uma intenção.</p></div>
      <ServicesCarousel />
    </section>

    <section className="process section" id="processo">
      <div className="section-number reveal">COMO FUNCIONA</div>
      <div className="process-head reveal"><p className="eyebrow dark-gold">Simples do início ao fim</p><h2>Da primeira mensagem<br />à peça <span>na sua mão.</span></h2></div>
      <div className="timeline">{processSteps.map((step) => <div className="step reveal" key={step.n}><span className="step-icon">{step.icon}</span><div><h3>{step.title}</h3><p>{step.desc}</p></div></div>)}</div>
    </section>

    <section className="portfolio section" id="portfolio">
      <div className="section-number reveal">PROJETOS EM DESTAQUE</div>
      <div className="portfolio-head reveal">
        <div>
          <p className="eyebrow gold">Feito sob medida</p>
          <h2>Algumas ideias que já<br /><span>ganharam forma.</span></h2>
          <div className="portfolio-copy">
            <p>Cada projeto começa de um jeito diferente: uma foto, uma necessidade, uma marca ou simplesmente uma ideia.</p>
            <p>Veja algumas peças que já transformamos em realidade.</p>
          </div>
        </div>
        <a href="https://wa.me/5527997845945" target="_blank" rel="noreferrer">QUERO FAZER O MEU PROJETO <span>→</span></a>
      </div>
      <div className="project-grid">
        {projectCarousels.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>

    <section className="google-reviews section">
      <div className="section-number reveal">DEPOIMENTOS</div>
      <div className="google-reviews-head reveal">
        <div>
          <p className="eyebrow dark-gold">Experiências reais</p>
          <h2>Quem cria com a MF recomenda.</h2>
          <p className="google-reviews-intro">Nada fala melhor sobre o nosso trabalho do que a experiência de quem já transformou uma ideia em realidade com a gente.</p>
        </div>
      </div>

      <div className="google-review-grid">
        {googleReviews.map((review) => {
          const expanded = expandedReview === review.name;
          const isVictorReview = review.name === "Victor Hugo Pimentel Pozes";

          return (
            <article key={review.name} className="google-review-card reveal">
              <div className="google-review-top">
                <div className="google-review-author">
                  <span className="google-avatar">{review.name.split(" ").slice(0, 2).map(part => part[0]).join("").slice(0,2).toUpperCase()}</span>
                  <strong>{review.name}</strong>
                </div>
                <div className="google-stars" aria-label="5 de 5 estrelas" title="5 de 5 estrelas">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <svg key={idx} viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M10 1.4l2.4 4.9 5.4.8-3.9 3.8 1 5.4-4.9-2.6-4.9 2.6 1-5.4L2.2 7.1l5.4-.8L10 1.4Z" />
                    </svg>
                  ))}
                </div>
              </div>

              <p className={`google-review-text ${expanded ? "expanded" : ""}`}>{review.text}</p>

              {isVictorReview && (
                <button type="button" className="google-review-toggle" onClick={() => setExpandedReview(expanded ? null : review.name)}>
                  {expanded ? "Ler menos" : "Ler mais"}
                </button>
              )}
            </article>
          );
        })}
      </div>

      <div className="google-reviews-cta reveal">
        <a className="button button-gold" href="https://www.google.com/search?sca_esv=9d29e6ff159d06e4&sxsrf=APpeQntNHpeGsUEcr_B1AwkLvtR_yH0q9A:1786975096582&kgmid=/g/11yqxxrc6r&q=MF+Design+e+Modelagem+3D+-+Impress%C3%A3o+3D+Personalizada&shem=dlvs1,epsd1,ltae,rimspwouoe&shndl=30&source=sh/x/loc/uni/m1/1&kgs=05bfb0987bfaa6de&utm_source=dlvs1,epsd1,ltae,rimspwouoe,sh/x/loc/uni/m1/1" target="_blank" rel="noreferrer">VER MAIS AVALIAÇÕES <span>↗</span></a>
      </div>

      <style jsx>{`
        .google-reviews {
          max-width: none;
          background: linear-gradient(180deg, rgba(247,245,241,.96) 0%, rgba(255,255,255,.8) 100%);
          color: var(--studio);
          padding-left: max(4vw, calc((100vw - 1320px) / 2));
          padding-right: max(4vw, calc((100vw - 1320px) / 2));
          border-top: 1px solid rgba(18,19,22,.08);
          border-bottom: 1px solid rgba(18,19,22,.08);
        }

        .google-reviews .section-number {
          color: var(--gray);
        }

        .google-reviews-head {
          margin: 65px 0 30px;
        }

        .google-reviews-head h2 {
          font: 600 clamp(2.5rem, 4.4vw, 4.2rem)/1.02 var(--font-display);
          letter-spacing: -0.045em;
          margin: 18px 0 0;
        }

        .google-review-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .google-review-card {
          background: rgba(255,255,255,.7);
          border: 1px solid rgba(18,19,22,.08);
          border-radius: 18px;
          padding: 22px 20px;
          box-shadow: 0 12px 28px rgba(18,19,22,.05);
        }

        .google-review-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 18px;
        }

        .google-review-author {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 0;
        }

        .google-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: rgba(198,161,91,.12);
          border: 1px solid rgba(198,161,91,.38);
          color: var(--gold-dark);
          font: 700 .68rem var(--font-mono);
          letter-spacing: .08em;
          flex-shrink: 0;
        }

        .google-review-top strong {
          display: block;
          font: 600 1rem var(--font-display);
          letter-spacing: -0.03em;
          color: var(--studio);
          overflow-wrap: anywhere;
        }

        .google-stars {
          display: flex;
          align-items: center;
          gap: 4px;
          flex-shrink: 0;
        }

        .google-stars svg {
          width: 16px;
          height: 16px;
          fill: var(--gold);
        }

        .google-review-text {
          margin: 0;
          color: var(--ink);
          font-size: 1rem;
          line-height: 1.7;
          white-space: pre-line;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 4;
          line-clamp: 4;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .google-review-text.expanded {
          display: block;
          -webkit-line-clamp: unset;
          line-clamp: unset;
          overflow: visible;
          text-overflow: clip;
        }

        .google-review-toggle {
          margin-top: 12px;
          border: none;
          background: transparent;
          color: var(--gold-dark);
          font: 600 .9rem var(--font-display);
          letter-spacing: -0.02em;
          padding: 0;
          cursor: pointer;
        }

        .google-review-toggle:hover {
          text-decoration: underline;
        }

        .google-reviews-cta {
          display: flex;
          justify-content: center;
          margin-top: 34px;
        }

        .google-reviews-cta .button {
          gap: 18px;
        }

        @media (max-width: 1024px) {
          .google-review-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .google-review-grid {
            grid-template-columns: 1fr;
          }

          .google-review-card {
            padding: 18px 16px;
          }

          .google-review-top {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>

    <section className="contact section" id="contato">
      <div className="contact-copy reveal">
        <p className="eyebrow dark-gold">Chamada final</p>
        <h2>Tem uma ideia?<br /><span>Vamos transformá-la em realidade.</span></h2>
        <p>Envie sua foto, referência, medida, projeto ou simplesmente conte o que você gostaria de criar.</p>
        <p>Nossa equipe analisa sua ideia e orienta você sobre as melhores possibilidades de produção.</p>
        <a className="contact-whatsapp-btn" href="https://wa.me/5527997845945" target="_blank" rel="noreferrer">
          <WhatsappIcon size={22} />
          <span>PEDIR MEU ORÇAMENTO PELO WHATSAPP</span>
          <i>↗</i>
        </a>
      </div>

      <form className="form reveal" onSubmit={handleWhatsAppSubmit}>
        <label className="form-group">
          <span>SEU NOME</span>
          <input required value={name} onChange={e => setName(e.target.value)} placeholder="Como podemos chamar você?" />
        </label>
        <label className="form-group">
          <span>TIPO DE SERVIÇO</span>
          <select value={service} onChange={e => setService(e.target.value)}>
            <option value="">Selecione uma opção (opcional)</option>
            <option value="Modelagem 3D">Modelagem 3D</option>
            <option value="Impressão 3D">Impressão 3D</option>
            <option value="Personalização">Personalização</option>
            <option value="Projeto corporativo">Projeto corporativo</option>
          </select>
        </label>
        <label className="form-group">
          <span>SUA IDEIA</span>
          <textarea rows={3} value={idea} onChange={e => setIdea(e.target.value)} placeholder="Conte brevemente o que você precisa..." />
        </label>
        <button className="button button-gold" type="submit">
          <WhatsappIcon size={18} /> Enviar para o WhatsApp <span>↗</span>
        </button>
      </form>
    </section>

    <footer>
      <div className="footer-top">
        <Logo />
        <p>Ideias, fotos e projetos transformados em peças únicas através da modelagem e impressão 3D.</p>
        <p className="footer-services">Personalizados • Pets • Miniaturas • Brindes • Projetos corporativos • Peças sob medida</p>
      </div>
      <div className="footer-links">
        <div>
          <span>NAVEGAÇÃO</span>
          <a href="#sobre">Sobre nós</a>
          <a href="#servicos">Serviços</a>
          <a href="#portfolio">Portfólio</a>
        </div>
        <div>
          <span>CONTATO</span>
          <a href="https://wa.me/5527997845945" target="_blank" rel="noreferrer">WhatsApp</a>
          <a href="https://www.instagram.com/mfdesign_model/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="mailto:contato@mfdesign.com.br">E-mail</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 MF DESIGN E MODELAGEM 3D</span>
        <a href="https://ejuvv.com/" target="_blank" rel="noreferrer">FEITO POR EJUVV ↗</a>
        <a href="#inicio">VOLTAR AO TOPO ↑</a>
      </div>
    </footer>

    <a className="floating" href="https://wa.me/5527997845945" target="_blank" rel="noreferrer" aria-label="Falar conosco pelo WhatsApp">
      <WhatsappIcon size={28} />
    </a>
  </main>
}
