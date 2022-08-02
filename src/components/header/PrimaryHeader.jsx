import { Link } from '../link'
import Logo from './Logo'

const PrimaryHeader = () => {
  return (
    <div className="w-full pt-3 pb-6 flex items-center">
      <Logo />

      <nav className="ml-auto flex items-center gap-8">
        <Link to="#blog" disabled>
          Blog (coming soon...)
        </Link>
        <Link to="#work">Work</Link>
        <Link to="#case-studies">Case Studies</Link>
        <Link to="#about">About</Link>
        <button className="px-6 py-3 border border-zinc-800 text-sm hover:bg-zinc-800 hover:text-zinc-100 dark:border-zinc-200 dark:text-zinc-200 dark:hover:text-zinc-900 dark:hover:bg-zinc-100 transition-colors">
          Hire Sid.
        </button>
      </nav>
    </div>
  )
}

export default PrimaryHeader
