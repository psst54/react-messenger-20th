import { type User } from 'src/types/user';

export default function ProfileCard({ otherUser }: { otherUser: User }) {
  const followedCount = 1000;
  const postCount = 999;
  const representativeFollowerId = '누구누구';
  const followedByKnownCount = 3;

  return (
    <div className="flex flex-col items-center p-20px">
      <button type="button">
        <img
          src={otherUser.profileImgUrl}
          alt={`profile of ${otherUser.name}`}
          className="w-92px h-92px"
        />
      </button>

      <div className="flex flex-col items-center gap-2px mt-10px">
        <h1 className="title2">{otherUser.name}</h1>
        <h2 className="caption">{otherUser.id}</h2>
      </div>

      <div className="flex flex-col items-center mt-8px">
        <div className="flex items-center gap-8px">
          <p className="caption">{`팔로워 ${followedCount}명`}</p>
          <div className="w-2px h-2px bg-dark_gray rounded-full" />
          <p className="caption">{`게시물 ${postCount}개`}</p>
        </div>
        <p className="caption">{`${representativeFollowerId}님 외 ${followedByKnownCount}명이 팔로우합니다`}</p>
      </div>

      <button
        type="button"
        className="button bg-blue_gray mt-14px px-17px py-6px rounded-7px"
      >
        프로필 보기
      </button>
    </div>
  );
}
