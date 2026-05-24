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
          Acredito que o bom software nasce do equilíbrio entre
        </div>
        <div className="pl-16 text-gray-300">
          funcionalidade e simplicidade. Meu foco é desenvolver
        </div>
        <div className="pl-16 text-gray-300">
          soluções que atendam às necessidades do projeto de
        </div>
        <div className="pl-16 text-gray-300">
          forma clara, eficiente e sustentável.
        </div>
        <div className="pl-12 text-[#9CDCFE]">{"</p>"}</div>
        <div className="pl-12 text-[#9CDCFE]">{"<p>"}</div>
        <div className="pl-16 text-gray-300">
          Gosto de transformar requisitos em código limpo, sempre
        </div>
        <div className="pl-16 text-gray-300">
          buscando aprender novas formas de evoluir minhas
        </div>
        <div className="pl-16 text-gray-300">
          habilidades e contribuir para o sucesso das entregas.
        </div>
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
          <span className="text-[#DCDCAA]">MySkills</span>=
          <span className="text-white">
            () ={">"} {"{"}
          </span>
        </div>
        <div>
          <span className="pl-4 text-[#C586C0]">return</span>{" "}
          <span className="text-white">(</span>
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
        <div className="pl-4 text-white">);</div>
        <div className="text-white">{"};"}</div>
      </div>
    );
  }

  if (activeTab === "experience") {
    return (
      <div className="font-mono text-[13px] leading-6 select-none">
        <div>
          <span className="text-[#C586C0]">export const</span>{" "}
          <span className="text-[#DCDCAA]">HubbiExperience</span>=
          <span className="text-white">
            () ={">"} {"{"}
          </span>
        </div>
        <div>
          <span className="pl-4 text-[#C586C0]">return</span>{" "}
          <span className="text-white">(</span>
        </div>
        <div className="pl-8 text-[#9CDCFE]">
          empresa: <span className="text-[#CE9178]">"Hubbi"</span>,
        </div>
        <div className="pl-8 text-[#9CDCFE]">
          periodo: <span className="text-[#CE9178]">"Set 2022 - Abr 2023"</span>
          ,
        </div>
        <div className="pl-8 text-[#9CDCFE]">impacto: [</div>
        <div className="pl-12 text-[#CE9178]">
          "Desenvolvimento de páginas web modernas com foco em performance e
          SEO",
        </div>
        <div className="pl-12 text-[#CE9178]">
          "Integração robusta com APIs RESTful para sincronização fluida de
          dados",
        </div>
        <div className="pl-12 text-[#CE9178]">
          "Refatoração de componentes React visando escalabilidade e clean
          code",
        </div>
        <div className="pl-12 text-[#CE9178]">
          "Otimização da responsividade em múltiplos dispositivos e navegadores"
        </div>
        <div className="pl-8 text-[#9CDCFE]">],</div>
        <div className="pl-8 text-[#9CDCFE]">
          stack:{" "}
          <span className="text-[#CE9178]">
            ["React", "Tailwind", "JS", "Git", "Yarn"]
          </span>
        </div>
        <div className="pl-4 text-white">);</div>
        <div className="text-white">{"};"}</div>
      </div>
    );
  }

  return null;
};
