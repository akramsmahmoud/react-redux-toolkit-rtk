import {
    Box,
    Flex,
    Heading,
    Divider
} from '@chakra-ui/react'
import PeoplesCountStat from "./PeoplesCountStat";

export default function Header() {
    return (<>
        <Flex wrap="wrap" bg="#011627" p={4} color="white" flexDirection={["column", "row"]} justifyContent={["center", "space-between"]}>
            <Box>
                <Heading size="xl">Star wars People</Heading>
            </Box>
            <Box>
                <PeoplesCountStat />
            </Box>
        </Flex>
        <Divider />
    </>)
}