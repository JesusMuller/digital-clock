import styled from 'styled-components';

const ClockHandle = styled.div`
    grid-column: 3 / 4;
    grid-row: 1 / 6;
    justify-self: center;
    padding-top: ${props => props.paddingTop || "0"}%;
    -webkit-transform: rotate(${props => props.degrees || "0"}deg);
    -ms-transform: rotate(${props => props.degrees || "0"}deg);
    transform: rotate(${props => props.degrees || "0"}deg);
    >span {
        display: block;
        height: ${props => props.height || "50"}%;
        width: ${props => props.width || "0"}vw;
        background: #FFFFFF;
    }
`;

export default ClockHandle;
