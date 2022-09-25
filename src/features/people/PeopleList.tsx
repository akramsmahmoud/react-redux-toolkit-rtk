import * as React from 'react'
import {
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    HStack,
    Icon,
    List,
    ListIcon,
    ListItem,
    Stat,
    StatLabel,
    StatNumber,
} from '@chakra-ui/react'
import { MdArrowBack, MdArrowForward, MdFace } from 'react-icons/md'
import { useListPeopleQuery } from '../../app/services/people'
import { Link } from 'react-router-dom'
import PeopleSelekton from './PeopleSelekton'
import Container from '../../common/HOC/withContainer'

const PeopleList = () => {
    const [page, setPage] = React.useState(1)
    const { data: people, isLoading, isFetching } = useListPeopleQuery(page)

    if (!people?.results) {
        return <div>No people :(</div>
    }
    const totalPages = Math.ceil(people.count / 10)

    return (
        <Box>
            <HStack spacing="14px">
                <Button
                    onClick={() => setPage((prev) => prev - 1)}
                    isLoading={isFetching}
                    disabled={page === 1}
                >
                    <Icon as={MdArrowBack} />
                </Button>
                <Button
                    onClick={() => setPage((prev) => prev + 1)}
                    isLoading={isFetching}
                    disabled={page === totalPages}
                >
                    <Icon as={MdArrowForward} />
                </Button>
                <Box>{`${page} / ${totalPages}`}</Box>
            </HStack>
            
            {(isLoading || isFetching) 
            ? <PeopleSelekton /> 
            : (
                <List spacing={3} mt={6} textAlign="left">
                    {people?.results.map(({ name, gender, url }, index) => {
                        const peopleId = url.split('/')[5];
                        return (<ListItem key={index}>
                            <Link to={`/people/${peopleId}`}> <ListIcon as={MdFace} color="green.500" /> {name}{' - '}{gender}</Link>
                        </ListItem>)
                    })}
                </List>
            )}
        </Box>
    )
}

export const PeopleManager = () => {
    return (
        <Container>
            <PeopleList />
        </Container>
    )
}

export default PeopleManager
