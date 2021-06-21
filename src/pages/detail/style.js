import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
height: 100vh;
`;

export const DetailDiv = styled.div`
border: 1px solid green;
width: 500px;
min-height: 500px;
position: relative;
padding-bottom: 2rem;
`

export const H2Title = styled.h2`
margin: 0.83rem
`

export const TableStyled = styled.table`
width: 100%;
padding: 0 1rem;
`

export const ButtonStyled = styled.button`
position: absolute;
bottom: 10px;
left: 10px;
`
export const WishlistInput = styled.div`
display: flex;
flex-direction: column;
// height: 80px;
width: 100%;
justify-content: space-between;
padding: 1rem;
box-sizing: border-box;
positoin: relative;
`

export const FormControl = styled.div`
display: flex;
flex-direction: column;
margin: 0.5rem 0
`

export const ButtonSubmit = styled.button`
float: right;
`

export const Clear = styled.div`
clear: both;
`

export const ListWishlist = styled.div`
padding: 0.5rem 1rem;
`
