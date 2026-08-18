"use client";

import { FormEvent, useEffect, useState } from "react";

const services = [
  { n: "01", title: "Modelagem 3D", text: "Criamos ou adaptamos arquivos tridimensionais com medidas, encaixes e detalhes pensados para o seu uso.", benefit: "Da referência ao arquivo pronto" },
  { n: "02", title: "Impressão 3D", text: "Produção em PLA, PETG ou resina, com controle de material, escala, resistência e acabamento.", benefit: "Precisão camada por camada" },
  { n: "03", title: "Personalização", text: "Presentes, objetos, personagens e peças exclusivas que não existem prontas em nenhuma prateleira.", benefit: "Uma peça verdadeiramente sua" },
  { n: "04", title: "Projetos corporativos", text: "Brindes, protótipos e soluções sob medida para marcas, empresas, eventos e ativações.", benefit: "Sua marca em forma de objeto" },
];

const process = [
  ["01", "Você envia a ideia", "Referência, medida ou uma descrição inicial."],
  ["02", "Modelagem 3D", "A peça é desenhada e validada digitalmente."],
  ["03", "Impressão", "Fatiamento e produção camada por camada."],
  ["04", "Acabamento", "Lixamento, pintura ou tratamento quando necessário."],
  ["05", "Entrega", "Retirada ou envio da sua peça pronta."],
];

const projectCarousels = [
  {
    id: "main",
    isMain: true,
    slides: [
      {
        image: "/hero-3d.png",
        tag: "SOB ENCOMENDA",
        category: "OBJETO DECORATIVO",
        title: "Escultura Entrelaços",
        specs: "PLA PREMIUM · 28 CM · 14H IMPRESSÃO",
        cropClass: "crop-a"
      },
      {
        image: "/portfolio-trophy.png",
        tag: "SOB ENCOMENDA",
        category: "ARTE & DECORAÇÃO",
        title: "Escultura Orgânica Gold",
        specs: "RESINA PREMIUM · 32 CM · PINTURA MANUAL",
        cropClass: "crop-b"
      },
      {
        image: "/portfolio-prototype.png",
        tag: "SOB ENCOMENDA",
        category: "MODELAGEM CONCEITUAL",
        title: "Estrutura Paramétrica",
        specs: "PETG FOSCO · ESC. 1:1 · ACABAMENTO PREMIUM",
        cropClass: "crop-c"
      }
    ]
  },
  {
    id: "second",
    isMain: false,
    slides: [
      {
        image: "/portfolio-prototype.png",
        tag: "PERSONALIZADO",
        category: "PROTÓTIPO TÉCNICO",
        title: "Forma Modular",
        specs: "PETG · ESC. 1:4 · ACABAMENTO FOSCO",
        cropClass: "crop-b"
      },
      {
        image: "/hero-3d.png",
        tag: "PERSONALIZADO",
        category: "ENGENHARIA REVERSA",
        title: "Engrenagem Helicoidal",
        specs: "ABS REFORÇADO · ENCAIXE DE PRECISÃO",
        cropClass: "crop-a"
      }
    ]
  },
  {
    id: "third",
    isMain: false,
    slides: [
      {
        image: "/portfolio-trophy.png",
        tag: "CORPORATIVO",
        category: "PEÇA DE MARCA",
        title: "Troféu Movimento",
        specs: "RESINA · 22 CM · PINTURA MANUAL",
        cropClass: "crop-c"
      },
      {
        image: "/about-3d.png",
        tag: "CORPORATIVO",
        category: "BRINDE EXCLUSIVO",
        title: "Luminária de Marca",
        specs: "PLA TRANSLÚCIDO · LED INTEGRADO",
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

  return (
    <article className={`project ${project.isMain ? "project-main" : ""} reveal`}>
      <div className={`project-image ${active.cropClass}`} style={{ backgroundImage: `url('${active.image}')` }}>
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

function Logo({ small = false }: { small?: boolean }) { return <span className={`logo ${small ? "logo-small" : ""}`}><b>MF</b><span>DESIGN E</span><em>MODELAGEM 3D</em></span> }

function WhatsappIcon({ size = 18, style = {} }: { size?: number; style?: React.CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={{ display: "inline-block", verticalAlign: "middle", marginRight: size === 18 ? "6px" : "0px", ...style }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.553 4.11 1.519 5.84L0 24l6.328-1.48A11.937 11.937 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.805 0-3.52-.468-5.016-1.287l-.36-.213-3.734.873.886-3.636-.234-.373A9.956 9.956 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline-block", verticalAlign: "middle" }}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function EmailIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline-block", verticalAlign: "middle" }}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );
}

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [solid, setSolid] = useState(false);
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [idea, setIdea] = useState("");

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 50); onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    const observer = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")), { threshold: .12 });
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => { window.removeEventListener("scroll", onScroll); observer.disconnect() };
  }, []);

  const handleWhatsAppSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é *${name}*.${service ? `\n*Serviço de interesse:* ${service}` : ""}${idea ? `\n\n*Detalhes da ideia:* ${idea}` : ""}`;
    const url = `https://wa.me/5527997845945?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };
  return <main>
    <header className={`header ${solid ? "solid" : ""} ${menu ? "open" : ""}`}>
      <a href="#inicio" aria-label="MF Design e Modelagem 3D - Início"><Logo small /></a>
      <nav aria-label="Navegação principal"><a href="#inicio">Início</a><a href="#sobre">Sobre nós</a><a href="#servicos">Serviços</a><a href="#portfolio">Portfólio</a><a href="#contato">Contato</a></nav>
      <a className="button button-gold header-cta" href="https://wa.me/5527997845945" target="_blank" rel="noreferrer"><WhatsappIcon /> Fale conosco <span>↗</span></a>
      <button className="menu" aria-label="Abrir menu" aria-expanded={menu} onClick={() => setMenu(!menu)}><i /><i /></button>
    </header>

    <section className="hero" id="inicio">
      <div className="hero-photo" /><div className="hero-shade" />
      <div className="hero-content reveal visible">
        <p className="eyebrow gold">Modelagem e impressão 3D personalizada</p>
        <Logo />
        <h1>Você imagina,<br /><span>a gente dá forma.</span></h1>
        <p className="hero-text">Transformamos referências, medidas e ideias em objetos físicos feitos especialmente para você.</p>
        <div className="actions"><a className="button button-gold" href="https://wa.me/5527997845945" target="_blank" rel="noreferrer"><WhatsappIcon /> Fale conosco <span>↗</span></a></div>
      </div>
      <div className="hero-spec"><span></span><span></span></div>
    </section>

    <section className="about section" id="sobre">
      <div className="section-number reveal"><span /> SOBRE A MF</div>
      <div className="about-title reveal"><p className="eyebrow dark-gold">Da ideia ao objeto</p><h2>Tecnologia para criar<br />o que <span>ainda não existe.</span></h2></div>
      <div className="about-copy reveal"><p>A MF Design e Modelagem 3D une criatividade, precisão técnica e fabricação digital para transformar ideias em peças reais.</p><p>Do brinde corporativo ao presente único, cada projeto recebe o mesmo cuidado: entender a necessidade, modelar com precisão e produzir com acabamento de vitrine.</p><a href="#processo">Conheça nosso processo <span>→</span></a></div>
    </section>

    <section className="services section" id="servicos">
      <div className="section-number reveal"><span /> SERVIÇOS</div>
      <div className="services-head reveal"><div><p className="eyebrow gold">Quatro soluções principais</p><h2>O caminho certo<br />para cada <span>ideia.</span></h2></div><p>Você não precisa chegar com tudo resolvido. Basta uma referência, uma medida ou uma intenção.</p></div>
      <div className="service-grid">{services.map(s => <article className="service-card reveal" key={s.n}><div className="card-top"><span>{s.n}</span><i>↗</i></div><h3>{s.title}</h3><p>{s.text}</p><div className="benefit">{s.benefit}</div></article>)}</div>
    </section>

    <section className="process section" id="processo">
      <div className="section-number reveal">03 <span /> COMO FUNCIONA</div>
      <div className="process-head reveal"><p className="eyebrow dark-gold">Simples do início ao fim</p><h2>Da primeira mensagem<br />à peça <span>na sua mão.</span></h2></div>
      <div className="timeline">{process.map(([n, t, d]) => <div className="step reveal" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></div>)}</div>
    </section>

    <section className="portfolio section" id="portfolio">
      <div className="section-number reveal">04 <span /> PROJETOS EM DESTAQUE</div>
      <div className="portfolio-head reveal"><div><p className="eyebrow gold">Feito sob medida</p><h2>Ideias que ganharam<br /><span>forma e presença.</span></h2></div><a href="https://wa.me/5527997845945" target="_blank" rel="noreferrer">Iniciar um projeto <span>→</span></a></div>
      <div className="project-grid">
        {projectCarousels.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>

    <section className="quote"><div className="quote-mark">“</div><blockquote className="reveal">Você imagina.<br />A gente dá <span>forma.</span></blockquote><p className="reveal">PERSONALIZAÇÃO REAL · PRECISÃO TÉCNICA · ACABAMENTO CUIDADO</p></section>

    <section className="contact section" id="contato">
      <div className="contact-copy reveal">
        <p className="eyebrow dark-gold">Vamos criar juntos?</p>
        <h2>Conte a sua ideia.<br /><span>Nós cuidamos do resto.</span></h2>
        <p>Envie uma referência, medida ou descrição. Retornaremos com as primeiras orientações.</p>
        <a className="instagram-btn" href="https://www.instagram.com/mfdesign_model/" target="_blank" rel="noreferrer">
          <InstagramIcon size={22} />
          <span>
            <small>NOSSO INSTAGRAM</small>
            @mfdesign_model
          </span>
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
        <p>Ideias únicas, transformadas em objetos reais através da modelagem e impressão 3D.</p>
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
        <a href="#inicio">VOLTAR AO TOPO ↑</a>
      </div>
    </footer>

    <a className="floating" href="https://wa.me/5527997845945" target="_blank" rel="noreferrer" aria-label="Falar conosco pelo WhatsApp">
      <WhatsappIcon size={28} />
    </a>
  </main>
}
