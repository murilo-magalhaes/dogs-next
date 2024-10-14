import statsGet from '@/actions/stats-get';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

/**
 * (LAZY LOAD)
 * Criação de importação dinâmica para deixar a aplicação mais
 * leve devido ao uso da lib victory no componente ContaEstatisticas,
 * Dessa forma, só será usado caso está página seja acessada e também
 * não haverá Server Side Rendering
 */
const ContaEstatisticas = dynamic(
  () => import('@/components/conta/conta-estatisticas'),
  {
    loading: () => <p>Carregando...</p>,
    ssr: false,
  },
);

export const metadata: Metadata = {
  title: 'Estatísticas | Minha Conta',
};

export default async function EstatisticasPage() {
  const { data } = await statsGet();

  if (!data) return null;

  return (
    <section>
      <ContaEstatisticas data={data} />
    </section>
  );
}
