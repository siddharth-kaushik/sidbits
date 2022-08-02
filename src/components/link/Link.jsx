import { NavLink } from 'react-router-dom'

const Link = ({ children, to, disabled }) => {
  return (
    <NavLink
      className={`text-sm text-zinc-800 hover:text-rose-500 dark:text-zinc-200 dark:hover:text-teal-500 transition-colors ${
        disabled ? 'pointer-events-none select-none opacity-30' : ''
      }`}
      to={to}
    >
      {children}
    </NavLink>
  )
}

export default Link
