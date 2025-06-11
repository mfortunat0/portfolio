export function Profile() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden tech-grid">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-20 -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-100 rounded-full opacity-20 -ml-40 -mb-40"></div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Olá, eu sou
              <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                Desenvolvedor Fullstack/DevOps
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-xl">
              Especializado em JavaScript/ES6, Node.js, React.js, Python, Linux,
              Docker e Kubernetes. Construo soluções escaláveis e eficientes
              para a web e infraestrutura.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contato"
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-full transition flex items-center justify-center shadow-lg"
              >
                <i className="fas fa-paper-plane mr-2"></i> Contate-me
              </a>
              <a
                href="#projetos"
                className="border-2 border-blue-500 text-blue-500 hover:bg-blue-50 font-bold py-3 px-6 rounded-full transition flex items-center justify-center"
              >
                <i className="fas fa-code mr-2"></i> Meus Projetos
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="terminal-window max-w-lg mx-auto">
              <div className="terminal-header p-3 flex items-center">
                <div className="flex space-x-2 mr-3">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-white text-sm">terminal</div>
              </div>
              <div className="terminal-body p-4">
                <div className="mb-2">
                  <span className="command-line">$</span>
                  <span className="text-white">whoami</span>
                </div>
                <div className="command-output mb-4">
                  Desenvolvedor Fullstack/DevOps especializado em JavaScript,
                  Python, Rust e Cloud
                </div>

                <div className="mb-2">
                  <span className="command-line">$</span>
                  <span className="text-white">skills --list</span>
                </div>
                <div className="command-output mb-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div>• JavaScript/ES6</div>
                    <div>• Node.js</div>
                    <div>• React.js</div>
                    <div>• Python</div>
                    <div>• Docker</div>
                    <div>• Kubernetes</div>
                    <div>• Linux</div>
                    <div>• CI/CD</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-yellow-400 w-24 h-24 rounded-full flex items-center justify-center shadow-lg floating-element">
              <i className="fab fa-docker text-3xl text-white"></i>
            </div>
            <div
              className="absolute -top-6 -right-6 bg-blue-500 w-20 h-20 rounded-full flex items-center justify-center shadow-lg floating-element"
              style={{ animationDelay: "0.5s" }}
            >
              <i className="fab fa-react text-2xl text-white"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
