import { Routes, Route } from 'react-router-dom';

import BaseLayout from '../layouts/BaseLayout';
import UserLayout from '../layouts/UserLayout';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Repos from '../pages/Repos';
import Gists from '../pages/Gists';
import Orgs from '../pages/Orgs';
import NoMatch from './NoMatch';

const routes = (
  <Routes>
    <Route path="/" element={<BaseLayout />}>
      <Route index element={<Home />} />
      <Route path="user/:username" element={<UserLayout />}>
        <Route index element={<Profile />} />
        <Route path="repos" element={<Repos />} />
        <Route path="gists" element={<Gists />} />
        <Route path="orgs" element={<Orgs />} />
      </Route>
      <Route path="*" element={<NoMatch />} />
    </Route>
  </Routes>
);

export default routes;
