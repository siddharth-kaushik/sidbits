import React from 'react'
import { status } from './constants'

const Status = ({ available = true }) => {
  const statusColor = available
    ? 'bg-emerald-400 dark:bg-emerald-600'
    : 'bg-amber-400 dark:bg-amber-600'

  return (
    <div className="flex items-center gap-1">
      <span className={`w-2 h-2 rounded-lg mt-1 ${statusColor}`} />
      <span className="text-zinc-400 dark:text-zinc-500">
        {available ? status.available : status.unavailable}
      </span>
    </div>
  )
}

export default Status
