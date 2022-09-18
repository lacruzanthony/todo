import request from "supertest";
import { app } from "../../app";

describe('index route', () => {
  it('Should return the TODO list', () => {
    return request(app).get('/').expect(200)
  })
})