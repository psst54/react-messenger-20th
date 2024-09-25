import { User } from 'src/hooks/userUser';

export default function ProfileCard({ otherUser }: { otherUser: User }) {
  return (
    <div className="flex flex-col items-center gap-[10px] p-[20px]">
      <img
        src={otherUser.profileImgUrl}
        alt={`profile of ${otherUser.name}`}
        className="w-[92px] h-[92px]"
      />

      <div className="flex flex-col items-center gap-[8px]">
        <div className="flex flex-col items-center gap-[2px]">
          <h1 className="title2">{otherUser.name}</h1>
          <h2 className="caption">{otherUser.id}</h2>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-[8px]">
            <p className="caption">{`팔로워 ${1000}명`}</p>
            <div className="w-[2px] h-[2px] bg-dark_gray rounded-full" />
            <p className="caption">{`게시물 ${999}개`}</p>
          </div>
          <p className="caption">{`${'누구누구'}님 외 ${987}명이 팔로우합니다`}</p>
        </div>
      </div>
    </div>
  );
}
