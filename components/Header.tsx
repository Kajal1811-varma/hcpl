import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
// import HcplLogo from 'public/HcplLogo.jpeg'
import Link from './Link'
import MobileNav from './MobileNav'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="container mx-auto flex items-center justify-between py-3">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="ml-3"> {/* Adjusted from 'mr-3' to 'ml-3' to move it right */}
            <Image src="/HcplLogo.jpeg" alt="Logo" width={130} height={100}/>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden font-medium text-gray-900 hover:text-[#ef1c25] dark:text-gray-100 dark:hover:text-[#ef1c25] sm:block"
            >
              {link.title}
            </Link>
          ))}
        {/* <SearchButton /> */}
        {/* <ThemeSwitch /> */}
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
