
import { ChartBarIcon, ShieldCheckIcon, UserIcon, GlobeIcon } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: <UserIcon className="h-6 w-6 text-credito-600" />,
      title: "Perfil Financeiro Completo",
      description: "Criamos uma visão 360° do seu perfil financeiro baseado em seus dados bancários, permitindo ofertas mais precisas e justas."
    },
    {
      icon: <ShieldCheckIcon className="h-6 w-6 text-credito-600" />,
      title: "Privacidade Garantida",
      description: "Seus dados estão protegidos. Você controla quais informações deseja compartilhar através do consentimento Open Finance."
    },
    {
      icon: <ChartBarIcon className="h-6 w-6 text-credito-600" />,
      title: "Análise Inteligente",
      description: "Algoritmos avançados analisam seu perfil e histórico para encontrar as melhores oportunidades de crédito para você."
    },
    {
      icon: <GlobeIcon className="h-6 w-6 text-credito-600" />,
      title: "Marketplace Completo",
      description: "Compare ofertas de diferentes instituições financeiras e escolha aquela com as melhores taxas e condições."
    }
  ];

  return (
    <section className="section bg-white" id="features">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que escolher o <span className="gradient-text">Crédito360</span>
          </h2>
          <p className="text-gray-600">
            Nossa plataforma utiliza Open Finance para trazer as melhores ofertas de crédito 
            baseadas no seu perfil financeiro real.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card flex flex-col">
              <div className="h-12 w-12 rounded-lg bg-credito-50 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 flex-grow">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Melhores taxas para seu perfil</h3>
              <p className="text-gray-600">
                Nossos parceiros oferecem condições especiais baseadas no seu histórico financeiro real. 
                Quanto mais preciso seu perfil, melhores as ofertas.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-sm text-gray-500">Média Nacional</p>
                  <p className="text-2xl font-bold text-gray-700">3,5% a.m.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border-green-200 border-l-4">
                  <p className="text-sm text-gray-500">No Crédito360</p>
                  <p className="text-2xl font-bold text-green-600">1,2% a.m.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-lg shadow-md p-6 border">
                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-2">Simulação de Crédito</h4>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-credito-500 to-blue-500 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <p className="font-medium">Valor solicitado</p>
                    <p className="text-lg font-bold">R$ 10.000,00</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="font-medium">Parcelas</p>
                    <p className="text-lg font-bold">12x R$ 892,32</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="font-medium">Taxa de juros</p>
                    <p className="text-lg font-bold text-green-600">1,2% a.m.</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="font-medium">Total a pagar</p>
                    <p className="text-lg font-bold">R$ 10.707,84</p>
                  </div>
                  <div className="pt-2">
                    <div className="p-3 bg-green-50 rounded-lg border border-green-100 text-sm text-green-700">
                      Economia de <span className="font-bold">R$ 1.940,16</span> em relação à média do mercado
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 bg-green-100 rounded-lg px-3 py-1 text-green-700 font-medium text-sm shadow-sm border border-green-200">
                Aprovado instantaneamente
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
