import { FC } from 'react'
import Participant from './participant'
type participantsProps = {
  participants: any,
  user: any
}
const participants: FC<participantsProps> = ({ participants, user }) => {

  return (
    <div className='participants'>
      <div className='participants__team_A'>
        {
          participants
            .slice(0, 4)
            .map(
              (participant, index) => <Participant
                {...participant}
                user={user}
                index={index + 1}
                key={`participant_teamA_${index}`}
              />
            )
        }
      </div>
      <div className='participants__team_B'>
        {
          participants
            .slice(4, participants.length)
            .map(
              (participant, index) => <Participant
                {...participant}
                user={user}
                index={index + 1}
                key={`participant_teamB_${index}`}
              />
            )
        }
      </div>
    </div>
  )
}

export default participants