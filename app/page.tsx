import Home from '@/components/Home'
import Nav from '@/components/Nav'
import About from '@/components/About'
import Skills from '@/components/Skills'

export default function Portfolio() {


  return (
    <main className="flex scroll-smooth overflow-hidden bg-fixed bg-primary-50 dark:bg-secondary-50">
      
      <Nav></Nav>

      <div className='flex ml-0 lg:mt-0 lg:ml-40 flex-col max-w-full w-full '>

      <Home />

      <Skills />

      <About />

      </div>
    </main>

  )
}
