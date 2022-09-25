import { useListPeopleQuery } from '../app/services/people'
import PeopleManager from '../features/people/PeopleList';
import Loader from '../common/components/Loader';
import NotFound from '../common/components/NotFound'

function Home () {
    const { data, error } = useListPeopleQuery(1)

    const show = !data ? (<Loader />) : (<PeopleManager />)
    return error ? (
        <NotFound />
    ) : (show)
}

export default Home;