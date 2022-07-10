import React from 'react'

const Footer = () => {
	const listBrand = [
		{ name: 'Products', items: ['Blockchain Explorer', 'Crypto API', 'Crypto Indices', 'Interest', 'Jobs Board', 'Sitemap'] },
		{ name: 'Company', items: ['About us', 'Terms of use', 'Privacy Policy', 'Disclaimer', 'Methodology', 'CareersWe’re hiring!'] },
		{ name: 'Support', items: ['Request Form', 'Contact Support', 'FAQ', 'Glossary'] },
		{ name: 'Socials', items: ['Facebook', 'Twitter', 'Telegram', 'Instagram', 'Interactive Chat'] },
	]
  return (
	<div className="container w-100 ">
		<div className='row container my-5'>
				<div className='col-3'></div>
				<div className="col-6 row">
					<div className='col-4'>Privacy Notice</div>
					<div className='col-4'>Cookies Notice</div>
					<div className='col-4'>Cookies Settings</div>
				</div>
				<div className='col-3'></div>
		</div>
		<div className='row my-5'>
			{listBrand.map((obj, idx) => (
				<div className='col-3' key={'col'+idx}>
					<p><b>{obj.name}</b></p>
					{obj.items.map((item, i) => (
						<p key={i}>{item}</p>
					))}
				</div>
			))}
		</div>
	</div>
  )
}

export default Footer