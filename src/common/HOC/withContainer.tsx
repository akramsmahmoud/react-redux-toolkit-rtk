import { Box } from "@chakra-ui/react";
import People from "../../app/services/people";
import Header from "../components/Header";

interface IContainerProps{
    children: JSX.Element[] | JSX.Element
}

export default function withContainer({ children }: IContainerProps) {
    return (
        <Box>
            <Header />
            <Box p={4}>
                {children}
            </Box>
        </Box>
    )
}