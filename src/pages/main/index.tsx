import AddIcon from '@assets/AddIcon';
import SendIcon from '@assets/SendIcon';
import SettingIcon from '@assets/SettingIcon';

import ProfileSummary from './ProfileSummary';
import PostList from './Postlist';

export default function MainPage() {
  return (
    <div>
      <header className="flex justify-between h-32px p-14px">
        <p className="title1">_uiqnh</p>
        <div className="flex gap-24px">
          <SendIcon size="24px" />
          <AddIcon size="24px" />
          <SettingIcon size="24px" />
        </div>
      </header>

      <main>
        <ProfileSummary />
        <PostList />
      </main>
    </div>
  );
}
