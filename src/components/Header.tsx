export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-2 rounded-full mr-3">
            <i className="fas fa-terminal text-xl"></i>
          </div>
          <h1 className="text-xl font-bold text-gray-800">Matheus Fortunato</h1>
        </div>

        <nav className="hidden md:flex space-x-6">
          <a
            href="#sobre"
            className="px-3 py-2 text-gray-700 font-medium hover:text-blue-500 transition"
          >
            Sobre
          </a>
          <a
            href="#skills"
            className="px-3 py-2 text-gray-700 font-medium hover:text-blue-500 transition"
          >
            Habilidades
          </a>
          <a
            href="#projetos"
            className="px-3 py-2 text-gray-700 font-medium hover:text-blue-500 transition"
          >
            Projetos
          </a>
          <a
            href="#experiencia"
            className="px-3 py-2 text-gray-700 font-medium hover:text-blue-500 transition"
          >
            Experiência
          </a>
          <a
            href="#contato"
            className="px-3 py-2 text-gray-700 font-medium hover:text-blue-500 transition"
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}
