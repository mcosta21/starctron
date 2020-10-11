import styled from 'styled-components'

export const Switch = styled.label`
    position: relative;
    display: inline-block;
    width: 50px;
    height: 24px;

    input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${props => props.theme.backgrounds.darker};
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 34px;
      }
      
    .slider:before {
        position: absolute;
        content: "";
        height: 16px;
        width: 16px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 50%;
    }
    
    input:checked + .slider {
        background-color: ${props => props.theme.colorsTheme.blue};
    }
    
    input:focus + .slider {
        box-shadow: 0 0 1px ${props => props.theme.colorsTheme.blue};
    }
    
    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }
      
`