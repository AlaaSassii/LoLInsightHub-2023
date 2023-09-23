import { FC, useState } from "react"

type matchProps = {
    matchId: string,
}
const Match: FC<matchProps> = ({ matchId }) => {
    const [match, setMatch] = useState<Object>({});
    const [matchLoading, setMatchLoading] = useState<Boolean>(false); \
    const [error, setError] = useState<boolean>(false);

    return (
        {
            error?<></> : <></>
}
    )
}

export default Match