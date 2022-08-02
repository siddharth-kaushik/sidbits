import { ExternalLink } from '../link'
import { mediaLinks } from './constants'
import Status from './Status'

const SecondaryHeader = () => {
  return (
    <div className="w-full border-b-2 border-b-zinc-100 dark:border-b-zinc-700 h-12 flex items-center gap-1 text-sm">
      <span>
        <span>👋</span> Siddharth Kaushik
      </span>

      <Status available />

      <nav className="ml-auto flex items-center gap-6">
        {mediaLinks.map((link) => (
          <ExternalLink key={link.label} to={link.url}>
            {link.label}
          </ExternalLink>
        ))}
      </nav>
    </div>
  )
}

export default SecondaryHeader
