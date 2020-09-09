import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Button = (props) => {

    const {
        type = 'button',
        url = '',
        className = '',
        theme = '',
        isFullWidth = false,
        children, 
        onClick
    } = props

    const buttonClass = classNames('btn', className, {
        'btn--primary' : theme === 'primary',
        'btn--secondary' : theme === 'secondary',
        'btn--full-width' : isFullWidth
    })

    const isAnchor = url && (url.includes('http') || url.startsWith('#') || url.startsWith('mailto') || url.startsWith('/'))

    const renderAnchor = () =>
        <a href={url} className={buttonClass}>{children}</a>

    const renderButton = () => 
        <button {...{type, onClick}} className={buttonClass}>{children}</button>

    return (
        isAnchor ? renderAnchor() : renderButton()
    )
}

Button.propTypes = {
    type: PropTypes.string,
    url: PropTypes.string,
    className: PropTypes.string,
    theme: PropTypes.string,
    isFullWidth: PropTypes.bool,
    children: PropTypes.string,
    onClick: PropTypes.string
}

export default Button
