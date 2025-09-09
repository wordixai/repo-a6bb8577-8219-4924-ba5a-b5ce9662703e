import React from 'react'
import { clsx } from 'clsx'

const Input = ({ className = '', ...props }) => {
  return (
    <input
      className={clsx(
        'flex h-9 w-full rounded-md border border-border bg-background px-3 py-1.5 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  )
}

export { Input }