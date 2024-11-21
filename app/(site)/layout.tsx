import { Footer } from "@/components/site/Footer"
import { Header } from "@/components/site/Header"

const SiteLayout = ({children}:{children: React.ReactNode}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />  
    </>
  )
}
export default SiteLayout