import React from 'react';
import {Footer} from './Footer'
import {render, waitForElement} from '@testing-library/react'

describe('Teste for Footer Component', () => {
    it('Should must render the component', async () => {
        //renderizar o componente
        const { getByTestId } = render(<Footer/>)
        //Buscar o componente
        const fieldNode = await waitForElement(
            () => getByTestId('footer-render')
        )
        console.log(fieldNode)
        
        //digitar no input
        // buscar o botão
        // clicar no botão
        // buscar a tabela
        // verificar se  atarefa foi adicionada

    })
})