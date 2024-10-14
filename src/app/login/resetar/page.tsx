import LoginResetarForm from '@/components/login/login-resetar-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resete a senha | Dogs',
  description: 'Resete a sua senha',
};

/** Possivel solução para não tentar pré renderizar uma
 * página que faz uso de ferramentas do browser
 *
 * export const dynamic = 'force-dynamic';
 */

type ResetarSearchParams = {
  searchParams: {
    key: string;
    login: string;
  };
};
export default async function ResetarPage({
  searchParams,
}: ResetarSearchParams) {
  return (
    <div className="animeLeft">
      <h1 className="title">Resete a senha</h1>
      <LoginResetarForm
        keyToken={searchParams.key}
        login={searchParams.login}
      />
    </div>
  );
}
