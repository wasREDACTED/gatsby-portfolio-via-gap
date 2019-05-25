import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import media from 'utils/media-queries'

import { color, fontSize } from 'styles/theme'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'
// import WhenInView from 'components/wheninView'

// const Reveal = styled.div`
//   opacity: ${props => (props.visible ? '1' : '0')};
//   transform: translateY(${props => (props.visible ? '0px' : '30px')});
//   transition: all 1s;
// `

const Big = styled.span`
  font-size: ${fontSize.f6};
  color: ${color.grey900};
  font-weight: 700;
  ${media.sm`
    font-size: ${fontSize.f5};
  `}
`

function About() {
  return (
    <TwoColumns
      leftColumn={<SectionHeading>Hello</SectionHeading>}
      rightColumn={
        <Fragment>
          <Big>
            I'm Greyson. I explore, nurture, and refine 
            ideas. I'm in Eugene Oregon currently.
          </Big>
          <p>
            In my work I practice balancing the natural chaotic harmony of creation
            with the rigidity and familiarity that enables efficiency.
            {/* strive to optimize the aesthetic value and usability of
            products without losing sight of the technical challenges and
            limitations. */}
          </p>
          <p>
            Currently I'm keeping our teams happy at{' '}
            <Link to="/lifetime">Twenty Ideas</Link>.
          </p>
          <p style={{ marginBottom: 0 }}>
            Outside of work I'm passionate about my community, cooking, and riding
            board or bike around the city.
          </p>
        </Fragment>
      }
    />
  )
}

export default About
