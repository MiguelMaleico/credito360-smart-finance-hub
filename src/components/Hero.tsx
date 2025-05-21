
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AuthModal } from "./AuthModal";

export const Hero = () => {
  const [authModalOpen, setAuthModalOpen] = useState<'login' | 'register' | null>(null);
  
  return (
    <section className="bg-gradient-to-b from-white to-blue-50/50">
      <div className="container-custom pt-16 pb-24 md:pt-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-lg">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Crédito <span className="gradient-text">personalizado</span> para suas necessidades
            </h1>
            <p className="text-lg text-gray-600">
              Conecte seus dados bancários via Open Finance e receba ofertas de crédito 
              personalizadas de acordo com o seu perfil financeiro real.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
              <Button 
                className="btn-primary text-base"
                onClick={() => setAuthModalOpen('register')}
              >
                Comece Agora
              </Button>
              <Button 
                variant="outline" 
                className="btn-outline text-base"
                onClick={() => setAuthModalOpen('login')}
              >
                Já Tem Conta? Entrar
              </Button>
            </div>
            
            <div className="flex items-center space-x-1 text-sm text-gray-500 pt-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center border-2 border-white">
                  <span className="text-xs font-medium text-blue-600">BP</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center border-2 border-white">
                  <span className="text-xs font-medium text-green-600">S</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center border-2 border-white">
                  <span className="text-xs font-medium text-purple-600">N</span>
                </div>
              </div>
              <span>+20 bancos e instituições parceiras</span>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl"></div>
            <div className="relative bg-white rounded-xl shadow-xl overflow-hidden border">
              <div className="p-6 bg-white border-b">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-lg">Seu Perfil Financeiro</h3>
                  <div className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                    Baixo Risco
                  </div>
                </div>
              </div>
              <div className="p-6 bg-gray-50">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-500">Score de Crédito</p>
                        <p className="text-2xl font-bold">850</p>
                      </div>
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-green-500 flex items-center justify-center">
                        <span className="text-white font-bold">A+</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border">
                    <p className="text-sm text-gray-500 mb-3">Melhores Taxas para Você</p>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 font-bold text-xs">BP</span>
                          </div>
                          <span className="font-medium">Banco Popular</span>
                        </div>
                        <div className="text-green-600 font-bold">0,99% a.m.</div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                            <span className="text-purple-600 font-bold text-xs">N</span>
                          </div>
                          <span className="font-medium">NextBank</span>
                        </div>
                        <div className="text-green-600 font-bold">1,15% a.m.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Auth Modal */}
      <AuthModal 
        isOpen={authModalOpen !== null} 
        mode={authModalOpen} 
        onClose={() => setAuthModalOpen(null)} 
      />
    </section>
  );
};
