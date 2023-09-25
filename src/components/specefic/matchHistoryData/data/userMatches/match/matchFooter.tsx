import React, { FC } from 'react'

type typeMatchFooterProps = {
    user: any
}
const MatchFooter: FC<typeMatchFooterProps> = ({ user }) => {
    console.log({ user });
    const { firstBloodKill, firstTowerKill, pentaKills, tripleKills, quadraKills, doubleKills, dragonKills, lane } = user;
    const isFooterData: boolean = firstBloodKill || firstTowerKill || pentaKills || tripleKills || quadraKills || doubleKills || dragonKills || lane
    return (
        isFooterData
            ?
            <div className='match__footer'>
                {
                    firstBloodKill && <b> first blood</b>
                }
                {
                    pentaKills
                        ?
                        <b>penta kill</b>
                        :
                        quadraKills
                            ?
                            <b>qudra kill</b>
                            :
                            tripleKills
                                ?
                                <b>triple Kill</b>
                                :
                                doubleKills
                                    ?
                                    <b>double kill</b>
                                    :
                                    null
                }
                {
                    firstTowerKill ?
                        <b>first tower</b>
                        :
                        null
                }
                {
                    (lane === 'JUNGLE' && dragonKills)
                        ?
                        <b>dragon  kill: {dragonKills}</b>
                        :
                        null

                }
            </div>
            :
            null

    )
}

export default MatchFooter
