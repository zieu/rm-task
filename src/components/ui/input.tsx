import cn from 'classnames'
import React, { useId } from 'react'

type InputProps = {
  label?: string
  value: string
} & React.InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = 'text',
  disabled,
  ...otherProps
}) => {
  const generatedId = useId()
  const inputId = id ?? generatedId

  return (
    <div className="mb-4">
      <label
        htmlFor={inputId}
        className="block text-sm font-medium text-slate-700 pb-1"
      >
        {label}
      </label>
      <input
        {...otherProps}
        id={inputId}
        type={type}
        className={cn(
          `mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 ring-offset-2 focus:border-blue-400 sm:text-sm`,
          otherProps.className,
          {
            'bg-gray-100 cursor-not-allowed': disabled,
            'bg-white': !disabled,
          }
        )}
      />
    </div>
  )
}

export default Input
