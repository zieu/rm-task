import { useMemo, useState } from 'react'
import { Layout } from '../components/layouts'
import { Card } from '../components/card'
import { Input, Loader } from '../components/ui'
import { useQuery } from '@tanstack/react-query'
import { getUsers } from '../api/users'

const RootPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const usersQuery = useQuery({ queryKey: ['users'], queryFn: getUsers })

  const filteredUsers = useMemo(
    () =>
      usersQuery.data?.filter((user) => {
        if (!searchQuery) return true
        const fullName = `${user.name.firstname} ${user.name.lastname}`
        const search = searchQuery.toLowerCase()

        return (
          fullName.toLowerCase().includes(search) ||
          user.email.toLowerCase().includes(search) ||
          user.phone.toLowerCase().includes(search) ||
          user.username.toLowerCase().includes(search)
        )
      }),
    [searchQuery, usersQuery.data]
  )

  return (
    <Layout>
      <h1 className="text-2xl font-bold pb-4 text-slate-700">Users</h1>
      <Input
        placeholder="Search users..."
        type="search"
        id="search"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        disabled={usersQuery.isLoading}
      />
      {usersQuery.isLoading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredUsers?.map((user) => (
            <Card key={user.id}>
              <div className="text-slate-700 overflow-auto">
                <div className="flex flex-col">
                  <div className="mb-2 text-lg">
                    <span className="font-semibold">{user?.username} </span>
                    <span className="capitalize text-base">
                      ({user?.name.firstname} {user?.name.lastname})
                    </span>
                  </div>

                  <div>
                    <span>Email: </span>{' '}
                    <span className="font-semibold">{user?.email}</span>
                  </div>
                  <div>
                    <span>Phone: </span>{' '}
                    <span className="font-semibold">{user?.phone}</span>
                  </div>
                </div>
                <span className="capitalize">{}</span>
              </div>
            </Card>
          ))}
        </div>
      )}
      {filteredUsers?.length === 0 && !usersQuery.isLoading && (
        <div className="text-xl text-gray-400 py-3 text-center">
          No user found
        </div>
      )}
    </Layout>
  )
}

export default RootPage
