import FeedIcon from '@assets/FeedIcon';

const tabStyle = 'flex flex-1 items-center justify-center';

function TabHeader() {
  return (
    <div className="flex h-48px">
      <div className={`${tabStyle} border-b-2 border-black`}>
        <FeedIcon size="24px" />
      </div>
      <div className={tabStyle}>
        <FeedIcon size="24px" />
      </div>
      <div className={tabStyle}>
        <FeedIcon size="24px" />
      </div>
    </div>
  );
}

const imageStyle = 'aspect-square object-cover';

export default function PostList() {
  return (
    <div>
      <TabHeader />

      <div className="grid grid-cols-3 gap-1px">
        <img src="/post1.png" alt="post" className={imageStyle} />
        <img src="/post1.png" alt="post" className={imageStyle} />
        <img src="/post1.png" alt="post" className={imageStyle} />
        <img src="/post2.png" alt="post" className={imageStyle} />
        <img src="/post2.png" alt="post" className={imageStyle} />
        <img src="/post2.png" alt="post" className={imageStyle} />
      </div>
    </div>
  );
}
