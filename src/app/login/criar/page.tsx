import LoginCriarForm from '@/components/login/login-criar-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crie sua conta | Dogs',
  description: 'Crie sua conta no site Dogs',
};

export default async function LoginCriarPage() {
  return (
    <div className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <LoginCriarForm />
    </div>
  );
}
