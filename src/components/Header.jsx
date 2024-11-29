import Navigation from './Navigation'

const Header = ({currentPage, handlePageChange}) => {
   

  return (
    <header className="header">
        <h1>Theon Francis</h1>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
    </header>
  )
}

export default Header
