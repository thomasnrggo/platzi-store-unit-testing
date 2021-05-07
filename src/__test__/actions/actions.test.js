import actions from '../../actions'
import ProductMock from '../../__mocks__/productMock'

describe('Actions', () => {
    test('AddToCart action', () => {
        const payload = ProductMock
        const expected = {
            type: 'ADD_TO_CART',
            payload
        }
        expect(actions.addToCart(payload)).toEqual(expected)
    })
    test('removeFromCart action', () => {
        const payload = ProductMock
        const expected = {
            type: 'REMOVE_FROM_CART',
            payload
        }
        expect(actions.removeFromCart(payload)).toEqual(expected)
    })
    
});