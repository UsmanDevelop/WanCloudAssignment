import Footer from './../Component/Footer'
import Header from './../Component/Header'
import Sidebar from './../Component/Sidebar'
import UserForm from '../Component/UserForm'

function Home() {

  return (
    <>
      <div className='flex h-fit bg-slate-200'>
        <Sidebar />
        <div className='flex flex-col justify-between w-full'>
          <Header className='w-full'/>
          <UserForm />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Home
