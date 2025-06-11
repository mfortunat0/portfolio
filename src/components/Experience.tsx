export function Experience() {
  return (
    <section id="experiencia" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold mb-3">
            Experiência Profissional
          </span>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Minha Jornada
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trajetória profissional combinando desenvolvimento e operações em
            ambientes de alta escala.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 -ml-0.5 w-0.5 h-full bg-blue-200"></div>

            <div className="mb-8">
              <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-gray-800">
                    Engenheiro DevOps Sênior
                  </h3>
                  <p className="text-blue-500">Tech Solutions Inc.</p>
                  <p className="text-gray-500 text-sm">2021 - Presente</p>
                </div>
                <div className="hidden md:block w-8 h-8 rounded-full bg-blue-500 border-4 border-white mx-auto relative z-10"></div>
                <div className="md:w-1/2 md:pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <ul className="list-disc pl-5 text-gray-600 space-y-2">
                      <li>
                        Implementação de pipelines CI/CD para múltiplas equipes
                        de desenvolvimento
                      </li>
                      <li>
                        Orquestração de containers com Kubernetes em ambientes
                        de produção
                      </li>
                      <li>
                        Automatização de provisionamento de infraestrutura com
                        Terraform
                      </li>
                      <li>Monitoramento e alertas com Prometheus e Grafana</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="md:w-1/2 md:pr-8 md:text-right order-1 md:order-none mb-4 md:mb-0">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <ul className="list-disc pl-5 text-gray-600 space-y-2">
                      <li>
                        Desenvolvimento de aplicações web com React e Node.js
                      </li>
                      <li>
                        Migração de monólito para arquitetura de microsserviços
                      </li>
                      <li>
                        Implementação de práticas DevOps na equipe de
                        desenvolvimento
                      </li>
                      <li>Automatização de testes e integração contínua</li>
                    </ul>
                  </div>
                </div>
                <div className="hidden md:block w-8 h-8 rounded-full bg-blue-500 border-4 border-white mx-auto relative z-10"></div>
                <div className="md:w-1/2 md:pl-8 order-none md:order-1">
                  <h3 className="text-xl font-bold text-gray-800">
                    Desenvolvedor Fullstack
                  </h3>
                  <p className="text-blue-500">Digital Innovations</p>
                  <p className="text-gray-500 text-sm">2018 - 2021</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-gray-800">
                    Desenvolvedor Frontend
                  </h3>
                  <p className="text-blue-500">Web Solutions Ltda.</p>
                  <p className="text-gray-500 text-sm">2016 - 2018</p>
                </div>
                <div className="hidden md:block w-8 h-8 rounded-full bg-blue-500 border-4 border-white mx-auto relative z-10"></div>
                <div className="md:w-1/2 md:pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <ul className="list-disc pl-5 text-gray-600 space-y-2">
                      <li>
                        Desenvolvimento de interfaces com JavaScript e
                        frameworks modernos
                      </li>
                      <li>Implementação de designs responsivos e acessíveis</li>
                      <li>Integração com APIs RESTful</li>
                      <li>Otimização de performance frontend</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="md:w-1/2 md:pr-8 md:text-right order-1 md:order-none mb-4 md:mb-0">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <ul className="list-disc pl-5 text-gray-600 space-y-2">
                      <li>Desenvolvimento de scripts Python para automação</li>
                      <li>Administração de servidores Linux</li>
                      <li>Configuração de serviços web (Apache, Nginx)</li>
                      <li>Suporte técnico e troubleshooting</li>
                    </ul>
                  </div>
                </div>
                <div className="hidden md:block w-8 h-8 rounded-full bg-blue-500 border-4 border-white mx-auto relative z-10"></div>
                <div className="md:w-1/2 md:pl-8 order-none md:order-1">
                  <h3 className="text-xl font-bold text-gray-800">
                    Analista de Sistemas
                  </h3>
                  <p className="text-blue-500">StartUp Tech</p>
                  <p className="text-gray-500 text-sm">2014 - 2016</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
