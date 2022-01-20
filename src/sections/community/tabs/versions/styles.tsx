import styled from "styled-components"

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 24px;

  min-height: 350px;

  background: #ffffff;

  border: 1px solid #f5f6f7;
  box-sizing: border-box;
  border-radius: 8px;
`

export const CardIcon = styled.img`
  position: static;
  width: 48px;
  height: 48px;
  left: 0px;
  top: 0px;

  /* Primary / Light 2 */

  background: #fff3eb;
  border-radius: 4px;

  padding: 8px;
  margin-bottom: 10px;
`
export const CardTitle = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  color: #1a2138;
`

export const CardDescription = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #8c909c;
  overflow-y: auto;
  max-height: 150px;
`
