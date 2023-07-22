import './style.css'
const Navigation = () => {
  return (
    <nav className="container">
        <div className="logo">
            <img src="/images/nav.png" alt="navimage" />
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

    </nav>
  )
}

export default Navigation