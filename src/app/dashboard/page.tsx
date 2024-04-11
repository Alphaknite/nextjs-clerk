import { auth, currentUser } from '@clerk/nextjs'
import React from 'react'

async function Dashboard() {
    const {userId} = auth();
    const user = await currentUser();

    if(!userId || !user) {  
        return (
            <div className="flex items-center justify-center">
                <h1 className="text-4xl ">Please sign in</h1>
            </div>
        )
    }

  return (
    <div className="flex items-center justify-center">
        <h1 className="text-4xl ">{user?.username}</h1>
    </div>
  )
}

export default Dashboard;