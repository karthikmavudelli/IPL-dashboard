import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {isTeamMatchesLoading: true, teamMatchesList: {}, team: ''}

  componentDidMount() {
    this.getTeamMatchesList()
  }

  getTeamMatchesList = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updateTeamMatches = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    this.setState({
      teamMatchesList: updateTeamMatches,
      isTeamMatchesLoading: false,
      team: id,
    })
  }

  convertingSnakeToCamel = item => ({
    umpires: item.umpires,
    result: item.result,
    manOfTheMatch: item.man_of_the_match,
    id: item.id,
    date: item.date,
    venue: item.venue,
    competingTeam: item.competing_team,
    competingTeamLogoUrl: item.competing_team_logo,
    firstInnings: item.first_innings,
    secondInnings: item.second_innings,
    matchStatus: item.match_status,
  })

  renderTeamMatches = () => {
    const {teamMatchesList} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatchesList
    return (
      <>
        <img
          src={teamBannerUrl}
          alt="team banner"
          className="team-matches-image"
        />
        <h1 className="latest-matches-text">Latest Matches</h1>
        <LatestMatch
          latestMatchDetails={this.convertingSnakeToCamel(latestMatchDetails)}
        />
        <ul className="recent-matches-list">
          {recentMatches.map(eachMatch => (
            <MatchCard
              key={eachMatch.id}
              matchDetails={this.convertingSnakeToCamel(eachMatch)}
            />
          ))}
        </ul>
      </>
    )
  }

  getBackgroundColor = team => {
    let teamColor
    if (team === 'RCB') {
      teamColor = 'rcb-team'
    } else if (team === 'KKR') {
      teamColor = 'kkr-team'
    } else if (team === 'KXP') {
      teamColor = 'kxp-team'
    } else if (team === 'CSK') {
      teamColor = 'csk-team'
    } else if (team === 'MI') {
      teamColor = 'mi-team'
    } else if (team === 'SRH') {
      teamColor = 'srh-team'
    } else if (team === 'RR') {
      teamColor = 'rr-team'
    } else if (team === 'DC') {
      teamColor = 'dc-team'
    }

    return teamColor
  }

  render() {
    const {team, isTeamMatchesLoading} = this.state
    const bgColor = this.getBackgroundColor(team)
    return (
      <div className={`team-matches-container ${bgColor}`}>
        {isTeamMatchesLoading ? (
          <div className={`team-match-loader ${bgColor}`} testid="loader">
            <Loader type="Oval" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.renderTeamMatches()
        )}
      </div>
    )
  }
}

export default TeamMatches
