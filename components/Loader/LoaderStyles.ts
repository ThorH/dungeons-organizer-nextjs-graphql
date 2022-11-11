import styled from "styled-components";

export const LoaderContainer = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 1;
    width: 80px;
    height: 80px;
    margin: -76px 0 0 -76px;
    border: 8px solid #f3f3f3;
    border-radius: 50%;
    border-top: 8px solid #333333;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;

    @-webkit-keyframes spin {
      0% { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
`