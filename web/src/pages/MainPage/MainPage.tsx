import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const MainPage = () => {
  return (
    <>
      <MetaTags title="Main" description="Main page" />

      <h1>MainPage</h1>
      <p>
        Find me in <code>./web/src/pages/MainPage/MainPage.tsx</code>
      </p>
      <p>
        My default route is named <code>main</code>, link to me with `
        <Link to={routes.main()}>Main</Link>`
      </p>
    </>
  )
}

export default MainPage
