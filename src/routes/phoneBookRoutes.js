import { addUser, deleteUser,  updateUser, checkUsers} from '../phoneBookRoutes.js';

const routes = (app) => {
   //adding user routes 
    app.route('/users')
        .get(checkUsers )
        .post(addUser);

    app.route('/user/:id')
        .post(updateUser)
        .delete(deleteUser);

};
export default routes;