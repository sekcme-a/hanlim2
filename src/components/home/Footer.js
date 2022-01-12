import React from "react"
import MapIcon from '@mui/icons-material/Map';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3 className="footer-logo">벤처한림회</h3>
        <div className="footer-info">
          <p>상호 : (사)벤처한림회 | 대표자명 : 000</p>
          <p>고유번호 : 000-00-00000</p>
          <p>대표번호 : 00-0000-0000 | 팩스 : 00-0000-0000 | 이메일 : hanlim@naver.com</p>
          <p>주소 : 본부 - 장안평 사무실(서울 동대문구 장안동 465-11, 세우빌딩)<br />서울지사 - 율곡로 사무실(서울 종로구 율곡로 160)</p>
        </div>
        <p className="footer-company-name">벤처한림회 &copy; 2021</p>
      </div>
      <div className="footer-center">
        <div>
          <div className="icon"><MapIcon/></div>
          <p><span>본부 : 장안평 사무실(서울 동대문구 장안동 465-11, 세우빌딩)<br />서울지사 : 율곡로 사무실(서울 종로구 율곡로 160)</span>
            </p>
        </div>
        <div>
          <div className="icon"><PhoneIcon /></div>
          <p>00-0000-0000</p>
        </div>
        <div>
          <div className="icon"><EmailIcon/></div>
          <p><a href="mainto:hanlim@naver.com">contact@hanlim@naver.com</a></p>
        </div>
      </div>
      <div className="footer-right">
        <p className="footer-company-about">
          <span>About us</span>
          벤처한림회는 노인일자리와 소득창출을 위한 노장청 공동스타트업으로서 ...
        </p>
      </div>
      
    </footer>
  )
}
export default Footer