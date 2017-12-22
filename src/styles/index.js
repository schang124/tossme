import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'
import styledNormalize from 'styled-normalize'

export default () => injectGlobal`
    ${styledNormalize}
    ${reset}
    
    body {
        background-color: #4564b6;
        font-family: 'NanumBarunGothic', sans-serif;
    }
    
    @font-face {
        font-family: 'NanumBarunGothic';
        font-style: normal;
        font-weight: 400;
        src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot');
        src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot?#iefix') format('embedded-opentype'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.woff') format('woff'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.ttf') format('truetype');
    }
    
    @font-face {
        font-family: 'NanumBarunGothic';
        font-style: normal;
        font-weight: 700;
        src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.eot');
        src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.eot?#iefix') format('embedded-opentype'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.woff') format('woff'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.ttf') format('truetype')
    }
    
    @font-face {
        font-family: 'NanumBarunGothic';
        font-style: normal;
        font-weight: 300;
        src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.eot');
        src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.eot?#iefix') format('embedded-opentype'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.woff') format('woff'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.ttf') format('truetype');
    }
    
    .nanumbarungothic * {
        font-family: 'NanumBarunGothic', sans-serif;
    }
    
    .normal {
        font-style: normal;
    }
    
    .w250 {
        font-weight: 250;
    }
    
    .w300 {
        font-weight: 300;
    }
    
    .w350 {
        font-weight: 350;
    }
    
    .w400 {
        font-weight: 400;
    }
    
    .w500 {
        font-weight: 500;
    }
    
    .w700 {
        font-weight: 700;
    }
    
    .w800 {
        font-weight: 800;
    }
    
    .w900 {
        font-weight: 900;
    }
    
    button {
        cursor: pointer;
        background-color: transparent;
        border: 0;
    }
`