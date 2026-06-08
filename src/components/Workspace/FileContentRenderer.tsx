export const FileContentRenderer = ({ activeTab }: { activeTab: string }) => {
  if (activeTab === "about") {
    return (
      <div className="font-mono text-[13px] leading-6 select-none">
        <div>
          <span className="text-[#C586C0]">export const</span>{" "}
          <span className="text-[#DCDCAA]">AboutMe</span>=
          <span className="text-white">
            () ={">"} {"{"}
          </span>
        </div>
        <div>
          <span className="pl-4 text-[#C586C0]">return</span>{" "}
          <span className="text-white">(</span>
        </div>
        <div className="pl-8 text-[#569CD6]">
          {'<div className="bio-profile">'}
        </div>
        <div className="pl-12 text-[#9CDCFE]">
          {"<h1>"} <span className="text-white">Desenvolvedor Full-Stack</span>{" "}
          {"</h1>"}
        </div>
        <div className="pl-12 text-[#9CDCFE]">{"<p>"}</div>
        <div className="pl-16 text-gray-300">
          Mestre em Química pela UFRN, encontrei no desenvolvimento
        </div>
        <div className="pl-16 text-gray-300">
          de software a intersecção perfeita entre rigor técnico e
        </div>
        <div className="pl-16 text-gray-300">
          criatividade. Uso minha visão analítica para resolver
        </div>
        <div className="pl-16 text-gray-300">
          problemas complexos com foco em resultados.
        </div>
        <div className="pl-12 text-[#9CDCFE]">{"</p>"}</div>
        <div className="pl-12 text-[#9CDCFE]">{"<p>"}</div>
        <div className="pl-16 text-gray-300">
          Minha abordagem profissional prioriza a construção de
        </div>
        <div className="pl-16 text-gray-300">
          experiências que equilibram performance, usabilidade e
        </div>
        <div className="pl-16 text-gray-300">
          código limpo, garantindo soluções sustentáveis e de
        </div>
        <div className="pl-16 text-gray-300">
          alto impacto para os usuários finais.
        </div>
        <div className="pl-12 text-[#9CDCFE]">{"</p>"}</div>
        <div className="pl-12 text-[#9CDCFE]">{"<p>"}</div>
        <div className="pl-16 text-gray-300">
          Este portfólio, o <span className="text-[#CE9178]">Neon-Folio</span>,
          reflete minha busca por
        </div>
        <div className="pl-16 text-gray-300">
          experiências imersivas e precisas. Vamos construir algo
        </div>
        <div className="pl-16 text-gray-300">incrível juntos?</div>
        <div className="pl-12 text-[#9CDCFE]">{"</p>"}</div>

        <div className="pl-8 text-[#569CD6]">{"</div>"}</div>
        <div className="pl-4 text-white">);</div>
        <div className="text-white">{"};"}</div>
      </div>
    );
  }

  if (activeTab === "skills") {
    return (
      <div className="font-mono text-[13px] leading-6 select-none">
        <div>
          <span className="text-[#C586C0]">export const</span>{" "}
          <span className="text-[#DCDCAA]">MySkills</span>{" "}
          <span className="text-white">= {"{"}</span>{" "}
          {/* O igual está aqui agora */}
        </div>

        <div className="pl-8 text-[#9CDCFE]">frontEnd: [</div>
        <div className="pl-12 text-[#CE9178]">
          'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Sass'
        </div>
        <div className="pl-8 text-[#9CDCFE]">],</div>

        <div className="pl-8 text-[#9CDCFE]">backEnd: [</div>
        <div className="pl-12 text-[#CE9178]">
          'Node.js', 'Express', 'Prisma'
        </div>
        <div className="pl-8 text-[#9CDCFE]">],</div>

        <div className="pl-8 text-[#9CDCFE]">databases: [</div>
        <div className="pl-12 text-[#CE9178]">'PostgreSQL'</div>
        <div className="pl-8 text-[#9CDCFE]">],</div>

        <div className="pl-8 text-[#9CDCFE]">tools: [</div>
        <div className="pl-12 text-[#CE9178]">'React Native', 'Electron'</div>
        <div className="pl-8 text-[#9CDCFE]">]</div>

        <div className="text-white">{"};"}</div>
      </div>
    );
  }

  if (activeTab === "experience") {
    return (
      <div className="font-mono text-[13px] leading-6 select-none">
        <div>
          <span className="text-[#C586C0]">export const</span>{" "}
          <span className="text-[#DCDCAA]">HubbiExperience</span>{" "}
          <span className="text-white">= {"{"}</span>
        </div>

        <div className="pl-8 text-[#9CDCFE]">
          empresa: <span className="text-[#CE9178]">"Hubbi"</span>,
        </div>

        <div className="pl-8 text-[#9CDCFE]">
          periodo: <span className="text-[#CE9178]">"Set 2022 - Abr 2023"</span>
          ,
        </div>

        <div className="pl-8 text-[#9CDCFE]">
          impacto:{" "}
          <span className="text-[#CE9178]">
            [ "Desenvolvimento web performance/SEO", "Integração de APIs
            RESTful", "Refatoração de componentes React", "Otimização de
            responsividade" ]
          </span>
          ,
        </div>

        <div className="pl-8 text-[#9CDCFE]">
          stack:{" "}
          <span className="text-[#CE9178]">
            ["React", "Tailwind", "JS", "Git", "Yarn"]
          </span>
        </div>

        <div className="text-white">{"};"}</div>
      </div>
    );
  }

  return null;
};
