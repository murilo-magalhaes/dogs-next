import photosGet from '@/actions/photos-get';
import Feed from '@/components/feed/feed';

export default async function Home() {
  const photos = await photosGet();

  return (
    <section className="container mainContainer">
      <h1 className="title">Dogs Next</h1>
      <Feed photos={photos} />
    </section>
  );
}
