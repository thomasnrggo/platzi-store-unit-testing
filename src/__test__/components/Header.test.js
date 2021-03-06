import React from 'react'
import { mount, shallow } from 'enzyme'
import ProviderMock from '../../__mocks__/providerMock'
import Header from '../../components/Header'
import {create} from 'react-test-renderer'

describe('<Header/>', () => {
    test('Header Render ', () => {
        const header = shallow(
            <ProviderMock>
                <Header/>
            </ProviderMock>
        )
        expect(header.length).toEqual(1)  
    });
    test('render header title', () => {
        const header = mount(
            <ProviderMock>
                <Header/>
            </ProviderMock>
        )
        expect(header.find('.Header-title').text()).toEqual('Platzi Store')
    });
});

describe('<Header/> snapshot', () => {
    test('Header snapshot header', () => {
        const header = create(
            <ProviderMock>
                <Header/>
            </ProviderMock>
        )
        expect(header.toJSON()).toMatchSnapshot()
    })
    
});