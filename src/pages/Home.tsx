import { useListPeopleQuery } from '../app/services/people'
import PeopleListContainer from '../features/people/PeopleListContainer';
import Loader from '../common/components/Loader';
import NotFound from '../common/components/NotFound'

function Home () {
    const { data, error } = useListPeopleQuery(1)

    const show = !data ? (<Loader />) : (<PeopleListContainer />)
    return error ? (
        <NotFound />
    ) : (show)
}

export default Home;