import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div
    style={{
      background: 'linear-gradient(90deg, #32AEE3 0%, #2F80ED 100%)',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Isak Fagerlund
        </Link>
      </h1>
    </div>
  </div>
)

export default Header