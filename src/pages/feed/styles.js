import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    `
export const Title = styled.h3`
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 24px;
    line-height: 25px;
    color: #ffffff;
    `
export const TitleHighlight = styled.h3`
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 24px;
    line-height: 25px;
    color: #ffffff;
    `
export const Column = styled.p`
    flex:${({flex}) => flex};
    padding-right: 24px;
`