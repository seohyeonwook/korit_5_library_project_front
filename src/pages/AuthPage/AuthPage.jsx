/** @jsxImportSource @emotion/react */
import OAuth2Page from "../OAuth2Page/OAuth2Page";
import OAuth2SignupPage from "../OAuth2SignupPage/OAuth2SignupPage";
import SigninPage from "../SigninPage/SigninPage";
import SignupPage from "../SignupPage/SignupPage";
import * as s from "./style";
import { Route, Routes } from 'react-router-dom';

function AuthPage() {
    return (
        <div css={s.layout}>
            <Routes>
                <Route path='/signin' element={ <SigninPage /> }/>
                <Route path='/signup' element={ <SignupPage /> } />
                <Route path='/oauth2' element={ <OAuth2Page /> } />
                <Route path='/oauth2/merge' />
                <Route path='/oauth2/signup' element={ <OAuth2SignupPage /> }/>
            </Routes>
        </div>
    );
}

export default AuthPage;