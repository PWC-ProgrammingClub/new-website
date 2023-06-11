import { PageNav } from '../components/nav'
import TestHooks from './testHooks'
/**
 * The main page
 */
export default function Home() {
  return (
    <>
      <PageNav on="/" />
      <div className="card">
        <h3>PennWest Programming Clb</h3>
        <h5>The best club!</h5>
        <div className="centered">
          <TestHooks />
        </div>
      </div>
    </>
  )
}
