import React from 'react'
import classnames from 'classnames'

const ExternalLink = ({ children, to, ...rest }) => {
  return (
    <a
      href={to}
      target="_blank"
      className="font-medium text-sm text-zinc-400 hover:text-rose-400 dark:text-zinc-500 dark:hover:text-teal-500 transition-colors"
      {...rest}
    >
      {children}
    </a>
  )
}

export default ExternalLink
