import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'
import styledNormalize from 'styled-normalize'

export default () => injectGlobal`
    ${styledNormalize}
    ${reset}
    
    body {
        background-color: #4564b6;
        font-family: 'Spoqa Han Sans', sans-serif;
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
        outline: 0;
    }
    
    input {
        margin: 0;
        padding: 0;
        border-radius: 0;
    }
    
    a{
        text-decoration: none;
    }
`