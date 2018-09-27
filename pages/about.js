import { Content } from 'react-bulma-components'

import Nav from '../components/nav'
import Main from '../components/main'

const AboutPage = () => (
  <div>
    <Nav />
    <Main>
      <Content>
        <p>
          This project was developed by myself, <a href='https://carlogren.com'>Carl Ogren</a>,
          as an example to show off <a href='https://nextjs.org/'>Next.js</a> during
          the <a href='https://www.meetup.com/fr-FR/React-Nantes/'>React Nantes meetup</a>.
        </p>
        <p>The data was fetched from the awesome <a href='https://punkapi.com/'>PunkAPI</a>.</p>
        <p>The source code is open source and can be found on <a href='https://github.com/RasCarlito/next-brew'>Github</a>.</p>
        <p>If you want to get in touch, you can find me on <a href='https://twitter.com/CarlOGREN'>Twitter</a>.</p>
        <p>Thanks for checking this out! Cheers!</p>
      </Content>
    </Main>
  </div>
)

export default AboutPage
