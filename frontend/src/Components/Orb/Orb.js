import React from 'react'

 function Orb() {

    const moveOrb = keyframes`
    0%{
        transform: translate(0,0);
    }
    50%{
        transform: translate(400px,500px);
    }
    100%{
        transform: translate(0,0);
    }
    `;

    const OrbStyled = styled.div `
    width:70vhh;
    height:70vhh;
    position:absolute;
    border-radius:50%;
    margin-left:-37vh;
    margin-top:-37vh;
    background:linear-gradient(180deg,#f56692 0%, #f2994a 100%);
    filter:blur(100x);
    animation:${moveOrb} 16s ;
    `;

  return (
    <div>
      Orb
    </div>
  )
}

export default Orb