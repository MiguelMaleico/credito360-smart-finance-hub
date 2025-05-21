
export const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Cadastro Simples",
      description: "Crie sua conta em menos de 2 minutos com dados básicos."
    },
    {
      number: "02",
      title: "Conexão Bancária",
      description: "Conecte suas contas via Open Finance de forma segura."
    },
    {
      number: "03",
      title: "Análise de Perfil",
      description: "Nosso sistema analisa seus dados e cria seu perfil financeiro."
    },
    {
      number: "04",
      title: "Ofertas Personalizadas",
      description: "Receba propostas de crédito adequadas ao seu perfil real."
    }
  ];

  return (
    <section className="section bg-gray-50" id="how-it-works">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como o <span className="gradient-text">Crédito360</span> funciona
          </h2>
          <p className="text-gray-600">
            Um processo simples e seguro para conectar seus dados financeiros e 
            receber as melhores ofertas de crédito.
          </p>
        </div>
        
        <div className="relative mt-16">
          <div className="hidden md:block absolute left-0 right-0 top-12 h-0.5 bg-gray-200"></div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-white border-2 border-credito-500 flex items-center justify-center z-10 mb-6">
                    <span className="text-3xl font-bold text-credito-600">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">{step.title}</h3>
                  <p className="text-gray-600 text-center">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20 bg-white rounded-2xl p-8 border shadow-sm">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="bg-credito-50 p-6 rounded-lg space-y-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-credito-100 flex items-center justify-center">
                    <span className="text-credito-600 font-bold">1</span>
                  </div>
                  <h4 className="font-bold">Consentimento</h4>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-4 border">
                  <h5 className="font-medium mb-2">Autorização Open Finance</h5>
                  <p className="text-sm text-gray-600 mb-3">
                    Você está autorizando o acesso seguro às seguintes informações:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center mr-2">
                        <span className="text-green-600 text-xs">✓</span>
                      </div>
                      <span>Dados cadastrais</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center mr-2">
                        <span className="text-green-600 text-xs">✓</span>
                      </div>
                      <span>Saldo e extrato bancário</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center mr-2">
                        <span className="text-green-600 text-xs">✓</span>
                      </div>
                      <span>Histórico de crédito</span>
                    </li>
                  </ul>
                  <div className="mt-4 flex space-x-2">
                    <button className="px-4 py-2 bg-credito-600 text-white rounded-lg text-sm">
                      Autorizar
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm">
                      Recusar
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 mt-6 mb-3">
                  <div className="w-10 h-10 rounded-full bg-credito-100 flex items-center justify-center">
                    <span className="text-credito-600 font-bold">2</span>
                  </div>
                  <h4 className="font-bold">Análise Instantânea</h4>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Segurança e transparência em cada etapa</h3>
              <p className="text-gray-600">
                Todo o processo segue os mais rígidos padrões de segurança do Open Finance brasileiro.
                Você sempre terá controle sobre seus dados e poderá revogar o acesso quando quiser.
              </p>
              
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                  <h4 className="font-medium text-green-800 mb-1">Proteção de Dados</h4>
                  <p className="text-sm text-green-700">
                    Seus dados são criptografados e protegidos seguindo a LGPD. Nunca compartilhamos suas informações sem seu consentimento explícito.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h4 className="font-medium text-blue-800 mb-1">Consentimento Expresso</h4>
                  <p className="text-sm text-blue-700">
                    Você escolhe quais dados deseja compartilhar e por quanto tempo. O consentimento pode ser revogado a qualquer momento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
