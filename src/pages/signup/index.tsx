import Header from '@/components/Header'
import SignUp from '@/components/SignUp'
import React from 'react'

const login = () => {
  return (
    <div>
     {/* この中に設定したパーツを読み込ませる */}
      <Header/>
      <SignUp/>
    </div>
  )
}

export default login