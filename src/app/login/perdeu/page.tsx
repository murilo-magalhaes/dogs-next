import LoginPerdeuForm from '@/components/login/login-perdeu-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Perdeu a senha | Dogs',
  description: 'Recupere a sua senha',
};

/** Possivel solução para não tentar pré renderizar uma
 * página que faz uso de ferramentas do browser
 *
 * export const dynamic = 'force-dynamic';
 */

export default async function LoginPerdeuPage() {
  return (
    <div className="animeLeft">
      <h1 className="title">Perdeu a senha?</h1>
      <LoginPerdeuForm />
    </div>
  );
}
