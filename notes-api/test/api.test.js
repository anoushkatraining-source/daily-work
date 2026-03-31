const {describe,it} = require("mocha");

const app = require ('../server');

const request = require("supertest");

const {expect} = require('chai');

describe('GET /notes', ()=> {

    it('should return all notes123',async () =>{

        console.log(request);

        const response = await request(app).get('/notes');

        expect(response.status).to.equal(200);

        expect(response.body).to.be.an('array');

    });

    it('should return 404 for non existing id', async ()=>{

        console.log(request);

        const response = await request(app).get('/notes/123');

        expect(response.status).to.equal(404);

    });

      it('test create new note', async () => {

        const response = await request(app)

            .post('/notes')

            .send({ title: 'task1', content: 'this is a note' });
 
        expect(response.status).to.equal(201);

    });
it('should return 400 if title is missing', async () => {

    const response = await request(app)

        .post('/notes')

        .send({ content: 'no title' });
 
    expect(response.status).to.equal(400);

});
 
it('should return 400 if content is missing', async () => {

    const response = await request(app)

        .post('/notes')

        .send({ title: 'no content' });
 
    expect(response.status).to.equal(400);

});
 it('should return 404 when deleting non-existing note', async () => {

    const response = await request(app).delete('/notes/123456');
 
    expect(response.status).to.equal(404);

});
 
 
})
 