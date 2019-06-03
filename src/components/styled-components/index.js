import styled from 'styled-components';

const HandleContainer = styled.div`
    justify-self: center;
    -webkit-transform: rotate(${props => props.degrees || "0"}deg);
    -ms-transform: rotate(${props => props.degrees || "0"}deg);
    transform: rotate(${props => props.degrees || "0"}deg);
    >span {
        background: green;
        width: 0.2vw;
        height: 50%;
        display: block;
    }
`;

export { HandleContainer };
