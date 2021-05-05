import React from 'react';
import Button from './Button'
import {render, waitForElement} from '@testing-library/react'

describe('Teste for Button Component', () => {
    it('Shoulf and new task when form has been submmitted', async () => {
        //renderizar o componente
        const { getByTestId } = render(<Button/>)
        //Buscar o componente
        const fieldNode = await waitForElement(
            () => getByTestId('button-field')
        )
        console.log(fieldNode)
        //digitar no input
        // buscar o botão
        // clicar no botão
        // buscar a tabela
        // verificar se  atarefa foi adicionada

    })
})