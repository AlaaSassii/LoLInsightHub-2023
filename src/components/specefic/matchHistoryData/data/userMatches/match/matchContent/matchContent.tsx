import { FC } from 'react'
import { info } from "../../../../../../../types/championDataType"
import { Metadata } from "../../../../../../../types/singleMatch"

type matchContentProps = {
    info: info,
    metadata: Metadata
}
const MatchContent: FC<matchContentProps> = ({ info, metadata }) => {
    return (
        <div>

        </div>
    )
}

export default MatchContent