import { Photo } from '@/actions/photos-get';
import FeedPhotos from './feed-photos';

export default async function Feed({
  photos,
  user,
}: {
  photos: Photo[];
  user?: string;
}) {
  return (
    <div>
      <FeedPhotos photos={photos} />
    </div>
  );
}
