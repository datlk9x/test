import React from 'react'
import Image from '../Componenents/Image'
import TitleFrame from '../Componenents/TitleFrame'

const DepositWithdraw = () => {
  return (
	<div className='container my-5'>
		<img style={{height: '378px', width: '100%'}} src={require('../Assets/Images/banner-deposit.png')} />

		<TitleFrame title="1. Đăng ký tài khoản"/>

		<p className='fz-20'>Tại giao diện Wellcom chọn Sign Up và điền đầy đủ thông tin và bấm chọn Sign Up để đăng ký tài khoản mới. Đăng ký xong nhập Mail và Password nhấn chọn Sign In..</p>
		<Image ml='620' src={require("../Assets/Images/1.jpg")} />

		<TitleFrame title='2. cách nạp tiền vào tài khoản' />

		<p className='fz-20'>Chọn Deposit &rarr; Creaet New &rarr; Nhập số tiền muốn nạp &rarr; Chọn Select a Bank &rarr; Nhấn chọn Submit</p>
		<div className="d-flex my-5 justify-content-center">
			<Image src={require("../Assets/Images/2.jpg")} />
			<Image src={require("../Assets/Images/3.jpg")} />
			<Image src={require("../Assets/Images/4.jpg")} />
		</div>

		<p className='fz-20'>Chọn “Pick an image from camera roll” &rarr; Chọn hình và kéo chỉnh sau đó chọn “Cắt” &rarr; Nhấn chọn Submit .</p>
		<div className="d-flex my-5 justify-content-center">
			<Image src={require("../Assets/Images/5.jpg")} />
			<Image src={require("../Assets/Images/6.jpg")} />
			<Image src={require("../Assets/Images/7.jpg")} />
		</div>

		<h4>HƯỚNG DẪN MUA COIN</h4>
		<hr />
		<p className='fz-20'>Ở giao diện “Home” chọn “Buy” &rarr; Nhập số lượng Coin muốn mua &rarr; Nhấn “Buy”, vào “My Coin” để xem Coin mình đang có.</p>
		<div className="d-flex my-5 justify-content-center">
			<Image src={require("../Assets/Images/8.jpg")} />
			<Image src={require("../Assets/Images/9.jpg")} />
			<Image src={require("../Assets/Images/10.jpg")} />
		</div>

		<h4>HƯỚNG DẪN BÁN COIN</h4><hr/>
		<p  className='fz-20'>Vào “My coin” chọn “Sell” &rarr; Nhập số lượng muốn bán và nhấn chọn “Sell Coin”.</p>
		<div className="d-flex my-5 justify-content-center">
			<Image src={require("../Assets/Images/11.jpg")} />
			<Image src={require("../Assets/Images/12.jpg")} />
		</div>

		<h4>HƯỚNG DẪN RÚT TIỀN</h4><hr/>
		<p  className='fz-20'>Vào “Profile” chọn “Upload Document” &rarr; Tải CCCD hoặc CMND lên nhấn chọn “Change your Document”</p>
		<p  className='fz-20'>Vào “Withdraw” chọn “Click here” &rarr; Điền thông tin tài khoản và nhấn “Submit”.</p>
		<div className="d-flex my-5 justify-content-center">
			<Image src={require("../Assets/Images/13.jpg")} />
			<Image src={require("../Assets/Images/14.jpg")} />
			<Image src={require("../Assets/Images/15.jpg")} />
			<Image src={require("../Assets/Images/16.jpg")} />
		</div>
	</div>
  )
}

export default DepositWithdraw