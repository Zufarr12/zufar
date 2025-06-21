import './header.css'

function Header() {
  return (
    <div>
       <div className="container">
        <header>
          <img src='./logo.png' />
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Produkt</a></li>
              <li><a href="#">Fag</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  )
}

export default Header

