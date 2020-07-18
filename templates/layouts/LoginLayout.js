module.exports = `import React from 'react'
import PropTypes from 'prop-types'

export default function LoginLayout ({children}) {
    return (<div>{children}</div>)
}

// eslint-disable-next-line react/no-typos
LoginLayout.propTypes = {
    children: PropTypes.element.isRequired
}`