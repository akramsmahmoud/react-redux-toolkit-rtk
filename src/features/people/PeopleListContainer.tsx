import Container from '../../common/HOC/withContainer'
import PeopleList from './PeopleList'

export const PeopleListContainer = () => {
    return (
        <Container>
            <PeopleList />
        </Container>
    )
}

export default PeopleListContainer
