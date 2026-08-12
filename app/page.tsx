/* eslint-disable @next/next/no-img-element */

const whatsappUrl =
  "https://wa.me/551532835300?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20MWTA%20e%20gostaria%20de%20solicitar%20uma%20avalia%C3%A7%C3%A3o.";

const services = [
  {
    number: "01",
    title: "Alarme monitorado",
    text: "Detecção de movimentações e situações de risco com acompanhamento remoto e resposta rápida.",
  },
  {
    number: "02",
    title: "Câmeras de vigilância",
    text: "Videomonitoramento em alta definição, gravação segura e acesso às imagens pelo celular.",
  },
  {
    number: "03",
    title: "Portaria",
    text: "Controle de acesso planejado para empresas, condomínios, residências e eventos.",
  },
  {
    number: "04",
    title: "Cerca elétrica",
    text: "Proteção perimetral instalada de acordo com as características e os riscos de cada imóvel.",
  },
  {
    number: "05",
    title: "Concertina",
    text: "Barreira física que reforça muros e perímetros e ajuda a inibir acessos indevidos.",
  },
  {
    number: "06",
    title: "Ronda motorizada",
    text: "Rondas periódicas de apoio para reforçar a prevenção e verificar situações suspeitas.",
  },
  {
    number: "07",
    title: "Rastreamento veicular",
    text: "Acompanhamento de veículos e frotas por GPS, com localização e alertas em tempo real.",
  },
  {
    number: "08",
    title: "Monitoramento integrado",
    text: "Câmeras, alarmes e suporte combinados em uma solução para residências e empresas.",
  },
];

const projects = [
  {
    src: "/images/projetos/equipamentos-alarme-intelbras.jpg",
    alt: "Equipamentos de alarme Intelbras utilizados pela MWTA",
    label: "Alarmes",
  },
  {
    src: "/images/projetos/antes-e-depois-cameras-seguranca.jpg",
    alt: "Antes e depois de uma instalação de câmeras de segurança",
    label: "Videomonitoramento",
  },
  {
    src: "/images/projetos/central-seguranca-intelbras-instalada.jpg",
    alt: "Central de segurança Intelbras instalada pela MWTA",
    label: "Centrais de segurança",
  },
  {
    src: "/images/projetos/cerca-eletrica-instalada-no-muro.jpg",
    alt: "Cerca elétrica instalada sobre muro",
    label: "Proteção perimetral",
  },
  {
    src: "/images/projetos/cameras-intelbras-mibo-em-caixas.jpg",
    alt: "Câmeras Intelbras Mibo preparadas para instalação",
    label: "Tecnologia Intelbras",
  },
  {
    src: "/images/projetos/placa-cerca-eletrica-area-externa.jpg",
    alt: "Sinalização de cerca elétrica em área externa",
    label: "Prevenção",
  },
];

const clients = [
  ["cliente-bee-toys.png", "Bee Toys"],
  ["cliente-adijomar.png", "Adijomar"],
  ["cliente-sylvaz.png", "Sylvaz"],
  ["cliente-grupo-krahenbuhl.png", "Grupo Krahenbuhl"],
  ["cliente-auto-posto-ceu-azul.png", "Auto Posto Céu Azul"],
  ["cliente-wi-sacarias.png", "WI Sacarias"],
  ["cliente-samba-toys.png", "Samba Toys"],
  ["cliente-roma-brinquedos.png", "Roma Brinquedos"],
  ["cliente-silmar-brinquedos.png", "Silmar Brinquedos"],
  ["cliente-xypd.png", "XYPD"],
  ["cliente-usual-plastic-brinquedos.png", "Usual Plastic Brinquedos"],
  ["cliente-cotiplas.png", "Cotiplás"],
];

const testimonials = [
  {
    quote:
      "Atendimento rápido e eficaz. Se você precisa de uma empresa com profissionalismo, competência e segurança, está no lugar certo!",
    name: "Davi Silvestre",
  },
  {
    quote: "Sensacional o atendimento do Thiago! Muito bom!",
    name: "Rodrigo Ribeiro",
  },
  {
    quote: "Empresa nota 10, profissionais bastante qualificados.",
    name: "Marcelo Martins",
  },
  {
    quote: "Atendimento humanizado e com excelência no suporte.",
    name: "Eduardo Gazzola",
  },
];

const faqs = [
  {
    question: "Quais serviços a MWTA oferece?",
    answer:
      "Portaria, alarme monitorado, câmeras de vigilância, cerca elétrica, concertina, ronda motorizada, rastreamento veicular e monitoramento para residências e empresas.",
  },
  {
    question: "A MWTA atende residências e empresas?",
    answer:
      "Sim. Cada projeto é desenvolvido de acordo com o imóvel, a rotina e os riscos identificados, seja para residências, empresas ou condomínios.",
  },
  {
    question: "É possível acompanhar as câmeras pelo celular?",
    answer:
      "Sim, conforme a solução escolhida. O sistema pode permitir acesso às imagens ao vivo, gravações e alertas diretamente pelo celular.",
  },
  {
    question: "A MWTA oferece suporte depois da instalação?",
    answer:
      "Sim. A equipe oferece orientação, suporte técnico, manutenção e apoio para futuras ampliações do sistema.",
  },
  {
    question: "Como solicitar uma avaliação?",
    answer:
      "Basta falar com a equipe pelo WhatsApp (15) 3283-5300. A MWTA conhecerá sua necessidade e indicará a solução mais adequada.",
  },
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>

      <header className="site-header">
        <div className="topbar">
          <div className="shell topbar-inner">
            <p>Há 14 anos protegendo Laranjal Paulista e região</p>
            <a href="tel:+551532835300">(15) 3283-5300</a>
          </div>
        </div>
        <div className="nav-shell shell">
          <a className="brand" href="#inicio" aria-label="MWTA — página inicial">
            <img src="/images/marca/logo-mwta-capa.png" alt="MWTA Segurança" />
          </a>
          <nav aria-label="Navegação principal">
            <a href="#sobre">A MWTA</a>
            <a href="#servicos">Serviços</a>
            <a href="#projetos">Projetos</a>
            <a href="#clientes">Clientes</a>
            <a href="#contato">Contato</a>
          </nav>
          <a className="button button-small button-dark" href={whatsappUrl} target="_blank" rel="noreferrer">
            Pedir avaliação <ArrowIcon />
          </a>
        </div>
      </header>

      <main id="conteudo">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-image" aria-hidden="true" />
          <div className="hero-overlay" aria-hidden="true" />
          <div className="shell hero-content">
            <div className="hero-copy">
              <p className="eyebrow eyebrow-light">Segurança eletrônica e patrimonial</p>
              <h1 id="hero-title">Segurança e tranquilidade para o que importa.</h1>
              <p className="hero-lead">
                Há 14 anos, a MWTA protege pessoas, empresas e patrimônios com tecnologia confiável,
                atendimento próximo e soluções feitas para cada necessidade.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
                  Solicite uma avaliação <ArrowIcon />
                </a>
                <a className="text-link text-link-light" href="#servicos">
                  Conheça as soluções <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
            <aside className="hero-note" aria-label="Destaque de atendimento">
              <span className="pulse" aria-hidden="true" />
              <div>
                <strong>Proteção sob medida</strong>
                <p>Da avaliação ao suporte, uma equipe perto de você.</p>
              </div>
            </aside>
          </div>
        </section>

        <section className="trust-bar" aria-label="Diferenciais da MWTA">
          <div className="shell trust-grid">
            <div><strong>14</strong><span>anos de história</span></div>
            <div><strong>24h</strong><span>soluções monitoradas</span></div>
            <div><strong>360°</strong><span>proteção integrada</span></div>
            <div><strong>Local</strong><span>atendimento próximo</span></div>
          </div>
        </section>

        <section className="section about" id="sobre">
          <div className="shell about-grid">
            <div className="about-mark" aria-hidden="true">
              <span>14</span>
              <p>anos construindo confiança</p>
            </div>
            <div className="section-copy">
              <p className="eyebrow">Sobre a MWTA</p>
              <h2>Experiência local. Proteção pensada para você.</h2>
              <p className="lead-copy">
                A MWTA nasceu com o propósito de proporcionar mais segurança e tranquilidade para
                famílias e empresas. Nossa história é construída com confiança, responsabilidade e
                atendimento personalizado.
              </p>
              <p>
                Com sede em Laranjal Paulista, acompanhamos todas as etapas: avaliação do local,
                projeto, instalação, monitoramento e suporte técnico. O resultado é uma solução que
                respeita a rotina, o espaço e as prioridades de cada cliente.
              </p>
              <div className="values-row" aria-label="Valores da MWTA">
                <span>Confiança</span><span>Responsabilidade</span><span>Proximidade</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section services" id="servicos">
          <div className="shell">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">Soluções completas</p>
                <h2>Uma camada de proteção para cada necessidade.</h2>
              </div>
              <p>
                Projetos residenciais e empresariais que combinam prevenção, tecnologia e resposta
                para cuidar do seu espaço todos os dias.
              </p>
            </div>
            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <span className="service-number">{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a href={`${whatsappUrl}%20Tenho%20interesse%20em%20${encodeURIComponent(service.title)}.`} target="_blank" rel="noreferrer" aria-label={`Consultar sobre ${service.title}`}>
                    Consultar <ArrowIcon />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="monitoring-banner" aria-label="Monitoramento MWTA">
          <div className="monitoring-image" aria-hidden="true" />
          <div className="shell monitoring-content">
            <p className="eyebrow eyebrow-light">Tecnologia que aproxima</p>
            <h2>Veja, acompanhe e proteja, mesmo à distância.</h2>
            <p>
              Soluções integradas permitem acompanhar câmeras, receber alertas e manter o controle
              da sua residência ou empresa pelo celular.
            </p>
            <a className="button button-outline" href={whatsappUrl} target="_blank" rel="noreferrer">
              Conversar com um especialista <ArrowIcon />
            </a>
          </div>
        </section>

        <section className="section projects" id="projetos">
          <div className="shell">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">Projetos e instalações</p>
                <h2>Segurança aplicada na prática.</h2>
              </div>
              <p>
                Equipamentos e instalações reais da MWTA, planejados para uma proteção eficiente e
                adequada às características de cada local.
              </p>
            </div>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <figure className={`project-card project-${index + 1}`} key={project.src}>
                  <img src={project.src} alt={project.alt} loading="lazy" />
                  <figcaption>{project.label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section process-section">
          <div className="shell process-grid">
            <div className="process-intro">
              <p className="eyebrow">Como trabalhamos</p>
              <h2>Da primeira conversa à proteção em funcionamento.</h2>
              <p>Um processo claro, acompanhado pela equipe MWTA em todas as etapas.</p>
              <a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">
                Começar uma avaliação <ArrowIcon />
              </a>
            </div>
            <ol className="process-list">
              <li><span>01</span><div><h3>Entendemos sua necessidade</h3><p>Conversamos sobre o imóvel, a rotina e os pontos de atenção.</p></div></li>
              <li><span>02</span><div><h3>Planejamos a solução</h3><p>Selecionamos os recursos mais adequados para o seu projeto.</p></div></li>
              <li><span>03</span><div><h3>Instalamos com cuidado</h3><p>Nossa equipe executa e testa todo o sistema no local.</p></div></li>
              <li><span>04</span><div><h3>Continuamos por perto</h3><p>Oferecemos orientação, suporte, manutenção e futuras ampliações.</p></div></li>
            </ol>
          </div>
        </section>

        <section className="section clients" id="clientes">
          <div className="shell">
            <div className="section-heading centered-heading">
              <p className="eyebrow">Confiança construída</p>
              <h2>Empresas que já contam com a MWTA.</h2>
              <p>Relacionamentos duradouros são parte da nossa história.</p>
            </div>
            <div className="logos-grid">
              {clients.map(([file, name]) => (
                <div className="logo-card" key={file}>
                  <img src={`/images/clientes/${file}`} alt={`Logo ${name}`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section testimonials" aria-labelledby="testimonials-title">
          <div className="shell">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">Quem escolhe, recomenda</p>
                <h2 id="testimonials-title">Atendimento que gera tranquilidade.</h2>
              </div>
              <div className="rating" aria-label="Avaliações com cinco estrelas">
                <span aria-hidden="true">★★★★★</span>
                <p>Avaliações de clientes</p>
              </div>
            </div>
            <div className="testimonials-grid">
              {testimonials.map((testimonial) => (
                <figure className="quote-card" key={testimonial.name}>
                  <blockquote>“{testimonial.quote}”</blockquote>
                  <figcaption><span>{testimonial.name.charAt(0)}</span>{testimonial.name}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section faq-section" id="duvidas">
          <div className="shell faq-grid">
            <div className="faq-intro">
              <p className="eyebrow">Perguntas frequentes</p>
              <h2>Informação também traz segurança.</h2>
              <p>Não encontrou sua dúvida? Nossa equipe conversa com você pelo WhatsApp.</p>
              <a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">
                Falar com a MWTA <ArrowIcon />
              </a>
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <details key={faq.question} open={index === 0}>
                  <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contato">
          <div className="shell contact-grid">
            <div className="contact-copy">
              <p className="eyebrow eyebrow-light">Fale com a MWTA</p>
              <h2>Vamos proteger o que é importante para você?</h2>
              <p>
                Conte sua necessidade. Nossa equipe avalia o local e apresenta uma solução
                personalizada para sua residência ou empresa.
              </p>
              <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
                Solicitar orçamento pelo WhatsApp <ArrowIcon />
              </a>
            </div>
            <address className="contact-card">
              <span className="contact-label">Visite ou ligue</span>
              <strong>Rua Dr. Júlio Prestes, 335</strong>
              <p>Laranjal Paulista — SP<br />CEP 18500-338</p>
              <a href="tel:+551532835300">(15) 3283-5300</a>
              <a href="https://www.google.com/maps/search/?api=1&query=Rua%20Dr.%20J%C3%BAlio%20Prestes%2C%20335%2C%20Laranjal%20Paulista%20SP" target="_blank" rel="noreferrer">
                Abrir no mapa <ArrowIcon />
              </a>
            </address>
          </div>
        </section>
      </main>

      <footer>
        <div className="shell footer-grid">
          <div className="footer-brand">
            <img src="/images/marca/logo-mwta-rodape.png" alt="MWTA Segurança" />
            <p>Há 14 anos proporcionando segurança e tranquilidade para pessoas e empresas.</p>
          </div>
          <div>
            <h2>Atalhos</h2>
            <a href="#sobre">A MWTA</a><a href="#servicos">Serviços</a><a href="#projetos">Projetos</a><a href="#contato">Contato</a>
          </div>
          <div>
            <h2>Redes sociais</h2>
            <a href="https://www.instagram.com/mwta_seguranca/" target="_blank" rel="noreferrer">Instagram <ArrowIcon /></a>
            <a href="https://www.facebook.com/mwtaseguranca" target="_blank" rel="noreferrer">Facebook <ArrowIcon /></a>
          </div>
        </div>
        <div className="shell footer-bottom">
          <p>© 2026 MWTA Segurança. Todos os direitos reservados.</p>
          <p>Laranjal Paulista — SP</p>
        </div>
      </footer>

      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Falar com a MWTA pelo WhatsApp">
        <span aria-hidden="true">WA</span>
        <strong>Falar agora</strong>
      </a>
    </>
  );
}
