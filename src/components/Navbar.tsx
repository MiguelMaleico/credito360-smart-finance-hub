
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { AuthModal } from './AuthModal';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState<'login' | 'register' | null>(null);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md py-4 shadow-sm">
      <div className="container-custom flex justify-between items-center">
        <a href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-credito-600 to-blue-500 flex items-center justify-center">
            <span className="text-white font-bold">C</span>
          </div>
          <span className="font-display font-bold text-xl">Crédito360</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="nav-link">Recursos</a>
          <a href="#how-it-works" className="nav-link">Como Funciona</a>
          <a href="#partners" className="nav-link">Parceiros</a>
        </div>
        
        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Button 
            variant="outline" 
            className="btn-outline"
            onClick={() => setAuthModalOpen('login')}
          >
            Entrar
          </Button>
          <Button 
            className="btn-primary" 
            onClick={() => setAuthModalOpen('register')}
          >
            Cadastre-se
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg p-4 border-t animate-fade-in">
          <div className="flex flex-col space-y-3">
            <a href="#features" className="nav-link py-2">Recursos</a>
            <a href="#how-it-works" className="nav-link py-2">Como Funciona</a>
            <a href="#partners" className="nav-link py-2">Parceiros</a>
            <hr className="my-2" />
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => {
                setAuthModalOpen('login');
                setIsMenuOpen(false);
              }}
            >
              Entrar
            </Button>
            <Button 
              className="w-full"
              onClick={() => {
                setAuthModalOpen('register');
                setIsMenuOpen(false);
              }}
            >
              Cadastre-se
            </Button>
          </div>
        </div>
      )}
      
      {/* Auth Modal */}
      <AuthModal 
        isOpen={authModalOpen !== null} 
        mode={authModalOpen} 
        onClose={() => setAuthModalOpen(null)} 
      />
    </nav>
  );
};
