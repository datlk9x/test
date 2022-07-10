import './style.scss'
const Navbar = () => {
  return (
	<div className='container'>
		<nav className="navbar navbar-expand-lg">
		<div className="container-fluid">
			<a className="navbar-brand mr-415" href="/">
				<img src={require('../../Assets/Images/logo.png')} width="200" height="64" />
			</a>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item mx-2">
						<a className="nav-link active text-111" aria-current="page" href="/">HOME</a>
					</li>
					<li className="nav-item mx-2">
						<a className="nav-link text-666" href="/deposit-withdraw">DEPOSIT-WITHDRAW</a>
					</li>
					<li className="nav-item mx-2">
						<a className="nav-link text-666" href="/blog">BLOG</a>
					</li>
					<li className="nav-item mx-2">
						<a className="nav-link text-666" href="/about-us">ABOUT US</a>
					</li>
					<li className="nav-item mx-2">
						<a className="nav-link text-666" href="/contact-us">CONTACT US</a>
					</li>
					<li className="nav-item mx-2">
						<a className="btn btn-login nav-link text-white" href='/login'>LOGIN</a>
					</li>
					
				</ul>
			</div>
		</div>
		</nav>
	</div>
  )
}

export default Navbar