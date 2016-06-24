import expect from 'expect';
import {
  getModels,
} from '../../api';

describe("AdminAPI", () => {
  it("should get models", () => {
    getModels();
  });
})
