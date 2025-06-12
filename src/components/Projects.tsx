import VideosNah from "../assets/videosdonah.png";
import TotemMidiaIndoor from "../assets/totem-midia-indoor.png";
import PastelDoCabelo from "../assets/patel-do-cabelo.png";
import BeatrizSennosAdvogada from "../assets/beatriz-sennos-advogada.png";

export function Projects() {
  return (
    <section id="projetos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold mb-3">
            Meus Projetos
          </span>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Trabalhos Recentes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi combinando habilidades fullstack
            e DevOps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="project-card bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition">
            <div className="relative h-48 overflow-hidden">
              <img
                src={VideosNah}
                alt="Plataforma de E-commerce"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                  Frontend
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Videos do Nah</h3>
              <p className="text-gray-600 mb-4">
                Website desenvolvido sob medida para uma empresa de marketing
                digital emergente em Ubatuba, otimizado para fortalecer sua
                marca e atrair novos clientes na região.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                  Node.js
                </span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                  React.js
                </span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                  HostGator
                </span>
              </div>
            </div>
          </div>

          <div className="project-card bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition">
            <div className="relative h-48 overflow-hidden">
              <img
                src={TotemMidiaIndoor}
                alt="Infraestrutura como Código"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                  DevOps
                </span>
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full ml-2">
                  Android
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Sistema Midia Indoor</h3>
              <p className="text-gray-600 mb-4">
                Sistema de mídia indoor completo, powered by React Native,
                Node.js e Cloud DigitalOcean. Sua solução para comunicação
                digital dinâmica, escalável e de alto desempenho.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                  Digital Ocean
                </span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                  React Native
                </span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                  Node.js
                </span>
              </div>
            </div>
          </div>

          <div className="project-card bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition">
            <div className="relative h-48 overflow-hidden">
              <img
                src={PastelDoCabelo}
                alt="Plataforma de E-commerce"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                  Frontend
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Pastel do Cabelo</h3>
              <p className="text-gray-600 mb-4">
                Website delicioso, desenvolvido sob medida para uma pastelaria
                em Ubatuba, otimizado para fortalecer sua marca, exibir seu
                cardápio irresistível e atrair mais clientes na região.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                  Node.js
                </span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                  React.js
                </span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                  HostGator
                </span>
              </div>
            </div>
          </div>

          <div className="project-card bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition">
            <div className="relative h-48 overflow-hidden">
              <img
                src={BeatrizSennosAdvogada}
                alt="Plataforma de E-commerce"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                  Frontend
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Pastel do Cabelo</h3>
              <p className="text-gray-600 mb-4">
                Website sob medida para uma advocacia em Caraguatatuba, focado
                em destacar seus serviços, transmitir confiança e atrair novos
                clientes que buscam excelência jurídica na região.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                  Node.js
                </span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                  React.js
                </span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                  HostGator
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-full transition shadow-lg"
          >
            Ver Todos os Projetos
          </a>
        </div>  */}
      </div>
    </section>
  );
}
