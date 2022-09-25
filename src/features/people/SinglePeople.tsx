import {
    Box,
    Container,
    Stack,
    Text,
    Heading,
    SimpleGrid,
    StackDivider,
    List,
    ListItem,
} from '@chakra-ui/react';
import { People } from '../../app/services/people'

export default function SinglePeople(people: People) {
    const { name, gender, height, mass, eye_color, hair_color, skin_color } = people;


    return (
        <Container maxW={'7xl'}>
            <SimpleGrid
                columns={{ base: 1 }}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 15, md: 15 }}>
                <Stack spacing={{ base: 6, md: 10 }}>
                    <Box as={'header'}>
                        <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                            {name}
                        </Heading>
                        <Text
                            color={'gray.900'}
                            fontWeight={300}
                            fontSize={'2xl'}>
                            {gender}
                        </Text>
                    </Box>

                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={'column'}
                        divider={
                            <StackDivider
                                borderColor={'gray.200'}
                            />
                        }>
                        <Box>
                            <Text
                                fontSize={{ base: '16px', lg: '18px' }}
                                color={'yellow.500'}
                                fontWeight={'500'}
                                textTransform={'uppercase'}
                                mb={'4'}>
                                People Details
                            </Text>

                            <List spacing={2}>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Height:
                                    </Text>{' '}
                                    {height}
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Mass:
                                    </Text>{' '}
                                    {mass}
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Hair Color:
                                    </Text>{' '}
                                    {hair_color}
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Eye Color:
                                    </Text>{' '}
                                    {eye_color}
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Skin color:
                                    </Text>{' '}
                                    {skin_color}
                                </ListItem>
                            </List>
                        </Box>
                    </Stack>
                </Stack>
            </SimpleGrid>
        </Container>
    );
}