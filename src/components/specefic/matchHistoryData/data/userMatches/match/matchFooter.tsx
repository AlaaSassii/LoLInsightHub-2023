import React, { FC } from 'react'

type typeMatchFooterProps = {
    user: any
}
const MatchFooter: FC<typeMatchFooterProps> = ({ user }) => {
    console.log({ user });
    return (
        <div>matchFooter</div>
    )
}

export default MatchFooter