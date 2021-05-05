import React from 'react';
import {CardComics} from './CardComics'
import {render, waitForElement} from '@testing-library/react'

describe('Teste for CardComics Component', () => {
    it('Should must render the component', async () => {
        //renderizar o componente
        const { getByTestId } = render(<CardComics dataArray={[]}/>)
        //Buscar o componente
        const fieldNode = await waitForElement(
            () => getByTestId('card-comics-render')
        )
        console.log(fieldNode)
        
        //digitar no input
        // buscar o botão
        // clicar no botão
        // buscar a tabela
        // verificar se  atarefa foi adicionada

    })
})