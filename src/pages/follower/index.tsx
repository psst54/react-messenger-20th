import BackIcon from '@assets/BackIcon';
import SearchIcon from '@assets/SearchIcon';
import TrashIcon from '@assets/TrashIcon';

import followerData from '@assets/followerData';
import { User } from 'src/types/user';

const tabHeaderStyle = 'body2 flex items-center justify-center flex-1';

function TNB() {
  return (
    <nav className="flex items-center justify-between h-44px px-15px">
      <BackIcon size="24px" />
      <p className="title2">_uiqnh</p>
      <BackIcon size="24px" color="transparent" />
    </nav>
  );
}

function TabHeader() {
  return (
    <div className="flex h-38px">
      <div className={`${tabHeaderStyle} text-dark_gray`}>200 팔로워</div>
      <div className={`${tabHeaderStyle} text-black border-b-2 border-black`}>
        200 팔로잉
      </div>
      <div className={`${tabHeaderStyle} text-dark_gray`}>구독</div>
    </div>
  );
}

function SeacrhBar() {
  return (
    <div className="flex items-center gap-4px h-36px bg-blue_gray mx-14px my-14px px-14px py-7px rounded-md">
      <SearchIcon size="14px" color="#6F7680" />
      <input
        placeholder="검색"
        className="title3 flex-1 bg-transparent border-none outline-none"
      />
    </div>
  );
}

function Sort() {
  return (
    <div className="flex items-center justify-between px-14px py-16px">
      <p className="title2">기본 정렬</p>
      <p className="body4">정렬 기준 변경</p>
    </div>
  );
}

const buttonStyle =
  'flex items-center justify-center h-30px bg-blue_gray rounded-md';

function FollowerItem({ follower }: { follower: User }) {
  const { id, name, profileImgUrl } = follower;

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-10px">
        <img
          src={profileImgUrl}
          alt="profile"
          className="w-54px h-54px border border-blue_gray rounded-full"
        />
        <div>
          <p className="body3">{id}</p>
          <p className="caption">{name}</p>
        </div>
      </div>

      <div className="flex gap-12px">
        <button type="button" className={`${buttonStyle} body2 w-86px`}>
          메시지
        </button>
        <button type="button" className={`${buttonStyle} w-30px`}>
          <TrashIcon size="20px" />
        </button>
      </div>
    </div>
  );
}

function FollowerList() {
  return (
    <ul className="flex flex-col gap-16px px-14px">
      {followerData.map((item) => (
        <li>
          <FollowerItem follower={item} />
        </li>
      ))}
    </ul>
  );
}

export default function FollowerPage() {
  return (
    <div>
      <TNB />
      <TabHeader />
      <SeacrhBar />
      <Sort />
      <FollowerList />
    </div>
  );
}
