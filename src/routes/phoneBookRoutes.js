<<<<<<< HEAD
import { addUser, deleteUser,  updateUser, checkUsers, groupCheck} from '../controllers/phoneBookControllers.js';

=======
import { addUser, deleteUser,  updateUser, checkUser, groupCheck} from '../controllers/phoneBookControllers.js';
>>>>>>> da5b9e42130d1e9ff7199ff904bb9b58d05ba2d7

const routes = (app) => {
   //adding user routes 
    app.route('/users')
        .get(checkUser )
        .post(addUser);

    app.route('/user/:id')
        .put(updateUser)
        .delete(deleteUser);

    app.route('/groups')
        .get( groupCheck )
};
export default routes;