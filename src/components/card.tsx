import { FC, PropsWithChildren } from 'react'

export const Card: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-white shadow-md shadow-slate-200 rounded-md p-4">
      <div className="flex items-center">{children}</div>
    </div>
  )
}
