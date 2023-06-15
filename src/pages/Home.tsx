import { PageLayout } from '../components/layout'

/**
 * The main page
 */
export default function Home() {
  return (
    <PageLayout on='/'>
      <div className="card">
        <h3>PennWest Programming Club</h3>
        <h5>The best club!</h5>
        <div className="centered">
        </div>
      </div>
    </PageLayout>
  )
}
