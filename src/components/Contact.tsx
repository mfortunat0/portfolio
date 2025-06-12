import { useState, type ChangeEvent, type FormEvent } from "react";

export function Contact() {
  const [nameContact, setNameContact] = useState("");
  const [emailContact, setEmailContact] = useState("");
  const [phoneContact, setPhoneContact] = useState("");
  const [subjectContact, setSubjectContact] = useState("Projeto Freelance");
  const [messageContact, setMessageContact] = useState("");

  const onChangeNameContact = (event: ChangeEvent<HTMLInputElement>) => {
    setNameContact(event.target.value);
  };

  const onChangeEmailContact = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailContact(event.target.value);
  };

  const onChangePhoneContact = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneContact(event.target.value);
  };

  const onChangeSubjectContact = (event: ChangeEvent<HTMLSelectElement>) => {
    setSubjectContact(event.target.value);
  };

  const onChangeMessageContact = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessageContact(event.target.value);
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const message = `> Nome Completo: *${nameContact}* %0A
${emailContact ? `> Email: *${emailContact}* %0A` : ""}
> Telefone: *${phoneContact}* %0A
> Assunto: *${subjectContact}* %0A 
${nameContact} `;

    window.open(`https://wa.me//5512981652491?text=${message}`);
    setNameContact("");
    setEmailContact("");
    setPhoneContact("");
    setMessageContact("");
  };

  return (
    <section id="contato" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Entre em Contato
            </h2>
            <p className="text-gray-600 mb-8">
              Estou disponível para oportunidades de trabalho freelance ou
              projetos desafiadores. Se você tem um projeto em mente ou quer
              discutir possibilidades, envie uma mensagem!
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <i className="fas fa-envelope text-blue-500"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">E-mail</h4>
                  <a
                    href="mailto:contato@matheusfortunato.com"
                    className="text-gray-600"
                  >
                    contato@matheusfortunato.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <i className="fas fa-phone-alt text-blue-500"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Telefone</h4>
                  <a
                    href="https://wa.me/5512992269582"
                    className="text-gray-600"
                  >
                    (12) 99226-9582
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <i className="fas fa-map-marker-alt text-blue-500"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Localização</h4>
                  <p className="text-gray-600">Ubatuba - São Paulo, Brasil</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-gray-800 mb-4">
                Redes Sociais
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/matheus-fortunato-14513b195"
                  className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://github.com/mfortunat0"
                  className="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-full transition"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://www.youtube.com/@fortunatogt10"
                  className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full transition"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-gray-50 p-8 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Envie uma Mensagem
              </h3>
              <form onSubmit={onSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={nameContact}
                      onChange={onChangeNameContact}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={emailContact}
                      onChange={onChangeEmailContact}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={phoneContact}
                      onChange={onChangePhoneContact}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Assunto
                    </label>
                    <select
                      id="subject"
                      value={subjectContact}
                      onChange={onChangeSubjectContact}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="freelance">Projeto Freelance</option>
                      <option value="job">Oportunidade de Emprego</option>
                      <option value="consulting">Consultoria</option>
                      <option value="other">Outro</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    required
                    value={messageContact}
                    onChange={onChangeMessageContact}
                    className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition shadow-lg"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
