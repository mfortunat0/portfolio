export function About() {
  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 relative">
            <img
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Desenvolvedor trabalhando"
              className="rounded-xl shadow-lg w-full border-4 border-white"
            />
            {/* <div
              className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-xl shadow-lg w-3/4"
            >
              <div className="flex items-center">
                <div className="bg-white text-blue-500 p-3 rounded-full mr-4">
                  <i className="fas fa-code text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold">+ de 50 projetos concluídos</h4>
                  <p className="text-sm opacity-90">
                    Desde que comecei minha jornada
                  </p>
                </div>
              </div>
            </div> */}
          </div>

          <div className="lg:w-1/2">
            <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold mb-3">
              Sobre Mim
            </span>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Desenvolvedor Fullstack & DevOps
            </h2>
            <p className="text-gray-600 mb-4">
              Sou um profissional apaixonado por tecnologia com experiência em
              desenvolvimento <b>Fullstack</b> e <b>Infraestrutura DevOps</b>.
              Minha jornada começou com desenvolvimento web e evoluiu para
              incluir automação, containers e orquestração.
            </p>
            <p className="text-gray-600 mb-6">
              Acredito na combinação de desenvolvimento de software robusto com
              práticas modernas de DevOps para criar sistemas escaláveis,
              resilientes e de fácil manutenção.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <i className="fas fa-laptop-code text-blue-500"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Desenvolvimento Fullstack
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Experiência em JavaScript, React, Node.js e Python para
                    construir aplicações web completas.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <i className="fas fa-server text-indigo-500"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Infraestrutura DevOps
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Conhecimento em Docker, Kubernetes, CI/CD e infraestrutura
                    como código.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <i className="fas fa-cloud text-purple-500"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Cloud Computing
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Experiência com Google Cloud e Digital Ocean para deploy de
                    aplicações escaláveis.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <i className="fas fa-project-diagram text-green-500"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Arquitetura de Software
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Habilidade para projetar sistemas distribuídos e
                    microsserviços.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#contato"
              className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-full transition shadow-lg"
            >
              Vamos Conversar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
