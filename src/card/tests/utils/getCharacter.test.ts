import { getCharacter } from '../../utils/getCharacter'
import fetchMock from 'jest-fetch-mock'

describe('testing api', () => {
  beforeEach(() => {
    fetchMock.resetMocks()
  })
 
  it('calls google and returns data to me', () => {
    fetchMock.mockResponseOnce(JSON.stringify({ data: '12345' }))
    
    //assert on the response
    getCharacter('https://rickandmortyapi.com/api/character/38')
      .then(res => expect(res).toEqual('12345'))

    //assert on the times called and arguments given to fetch
    expect(fetchMock.mock.calls.length).toEqual(1)
    expect(fetchMock.mock.calls[0][0]).toEqual({'data': '12345'})
  })
})