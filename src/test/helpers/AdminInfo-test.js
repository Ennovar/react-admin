import expect from 'expect';
import AdminInfo from '../../helpers/AdminInfo';
describe("AdminInfo", () => {
  it("should render", () => {
    AdminInfo.base_url = 'something';
    console.log('Hello')
    AdminInfo.initialize()

    expect(AdminInfo.getBaseUrl()).toEqual('something');
  });
})
