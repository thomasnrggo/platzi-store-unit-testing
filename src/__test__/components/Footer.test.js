import React from 'react'
import { mount } from 'enzyme'
import { create } from 'react-test-renderer'
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

describe('Footer Snapshot', () => {
    test('UI check to footer component', () => {
        const footer = create(<Footer/>)
        expect(footer.toJSON()).toMatchSnapshot()
    })
    
});

// mocks funciones para simular acciones de lo que tendria que hacer el app