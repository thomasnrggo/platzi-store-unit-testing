import getData from '../../utils/getData'
describe('Fetch API', () => {
    beforeEach(() => {
        fetch.resetMocks()
    })
    test('Call API and return data', () => {
        fetch.mockResponseOnce(JSON.stringify({data:'12345'}))
        getData('http://google.com')
        .then(res => {
            expect(res.data).toEqual('12345')
        })
        expect(fetch.mock.calls[0][0]).toEqual('http://google.com')
    })
});