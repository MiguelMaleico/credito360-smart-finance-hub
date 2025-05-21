
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { RegisterForm } from "./RegisterForm";
import { LoginForm } from "./LoginForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface AuthModalProps {
  isOpen: boolean;
  mode: 'login' | 'register' | null;
  onClose: () => void;
}

export const AuthModal = ({ isOpen, mode, onClose }: AuthModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      if (!open) onClose();
    }}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            {mode === 'register' ? 'Crie sua conta' : 'Acesse sua conta'}
          </DialogTitle>
          <DialogDescription className="text-center">
            {mode === 'register' 
              ? 'Preencha os dados abaixo para criar sua conta na plataforma Crédito360.' 
              : 'Entre com seu e-mail e senha para acessar sua conta Crédito360.'}
          </DialogDescription>
        </DialogHeader>
        
        <Tabs defaultValue={mode || 'login'} className="pt-3">
          <TabsList className="grid grid-cols-2 mb-6">
            <TabsTrigger value="login">Entrar</TabsTrigger>
            <TabsTrigger value="register">Cadastrar</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login">
            <LoginForm />
          </TabsContent>
          
          <TabsContent value="register">
            <RegisterForm />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
