const request = require('supertest')
const app = require('./../app')

beforeAll((done) => {
    request(app).get('/create').send()
        .then(() => {
            done()
        })
})

describe('Test get /homeworks', () => {
  
    test('GET /homeworks should return all entries', (done) => {
        request(app).get('/homeworks')
            .send()
            .expect(200)
            .then(res => {
                expect(JSON.parse(res.text).length).toBe(10)
                done()
            })
    })

    test('GET /homeworks?pass=true should return all entries >= 5', (done) => {
        request(app).get('/homeworks?pass=true')
            .send()
            .expect(200)
            .then(res => {
                var response = JSON.parse(res.text);
                response.forEach(el => {expect(el.grade).toBeGreaterThanOrEqual(5)})
                done()
            })
    })


    test('GET /homeworks/11 should return 404', (done) => {
        request(app).get('/homeworks/11')
        .send()
        .expect(404)
        .then(res => {
            done()
        })
    })

    test('GET /homeworks/10 should return a valid response', (done) => {
        request(app).get('/homeworks/10')
        .send()
        .expect(200)
        .then(res => {
            expect(JSON.parse(res.text)).toMatchObject({id:10, student: 'name9', content: 'some text here 9', grade: 8})
            done()
        })
    })

    test('GET /homeworks/10 should return content when accepting only text', (done) => {
        request(app).get('/homeworks/10').set('accept', 'text/plain')
        .send()
        .expect(200)
        .then(res => {
            expect(res.text).toBe('some text here 9')
            done()
        })
    })

})



