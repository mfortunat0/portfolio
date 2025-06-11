export function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold mb-3">
            Habilidades Técnicas
          </span>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Minhas Especialidades
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Domínio em diversas tecnologias modernas para desenvolvimento e
            infraestrutura.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
            <div className="bg-blue-100 p-4 rounded-full mb-3">
              <i className="fab fa-js text-blue-500 text-3xl"></i>
            </div>
            <h3 className="font-semibold text-gray-800">JavaScript/ES6</h3>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: "95%" }}
              ></div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
            <div className="bg-green-100 p-4 rounded-full mb-3">
              <i className="fab fa-node-js text-green-500 text-3xl"></i>
            </div>
            <h3 className="font-semibold text-gray-800">Node.js</h3>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
            <div className="bg-blue-500 p-4 rounded-full mb-3">
              <i className="fab fa-react text-white text-3xl"></i>
            </div>
            <h3 className="font-semibold text-gray-800">React.js</h3>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: "92%" }}
              ></div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
            <div className="bg-blue-800 p-4 rounded-full mb-3">
              <i className="fab fa-react text-white text-3xl"></i>
            </div>
            <h3 className="font-semibold text-gray-800">React Native</h3>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: "50%" }}
              ></div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
            <div className="bg-yellow-100 p-4 rounded-full mb-3">
              <i className="fab fa-python text-yellow-500 text-3xl"></i>
            </div>
            <h3 className="font-semibold text-gray-800">Python</h3>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div
                className="bg-yellow-500 h-2 rounded-full"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
            <div className="bg-blue-400 p-4 rounded-full mb-3">
              <i className="fab fa-docker text-white text-3xl"></i>
            </div>
            <h3 className="font-semibold text-gray-800">Docker</h3>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div
                className="bg-blue-400 h-2 rounded-full"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
            <div className="bg-blue-600 p-4 rounded-full mb-3">
              <i className="fas fa-ship text-white text-3xl"></i>
            </div>
            <h3 className="font-semibold text-gray-800">Kubernetes</h3>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
            <div className="bg-orange-500 p-4 rounded-full mb-3">
              <i className="fab fa-linux text-white text-3xl"></i>
            </div>
            <h3 className="font-semibold text-gray-800">Linux</h3>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div
                className="bg-orange-500 h-2 rounded-full"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
            <div className="bg-blue-400 p-4 rounded-full mb-3">
              <i className="fab fa-google text-white text-3xl"></i>
            </div>
            <h3 className="font-semibold text-gray-800">Google Cloud</h3>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div
                className="bg-blue-400 h-2 rounded-full"
                style={{ width: "70%" }}
              ></div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
            <div className="bg-green-500 p-4 rounded-full mb-3">
              <i className="fas fa-code-branch text-white text-3xl"></i>
            </div>
            <h3 className="font-semibold text-gray-800">CI/CD</h3>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
            <div className="bg-purple-500 p-4 rounded-full mb-3">
              <i className="fas fa-code text-white text-3xl"></i>
            </div>
            <h3 className="font-semibold text-gray-800">Terraform</h3>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div
                className="bg-purple-500 h-2 rounded-full"
                style={{ width: "45%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
