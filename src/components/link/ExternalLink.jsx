import React from 'react'
import classnames from 'classnames'

const ExternalLink = ({ children, to, ...rest }) => {
  return (
    <a
      href={to}
      target="_blank"
      className="font-bold uppercase text-xs tracking-wider text-zinc-500 hover:text-rose-500 dark:text-zinc-500 dark:hover:text-sky-500 transition-colors"
      {...rest}
    >
      {children}
    </a>
  )
}

export default ExternalLink
