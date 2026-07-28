"use client";

import { FormEvent, useEffect, useState } from "react";

const services = [
  { n:"01", title:"Modelagem 3D", text:"Criamos ou adaptamos arquivos tridimensionais com medidas, encaixes e detalhes pensados para o seu uso.", benefit:"Da referência ao arquivo pronto" },
  { n:"02", title:"Impressão 3D", text:"Produção em PLA, PETG ou resina, com controle de material, escala, resistência e acabamento.", benefit:"Precisão camada por camada" },
  { n:"03", title:"Personalização", text:"Presentes, objetos, personagens e peças exclusivas que não existem prontas em nenhuma prateleira.", benefit:"Uma peça verdadeiramente sua" },
  { n:"04", title:"Projetos corporativos", text:"Brindes, protótipos e soluções sob medida para marcas, empresas, eventos e ativações.", benefit:"Sua marca em forma de objeto" },
];

const process = [
  ["01","Você envia a ideia","Referência, medida ou uma descrição inicial."],
  ["02","Modelagem 3D","A peça é desenhada e validada digitalmente."],
  ["03","Impressão","Fatiamento e produção camada por camada."],
  ["04","Acabamento","Lixamento, pintura ou tratamento quando necessário."],
  ["05","Entrega","Retirada ou envio da sua peça pronta."],
];

function Logo({small=false}:{small?:boolean}) { return <span className={`logo ${small?"logo-small":""}`}><b>MF</b><span>DESIGN E</span><em>MODELAGEM 3D</em></span> }

export default function Home(){
  const [menu,setMenu]=useState(false);
  const [solid,setSolid]=useState(false);
  const [sent,setSent]=useState(false);
  useEffect(()=>{
    const onScroll=()=>setSolid(window.scrollY>50); onScroll(); window.addEventListener("scroll",onScroll,{passive:true});
    const observer=new IntersectionObserver(entries=>entries.forEach(e=>e.isIntersecting&&e.target.classList.add("visible")),{threshold:.12});
    document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
    return()=>{window.removeEventListener("scroll",onScroll);observer.disconnect()};
  },[]);
  const submit=(e:FormEvent)=>{e.preventDefault();setSent(true)};
  return <main>
    <header className={`header ${solid?"solid":""} ${menu?"open":""}`}>
      <a href="#inicio" aria-label="MF Design e Modelagem 3D - Início"><Logo small/></a>
      <nav aria-label="Navegação principal"><a href="#inicio">Início</a><a href="#sobre">Sobre nós</a><a href="#servicos">Serviços</a><a href="#portfolio">Portfólio</a><a href="#contato">Contato</a></nav>
      <a className="button button-gold header-cta" href="#contato">Solicitar orçamento <span>↗</span></a>
      <button className="menu" aria-label="Abrir menu" aria-expanded={menu} onClick={()=>setMenu(!menu)}><i/><i/></button>
    </header>

    <section className="hero" id="inicio">
      <div className="hero-photo"/><div className="hero-shade"/>
      <div className="hero-content reveal visible">
        <p className="eyebrow gold">Modelagem e impressão 3D personalizada</p>
        <Logo/>
        <h1>Qualquer ideia,<br/><span>impressa de verdade.</span></h1>
        <p className="hero-text">Transformamos referências, medidas e ideias em objetos físicos feitos especialmente para você.</p>
        <div className="actions"><a className="button button-gold" href="#contato">Solicitar orçamento <span>↗</span></a><a className="ghost" href="#servicos">Conhecer serviços <span>↓</span></a></div>
      </div>
      <div className="hero-spec"><span>PEÇA 001</span><span>PLA · 28 CM · 14H IMPRESSÃO</span></div>
    </section>

    <section className="about section" id="sobre">
      <div className="section-number reveal">01 <span/> SOBRE A MF</div>
      <div className="about-title reveal"><p className="eyebrow dark-gold">Da ideia ao objeto</p><h2>Tecnologia para criar<br/>o que <span>ainda não existe.</span></h2></div>
      <div className="about-copy reveal"><p>A MF Design e Modelagem 3D une criatividade, precisão técnica e fabricação digital para transformar ideias em peças reais.</p><p>Do brinde corporativo ao presente único, cada projeto recebe o mesmo cuidado: entender a necessidade, modelar com precisão e produzir com acabamento de vitrine.</p><a href="#processo">Conheça nosso processo <span>→</span></a></div>
      <div className="metrics reveal"><div><strong>100%</strong><span>PERSONALIZÁVEL</span></div><div><strong>3</strong><span>MATERIAIS PRINCIPAIS</span></div><div><strong>1:1</strong><span>ATENDIMENTO DIRETO</span></div></div>
    </section>

    <section className="services section" id="servicos">
      <div className="section-number reveal">02 <span/> SERVIÇOS</div>
      <div className="services-head reveal"><div><p className="eyebrow gold">Quatro soluções principais</p><h2>O caminho certo<br/>para cada <span>ideia.</span></h2></div><p>Você não precisa chegar com tudo resolvido. Basta uma referência, uma medida ou uma intenção.</p></div>
      <div className="service-grid">{services.map(s=><article className="service-card reveal" key={s.n}><div className="card-top"><span>{s.n}</span><i>↗</i></div><h3>{s.title}</h3><p>{s.text}</p><div className="benefit">{s.benefit}</div></article>)}</div>
    </section>

    <section className="process section" id="processo">
      <div className="section-number reveal">03 <span/> COMO FUNCIONA</div>
      <div className="process-head reveal"><p className="eyebrow dark-gold">Simples do início ao fim</p><h2>Da primeira mensagem<br/>à peça <span>na sua mão.</span></h2></div>
      <div className="timeline">{process.map(([n,t,d])=><div className="step reveal" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></div>)}</div>
    </section>

    <section className="portfolio section" id="portfolio">
      <div className="section-number reveal">04 <span/> PROJETOS EM DESTAQUE</div>
      <div className="portfolio-head reveal"><div><p className="eyebrow gold">Feito sob medida</p><h2>Ideias que ganharam<br/><span>forma e presença.</span></h2></div><a href="#contato">Iniciar um projeto <span>→</span></a></div>
      <div className="project-grid">
        <article className="project project-main reveal"><div className="project-image crop-a"><span>SOB ENCOMENDA</span></div><div className="project-info"><p>OBJETO DECORATIVO</p><h3>Escultura Entrelaços</h3><div>PLA PREMIUM · 28 CM · 14H IMPRESSÃO</div></div></article>
        <article className="project reveal"><div className="project-image crop-b"><span>PERSONALIZADO</span></div><div className="project-info"><p>PROTÓTIPO</p><h3>Forma Modular</h3><div>PETG · ESC. 1:4 · ACABAMENTO FOSCO</div></div></article>
        <article className="project reveal"><div className="project-image crop-c"><span>CORPORATIVO</span></div><div className="project-info"><p>PEÇA DE MARCA</p><h3>Troféu Movimento</h3><div>RESINA · 22 CM · PINTURA MANUAL</div></div></article>
      </div>
    </section>

    <section className="quote"><div className="quote-mark">“</div><blockquote className="reveal">Você imagina.<br/>A gente dá <span>forma.</span></blockquote><p className="reveal">PERSONALIZAÇÃO REAL · PRECISÃO TÉCNICA · ACABAMENTO CUIDADO</p></section>

    <section className="contact section" id="contato">
      <div className="contact-copy reveal"><p className="eyebrow dark-gold">Vamos criar juntos?</p><h2>Conte a sua ideia.<br/><span>Nós cuidamos do resto.</span></h2><p>Envie uma referência, medida ou descrição. Retornamos com as primeiras orientações e uma estimativa para o projeto.</p><a className="whatsapp" href="https://wa.me/5500000000000" target="_blank" rel="noreferrer"><b>●</b><span><small>ATENDIMENTO DIRETO</small>Falar pelo WhatsApp</span><i>↗</i></a></div>
      <form className="form reveal" onSubmit={submit}><label>SEU NOME<input required placeholder="Como podemos chamar você?"/></label><label>CONTATO<input required placeholder="WhatsApp ou e-mail"/></label><label>TIPO DE SERVIÇO<select required defaultValue=""><option value="" disabled>Selecione uma opção</option><option>Modelagem 3D</option><option>Impressão 3D</option><option>Personalização</option><option>Projeto corporativo</option></select></label><label>SUA IDEIA<textarea rows={3} placeholder="Conte brevemente o que você precisa..."/></label><button className="button button-dark">Enviar solicitação <span>→</span></button>{sent&&<p className="success" role="status">Recebemos sua ideia. Em breve entraremos em contato.</p>}</form>
    </section>

    <footer><div className="footer-top"><Logo/><p>Ideias únicas, transformadas em objetos reais através da modelagem e impressão 3D.</p></div><div className="footer-links"><div><span>NAVEGAÇÃO</span><a href="#sobre">Sobre nós</a><a href="#servicos">Serviços</a><a href="#portfolio">Portfólio</a></div><div><span>CONTATO</span><a href="#contato">WhatsApp</a><a href="#contato">Instagram</a><a href="#contato">E-mail</a></div></div><div className="footer-bottom"><span>© 2026 MF DESIGN E MODELAGEM 3D</span><a href="#inicio">VOLTAR AO TOPO ↑</a></div></footer>
    <a className="floating" href="https://wa.me/5500000000000" target="_blank" rel="noreferrer" aria-label="Falar conosco pelo WhatsApp">● <span>Fale conosco</span></a>
  </main>
}
