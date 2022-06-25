import styled from 'styled-components'

export const Title = styled.h1`
    color: red;
    font-size: ${props => `${props.fontSize}px`};
    background-color: burlywood;

    span {
        font-size: 12px;
    }
`;

//Assim como no SASS, o Styled Components conta com o conceito de "nesting" (agrupar seletores CSS dentro de outros seletores CSS).

//O Styled Components também nos permite aplicar propriedades aos componentes e usá-las nos seletores CSS do Styled Components;
//A vantagem dessa funcionalidade (acima) consiste na possibilidade de se criar renderizações condicionais.

//Também é possível fazer um componente herdar as características de outro:

export const Subtitle = styled(Title)`
    color: coral;
    font-size: 16px;
`;
