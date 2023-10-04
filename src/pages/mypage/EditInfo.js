import { useState } from "react";

const EditInfo = () => {
  const [pw, setPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [checkNewPw, setCheckNewPw] = useState("");
  const [addr, setAddr] = useState("기존 사용자의 주소정보");
  const [phone, setPhone] = useState("01000000000");
  const [mail, setMail] = useState("ease@ease.com");

  const handlePw = (e) => {
    setPw(e.target.value);
  };
  const handleNewPw = (e) => {
    setNewPw(e.target.value);
  };
  const handleCheckNewPw = (e) => {
    setCheckNewPw(e.target.value);
  };
  const handleAddr = (e) => {
    setAddr(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleMail = (e) => {
    setMail(e.target.value);
  };

  return (
    <div>
      <h1>Edit Info</h1>
      <form>
        <div>
          <span>아이디</span>
          <span>대충 사용자의 아이디 정보</span>
        </div>
        <div>
          <span>비밀번호</span>
          <input type="password" onChange={handlePw} />
        </div>
        <div>
          <span>새로운 비밀번호</span>
          <input type="password" onChange={handleNewPw} />
          {pw === newPw ? null : <span>비밀번호가 일치하지 않습니다!</span>}
        </div>
        <div>
          <span>새로운 비밀번호 확인</span>
          <input type="password" onChange={handleCheckNewPw} />
          {checkNewPw === newPw ? null : (
            <span>비밀번호가 일치하지 않습니다!</span>
          )}
        </div>
        <div>
          <span>배송주소</span>
          <input type="text" onChange={handleAddr} />
        </div>
        <div>
          <span>휴대전화</span>
          <input type="text" onChange={handlePhone} />
        </div>
        <div>
          <span>이메일</span>
          <input type="email" onChange={handleMail} />
        </div>
        <div>
          <span>생년월일</span>
          <span>사용자의 생년월일</span>
        </div>
        <button type="submit">수정완료</button>
        <button type="button">수정취소</button>
      </form>
    </div>
  );
};
export default EditInfo;
