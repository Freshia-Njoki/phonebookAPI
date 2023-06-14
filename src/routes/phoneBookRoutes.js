import { addUser, deleteUser,  updateUser, checkUser, groupCheck} from '../controllers/phoneBookControllers.js';

const routes = (app) => {
   //adding user routes 
    app.route('/users')
        .get(checkUser )
        .post(addUser);

    app.route('/user/:id')
        .post(updateUser)
        .delete(deleteUser);

    app.route('/groups')
        .get( groupCheck )
};
export default routes;