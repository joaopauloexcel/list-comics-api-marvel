import React from 'react';
import {Dashboard} from './Dashboard'
import {fireEvent, render, waitForElement} from '@testing-library/react'
import { Provider } from "react-redux";
import store from '../../store/createStore';
import * as ReactIntl from 'react-intl';
import { Router } from 'react-router-dom';
import history from '../../history';
import * as locale from '../../locale';

describe('Teste for Dashboard Component', () => {
    it('Should must render the component', async () => {
        //renderizar o componente
        const { getByTestId } = render(
            <Provider store={store}>
                <ReactIntl.IntlProvider
					locale={'pt-BR'}
                    messages={locale.ptBR}
				>
					<Router history={history}>
                        <Dashboard/>
					</Router>

				</ReactIntl.IntlProvider>
            </Provider>)
        //Buscar o componente
        const fieldNode = await waitForElement(
            () => getByTestId('dashboard-render')
        )
        console.log(fieldNode)

        
        

    })
})