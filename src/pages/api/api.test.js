const { Api } = require("./api");

// unit test, sorry it is not finished
describe('Api', ()=>{
    test('should return value async', async() => {
        const result = await Api.echo('some data')
        expect(result).toBe('some data')
    })
    test('should catch error', async()=>{
        try {
            await Api.echo()
        } catch(error) {
            expect(error.message).toBe('error')
        }
        })
})

