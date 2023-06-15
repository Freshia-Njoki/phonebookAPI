import { addUser, deleteUser,  updateUser, checkUsers, groupCheck} from '../controllers/phoneBookControllers.js';


const routes = (app) => {
   //adding user routes 
    app.route('/users')
        .get(checkUsers )
        .post(addUser);

    app.route('/user/:id')
        .put(updateUser)
        .delete(deleteUser);

    app.route('/groups')
        .get( groupCheck )
};
export default routes;