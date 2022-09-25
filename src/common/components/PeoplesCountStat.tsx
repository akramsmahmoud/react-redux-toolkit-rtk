import { Stat, StatLabel, StatNumber } from "@chakra-ui/react";
import { useListPeopleQuery } from "../../app/services/people";

export default function PeoplesCountStat() {
    const { data: people } = useListPeopleQuery(1)

    return (
        <Stat>
            <StatLabel>Total people</StatLabel>
            <StatNumber>{`${ people?.count || 'NA'}`}</StatNumber>
        </Stat>
    )
}