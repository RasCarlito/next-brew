import { Container, Section } from 'react-bulma-components'

const Main = ({ className, children }) => {
  return (
    <Section className={className}>
      <Container>
        {children}
      </Container>
    </Section>
  )
}

export default Main
