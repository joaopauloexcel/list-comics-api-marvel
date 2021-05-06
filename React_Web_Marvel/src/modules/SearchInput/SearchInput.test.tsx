import React from 'react';
import SearchInput from '.'
import {render, waitForElement} from '@testing-library/react'

describe('Teste for Button Component', () => {
    it('Shoulf and new task when form has been submmitted', async () => {
        //renderizar o componente
        const { getByTestId } = render(<SearchInput search={""} onChange={(e:any) => console.log(e)}/>)
        //Buscar o componente
        const fieldNode = await waitForElement(
            () => getByTestId('search-input-field')
        )
        console.log(fieldNode)
        

    })
})