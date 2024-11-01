import SearchIcon from '@assets/SearchIcon';

export default function SeacrhBar() {
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
