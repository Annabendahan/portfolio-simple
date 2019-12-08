import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: ``,
      padding: `20px 30px`,
      fontSize: `.67rem`,
      fontWeight: `500`,
      width: `100%`,
      position: `fixed`,
      color: `black`,
    }}
  >
    <div
      style={{
        display: `flex`,
      }}
    >
      <p
        style={{
          flex: `70%`,
        }}
      >
        {" "}
        <svg
          style={{ marginRight: `20px` }}
          width="9"
          height="9"
          viewBox="0 0 9 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="9" height="9" fill="#FF2E6C" />
        </svg>
        WEBDESIGN <b> & </b> CODE{" "}
      </p>

      <div
        style={{
          flex: `0 0 30%`,
          display: `flex`,
          justifyContent: `space-between`,
        }}
      >
        <p> AN.BENDAHAN@GMAIL.COM </p>
        <p>
          {" "}
          0659133919
          <svg
            style={{ marginLeft: `20px` }}
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="9" height="9" fill="#FF2E6C" />
          </svg>
        </p>
      </div>
    </div>

    <p
      style={{
        transform: `rotate(-90deg)`,
        position: `absolute`,
        top: `100px`,
        left: `-14px`,
      }}
    >
      {" "}
      ANNA BENDAHAN{" "}
    </p>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
