import React from 'react'
import { mount } from 'enzyme'
import Footer from '../../components/Footer'

describe('<Footer/>', () => {
    const footer = mount(<Footer/>)
    test('render del component footer', () => {
        expect(footer.length).toEqual(1)
    })
    test('Render Tittle', () => {
        expect(footer.find('.Footer-title').text()).toEqual('Platzi Store')
    });
});

// mocks funciones para simular acciones de lo que tendria que hacer el app