import { PageLayout } from '../components/layout'
import "./Home.css"

/**
 * The main page
 */
export default function Home() {
  return (
    <PageLayout on='/'>
      <div className="card">
        <h3 id='club-name-text'>PennWest Programming Club</h3>
        <img src="/images/hammer-preview-temp.png" className='resizing-image' />
        <div><a href="https://discord.gg/Pvv2Eu8FrF
">Join Our Discord!</a></div>
        <img src="/images/progclubqr.png" className="resizing-image" />
        <div className="centered">
        </div>
      </div>
    </PageLayout>
  )
}
