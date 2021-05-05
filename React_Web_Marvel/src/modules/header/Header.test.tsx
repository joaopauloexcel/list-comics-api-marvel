import React from 'react';
import {Header} from './Header'
import {render, waitForElement} from '@testing-library/react'

describe('Teste for Header Component', () => {
    it('Should must render the component', async () => {
        //renderizar o componente
        const { getByTestId } = render(<Header/>)
        //Buscar o componente
        const fieldNode = await waitForElement(
            () => getByTestId('header-render')
        )
        console.log(fieldNode)
        
        //digitar no input
        // buscar o botão
        // clicar no botão
        // buscar a tabela
        // verificar se  atarefa foi adicionada

    })
})