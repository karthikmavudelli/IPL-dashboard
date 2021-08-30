import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamCardDetails} = props
  const {id, name, teamImageUrl} = teamCardDetails
  return (
    <Link to={`/team-matches/${id}`} className="team-list-item">
      <img src={teamImageUrl} alt={name} className="team-image" />
      <p className="team-name">{name}</p>
    </Link>
  )
}

export default TeamCard
