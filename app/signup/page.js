export default function SignUp(){
    return (
        <div className="p-20">
            <h4>회원가입</h4>
            <form action="/api/member/signup" method="POST">
            <input name="userId" placeholder="아이디"/>
            <input name="userPassword" placeholder="비밀번호"/>
            <button type="submit">회원가입</button>
            </form>
        </div>
    )
}