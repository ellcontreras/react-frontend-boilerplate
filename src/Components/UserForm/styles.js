import styled from 'styled-components'

export const Error = styled.small`
  font-size: 10px;
  color: red;
`

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  padding: 8px 0;
`

export const Form = styled.form`
  padding: 16px 0;
  &[disabled] {
    opacity: .3;
    pointer-events: none;
  }
  width: 100%;
`

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
`

export const Button = styled.button`
  background: #8d00ff;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display: block;
  width: 100%;
  text-align: center;
  cursor: pointer;
`