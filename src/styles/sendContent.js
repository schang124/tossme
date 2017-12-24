import styled from 'styled-components';

const side = '25px';

export const Wrapper = styled.div`
    position: relative;
    margin: 0 ${side};
`;

export const Title = styled.h1.attrs({
    className: 'w300'
})`
    font-size: 12px;
    font-weight: normal;
    color: white;
    opacity: 0.5;
`;