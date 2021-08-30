import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogoUrl,
    firstInnings,
    secondInnings,
  } = latestMatchDetails
  return (
    <div className="latest-match-card ">
      <div className="result-container">
        <p className="match-details-text competing-team-text">
          {competingTeam}
        </p>
        <p className="match-details-text">{date}</p>
        <p className="match-details-text">{venue}</p>
        <p className="match-details-text">{result}</p>
      </div>
      <img
        src={competingTeamLogoUrl}
        alt={`latest match ${competingTeam}`}
        className="competing-team-logo"
      />
      <div className="result-container">
        <p className="match-details-text right-text headings">First Innings</p>
        <p className="match-details-text right-text">{firstInnings}</p>
        <p className="match-details-text right-text headings">Second Innings</p>
        <p className="match-details-text right-text">{secondInnings}</p>
        <p className="match-details-text right-text headings">
          Man Of The Match
        </p>
        <p className="match-details-text right-text">{manOfTheMatch}</p>
        <p className="match-details-text right-text headings">Umpires</p>
        <p className="match-details-text right-text">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
