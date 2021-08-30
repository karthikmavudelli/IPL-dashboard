import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {
    result,
    competingTeam,
    competingTeamLogoUrl,
    matchStatus,
  } = matchDetails
  let statusColor
  if (matchStatus === 'Won') {
    statusColor = 'green-text'
  } else {
    statusColor = 'red-text'
  }
  return (
    <li className="recent-matches-list-item">
      <img
        src={competingTeamLogoUrl}
        alt={`competing team ${competingTeam}`}
        className="recent-matches-image"
      />
      <p className="match-details-text right-text">{competingTeam}</p>
      <p className="match-details-text right-text">{result}</p>
      <p className={`match-details-text  ${statusColor}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
