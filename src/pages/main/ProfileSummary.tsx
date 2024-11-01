import FollowIcon from '@assets/FollowIcon';
import LinkIcon from '@assets/LinkIcon';
import { Link } from 'react-router-dom';

const SUMMARY_LIST = [
  {
    title: '게시물',
    value: 6,
  },
  {
    title: '팔로워',
    value: 200,
  },
  {
    title: '팔로잉',
    value: 200,
  },
];

const buttonStyle =
  'flex items-center justify-center h-30px bg-blue_gray text-body5 rounded-md';

export default function ProfileSummary() {
  return (
    <div className="p-14px">
      <div className="flex">
        <img
          src="/profileBasic.png"
          alt="profile"
          className="w-[86px] h-[86px] border border-colors-blue_gray rounded-full"
        />
        <div className="flex flex-1 justify-between p-[32px] text-center">
          {SUMMARY_LIST.map((item) => (
            <div className="">
              <p className="body1">{item.value}</p>
              <p className="body5">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="button">윤유빈</p>
        <p className="body5 text-dark_gray">CEOS 20th</p>
        <p className="body5">디자인 파트 윤유빈입니다</p>
        <Link
          to="https://instagram.com"
          className="flex items-center w-fit body5 text-blue"
        >
          <LinkIcon />
          <p>instagram.com</p>
        </Link>
      </div>

      <div className="flex w-full gap-6px py-12px">
        <button type="button" className={`${buttonStyle} flex-1`}>
          프로필 편집
        </button>
        <button type="button" className={`${buttonStyle} flex-1`}>
          프로필 공유
        </button>
        <button type="button" className={`${buttonStyle} w-30px`}>
          <FollowIcon size="16px" />
        </button>
      </div>
    </div>
  );
}
