import * as React from 'react';
import { Routes, Route } from 'react-router-dom'
import Loader from '../common/components/Loader';
const Home = React.lazy(() => import('../pages/Home'));
const PeopleDetails = React.lazy(() => import('../features/people/SinglePeopleContainer'));


const AppRouter = () => {
    return (
        <React.Suspense fallback={<Loader />}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/people' element={<Home />} />
                <Route path='/people/:id' element={<PeopleDetails />} />
            </Routes>
        </React.Suspense>
    );
}
export default AppRouter;