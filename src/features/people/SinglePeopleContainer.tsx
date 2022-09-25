import { Box, IconButton } from '@chakra-ui/react';
import { Link, useParams } from 'react-router-dom';
import Header from '../../common/components/Header';
import NotFound from '../../common/components/NotFound';
import { useGetSinglePeopleQuery } from '../../app/services/people'
import SinglePeople from './SinglePeople';
import Container from '../../common/HOC/withContainer';
import { VscArrowLeft } from 'react-icons/vsc';
import Loader from '../../common/components/Loader';


export default function PeopleDetails(){
    const { id } = useParams();
    const { data: people, error, isLoading } = useGetSinglePeopleQuery(id);

    if(isLoading){
        return(<Loader/>);
    }

    if (!id || error || !people){
        return (<NotFound/>)
    }

    return (
        <Container>
            <Link to='/'>
                <IconButton aria-label='Search database' icon={<VscArrowLeft />} />
            </Link>
            <SinglePeople {...people} />
        </Container>
    )
}