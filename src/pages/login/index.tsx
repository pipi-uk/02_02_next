import Header from '@/components/Header'
import Login from '@/components/Login'

import React from 'react'

const login = () => {
  return (
    <div>
     {/* この中に設定したパーツを読み込ませる */}
      <Header/>
      <Login />
    </div>
  )
}

export default login