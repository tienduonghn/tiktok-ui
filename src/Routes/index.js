import Home from '@/Pages/Home';
import Following from '@/Pages/Flollowing';
import Upload from '@/Pages/Upload';
import { HeaderOnly } from '@/component/Layout';
import Search from '@/Pages/Search';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, Layout: HeaderOnly },
    { path: '/search', component: Search, Layout: null },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
