import photoGet from '@/actions/photo-get';
import PhotoContent from '@/components/photo/photo-content';
import { Metadata } from 'next';

type FotoIdParams = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params,
}: FotoIdParams): Promise<Metadata | undefined> {
  const { data } = await photoGet(params.id);

  if (!data) return { title: 'Fotos' };

  return {
    title: data.photo.title + ' | Dogs Next',
  };
}

export default async function FotoIdPage({
  params,
}: {
  params: { id: string };
}) {
  const { data } = await photoGet(params.id);
  if (!data) return null;

  return (
    <section className="container mainContainer">
      <PhotoContent data={data} single={true} />
    </section>
  );
}
