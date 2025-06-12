export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white p-2 rounded-xl mr-3">
                <i className="fas fa-terminal text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold">Matheus Fortunato</h3>
            </div>
            <p className="text-gray-400">
              Desenvolvedor Fullstack e DevOps especializado em JavaScript,
              Python, Docker e Kubernetes.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#sobre"
                  className="text-gray-400 hover:text-white transition"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-400 hover:text-white transition"
                >
                  Habilidades
                </a>
              </li>
              <li>
                <a
                  href="#projetos"
                  className="text-gray-400 hover:text-white transition"
                >
                  Projetos
                </a>
              </li>
              {/* <li>
                <a
                  href="#experiencia"
                  className="text-gray-400 hover:text-white transition"
                  >Experiência</a                >
              </li>  */}
              <li>
                <a
                  href="#contato"
                  className="text-gray-400 hover:text-white transition"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/matheus-fortunato-14513b195"
                className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl transition"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com/mfortunat0"
                className="bg-gray-700 hover:bg-gray-900 text-white p-3 rounded-xl transition"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.youtube.com/@fortunatogt10"
                className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-xl transition"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© 2025 Matheus Fortunato. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
