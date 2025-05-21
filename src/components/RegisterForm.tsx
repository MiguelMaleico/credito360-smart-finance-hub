
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from 'sonner';

export const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cpf: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false
  });
  
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Validate form
    if (!formData.name || !formData.email || !formData.cpf || !formData.password) {
      toast.error("Por favor, preencha todos os campos obrigatórios");
      setLoading(false);
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      toast.error("As senhas não coincidem");
      setLoading(false);
      return;
    }
    
    if (!formData.acceptTerms) {
      toast.error("Você precisa aceitar os termos de uso");
      setLoading(false);
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Cadastro realizado com sucesso!");
      setLoading(false);
      // Redirect would happen here in a real app
    }, 1500);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Nome Completo</Label>
        <Input 
          id="name" 
          name="name"
          type="text" 
          placeholder="Digite seu nome completo"
          value={formData.name}
          onChange={handleChange}
          className="auth-input"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">E-mail</Label>
        <Input 
          id="email" 
          name="email"
          type="email" 
          placeholder="Digite seu e-mail"
          value={formData.email}
          onChange={handleChange}
          className="auth-input"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="cpf">CPF</Label>
        <Input 
          id="cpf" 
          name="cpf"
          type="text" 
          placeholder="Digite seu CPF (apenas números)"
          value={formData.cpf}
          onChange={handleChange}
          className="auth-input"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="password">Senha</Label>
        <Input 
          id="password" 
          name="password"
          type="password" 
          placeholder="Crie uma senha forte"
          value={formData.password}
          onChange={handleChange}
          className="auth-input"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirmar Senha</Label>
        <Input 
          id="confirmPassword" 
          name="confirmPassword"
          type="password" 
          placeholder="Confirme sua senha"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="auth-input"
          required
        />
      </div>
      
      <div className="flex items-start space-x-2 pt-2">
        <Input 
          id="acceptTerms" 
          name="acceptTerms"
          type="checkbox" 
          className="w-4 h-4 mt-1 rounded"
          checked={formData.acceptTerms}
          onChange={handleChange}
        />
        <Label htmlFor="acceptTerms" className="text-sm">
          Li e concordo com os <a href="#" className="text-credito-600 hover:underline">Termos de Uso</a> e <a href="#" className="text-credito-600 hover:underline">Política de Privacidade</a>
        </Label>
      </div>
      
      <Button 
        type="submit" 
        className="w-full btn-primary" 
        disabled={loading}
      >
        {loading ? "Processando..." : "Cadastrar"}
      </Button>
    </form>
  );
};
