import { FC, useEffect, useState } from 'react'
import Participant from './participant'
import { Participant as particpantType } from '../../../../../../../types/singleMatch'
type participantsProps = {
  participants: particpantType[],
  user: particpantType
}
const Participants: FC<participantsProps> = ({ participants, user }) => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <div className='participants'>
      {
        !loading
          ?
          <>
            <div className='participants__team_A'>
              {
                participants
                  .slice(0, 5)
                  .map(
                    (participant: particpantType, index) => <Participant
                      puuid={participant.puuid}
                      championName={participant.championName}
                      index={index + 1}
                      key={`participant_teamA_${index}`}
                    />
                  )
              }
            </div>
            <div className='participants__team_B'>
              {
                participants
                  .slice(5, participants.length)
                  .map(
                    (participant, index) => <Participant
                      puuid={participant.puuid}
                      championName={participant.championName}
                      index={index + 1}
                      key={`participant_teamB_${index}`}
                    />
                  )
              }
            </div>
          </>
          :
          <h1>Loading...</h1>
      }

    </div>
  )
}

export default Participants