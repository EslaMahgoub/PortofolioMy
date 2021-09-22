import './Layout.scss'
import { Navbar } from '../../molecules/Navbar/Navbar'
import { Footer } from '../../molecules/Footer/Footer'

interface Layout {
  children: React.ReactNode;
}

export const Layout:React.FC<Layout> = (props): React.ReactElement => {
  return (
    <div className="layout">
      <div className="layout__top">
        <Navbar/>
        <div>{props.children}</div>
      </div>
      <Footer/>
    </div>
  )
}
