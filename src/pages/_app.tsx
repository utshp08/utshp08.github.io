import '../styles/globals.css'
import type { AppProps } from 'next/app'
import PageWithTransition from '../layouts/PageWithTransition';
import SideBar from '../layouts/Sidebar';

export default function App(props: AppProps) {
  return (
    <div className=" bg-black text-white">
      <SideBar />
      <PageWithTransition {...props} />
    </div>
  )
}
