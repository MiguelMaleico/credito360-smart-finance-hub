
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { HowItWorks } from '@/components/HowItWorks';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <div className="section bg-white" id="partners">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Instituições <span className="gradient-text">Parceiras</span>
            </h2>
            <p className="text-gray-600">
              Trabalhamos com as principais instituições financeiras para trazer as melhores ofertas para você
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex items-center justify-center h-16 opacity-60 hover:opacity-100 transition-opacity">
                <div className="h-10 w-full bg-gray-200 rounded-md flex items-center justify-center">
                  <span className="font-bold text-gray-500">Banco {i}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold mb-4">Pronto para começar?</h3>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Crie sua conta agora mesmo e tenha acesso às melhores ofertas de crédito personalizadas para o seu perfil.
            </p>
            <button className="btn-primary mx-auto">
              Abra sua Conta Gratuitamente
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
