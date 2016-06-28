import expect from 'expect';
import AdminActions from '../../actions';

describe('AdminActions', () => {
  it('should get models', () => {
    AdminActions.baseUrl = 'http://reactadmintestapi.herokuapp.com/api/'
    console.log(AdminActions.baseUrl)
    AdminActions.getModels();
  });
})
