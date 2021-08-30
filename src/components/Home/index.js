import Loader from 'react-loader-spinner'
import {Component} from 'react'
import {Link} from 'react-router-dom'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {isLoading: true, teamsList: []}

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedTeamsList = data.teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({teamsList: updatedTeamsList, isLoading: false})
  }

  renderHomePage = () => {
    const {teamsList} = this.state
    return (
      <>
        <div className="ipl-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="logo-text">IPL Dashboard</h1>
        </div>
        <ul className="ipl-matches-list">
          {teamsList.map(eachTeam => (
            <TeamCard key={eachTeam.id} teamCardDetails={eachTeam} />
          ))}
        </ul>
      </>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <Link to="/" className="home-page">
        <div className="home">
          {isLoading ? (
            <div testid="loader" className="loader">
              <Loader type="Oval" color="#ffffff" height={80} width={80} />
            </div>
          ) : (
            this.renderHomePage()
          )}
        </div>
      </Link>
    )
  }
}
export default Home
