import { FC } from 'react'
import Participant from './participant'
type participantsProps = {
  participants: Array<T>,
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
              participant => <Participant
                {...participant}
                user={user}
              />
            )
        }
      </div>
      <div className='participants__team_B'>
        {
          participants
            .slice(4, participants.length)
            .map(
              participant => <Participant
                {...participant}
                user={user}
              />
            )
        }
      </div>
    </div>
  )
}

export default participants