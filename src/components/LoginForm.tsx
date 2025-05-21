
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from 'sonner';

export const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
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
    if (!formData.email || !formData.password) {
      toast.error("Por favor, preencha todos os campos");
      setLoading(false);
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Login realizado com sucesso!");
      setLoading(false);
      // Redirect would happen here in a real app
    }, 1500);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
        <div className="flex justify-between items-center">
          <Label htmlFor="password">Senha</Label>
          <a href="#" className="text-sm text-credito-600 hover:underline">
            Esqueceu a senha?
          </a>
        </div>
        <Input 
          id="password" 
          name="password"
          type="password" 
          placeholder="Digite sua senha"
          value={formData.password}
          onChange={handleChange}
          className="auth-input"
          required
        />
      </div>
      
      <div className="flex items-center space-x-2">
        <Input 
          id="rememberMe" 
          name="rememberMe"
          type="checkbox" 
          className="w-4 h-4 rounded"
          checked={formData.rememberMe}
          onChange={handleChange}
        />
        <Label htmlFor="rememberMe" className="text-sm">
          Lembrar de mim
        </Label>
      </div>
      
      <Button 
        type="submit" 
        className="w-full btn-primary" 
        disabled={loading}
      >
        {loading ? "Processando..." : "Entrar"}
      </Button>
      
      <div className="text-center text-sm text-gray-500 pt-2">
        Ainda não tem conta? <a href="#" className="text-credito-600 hover:underline">Cadastre-se</a>
      </div>
    </form>
  );
};
