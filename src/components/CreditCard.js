import React from 'react'
import styled from 'styled-components'

class CreditCard extends React.Component {
  render() {

    //props
    const {type, number, expirationMonth, expirationYear, owner, bank, color, bgColor} = this.props

    //styled components
    const CreditCardDiv = styled.div`
      border-radius: 10px;
      background-color: ${bgColor} ;
      width: 500px;
    `

    const LogoDiv = styled.div`
    margin-top: 10px;
    margin-right: 10px;
      display: flex;
      justify-content: flex-end;
    `

    const LogoImg = styled.img`
        width:120px;
    `

    const NumberDiv = styled.div`
        color: ${color};
        display:flex;
        justify-content: center;
        font-size: 40px;
    `

    const ExpAndBankDiv = styled.div`
    display:flex;
    justify-content: space-evenly;
    width: 50%;
    `

    const NameDiv= styled.div`
    color: ${color};
    font-size: 20px;
    `

    const renderImage = () => {
        if(type === "Visa"){
            return <LogoImg src={process.env.PUBLIC_URL + '/img/visa.png'} alt="Visa" />
        }else if(type === "Master Card"){
            return <LogoImg src={process.env.PUBLIC_URL + '/img/master-card.svg'} alt="Master Card" />
        }
    }

    return (
      <CreditCardDiv>
        <LogoDiv>
          {renderImage()}
        </LogoDiv>
        <NumberDiv>
            <p>{"•••• •••• •••• "+ number.slice(12)}</p>
        </NumberDiv>
        <ExpAndBankDiv>
            <p>
                Expires {expirationMonth}/{expirationYear}
            </p>
            <p>
                {bank}
            </p>
        </ExpAndBankDiv>
        <NameDiv>
            <p>
                {owner}
            </p>
        </NameDiv>
      </CreditCardDiv>
    )
  }
}

export default CreditCard
