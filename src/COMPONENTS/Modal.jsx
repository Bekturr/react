import React from 'react'
import styled from 'styled-components'

const Modal = (props) => {
    return (

        <>
            <BackdropStyle>nm,</BackdropStyle>
  
            <ModalStyle>
                <h1>MODAL</h1>
                <button onClick={props.onClouse}>Clouse</button>
            </ModalStyle>


        </>

    )
}

export default Modal;

const ModalStyle = styled.div`
border: 2px solid;
width: 200px;
border-radius: 20px;
text-align: center;
padding: 0px 30px;
position: fixed;
top: 50px;
left: 150px;
background-color: yellow;

`

const BackdropStyle = styled.div`
background-color: #0000008d;
width: 100vw;
height: 100vh;
position: absolute;
left: 0;
top: 0;
`