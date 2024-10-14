import photosGet from '@/actions/photos-get';
import Feed from '@/components/feed/feed';
import Link from 'next/link';

export default async function Home() {
  const { data: photos } = await photosGet();

  return (
    <section className="container mainContainer">
      <h1 className="title">Dogs Next</h1>
      {photos?.length ? (
        <Feed photos={photos} />
      ) : (
        <div>
          <p
            style={{ color: '#444', fontSize: '1.25rem', marginBottom: '1rem' }}
          >
            Nenhuma foto encontrada.
          </p>
          <Link
            href={'/conta/postar'}
            className="button"
            style={{ display: 'inline-block' }}
          >
            Postar Foto
          </Link>
        </div>
      )}
    </section>
  );
}
