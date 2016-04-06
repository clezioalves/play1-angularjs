package controllers;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import models.PaginatedDTO;
import models.User;
import play.modules.paginate.ModelPaginator;

/**
 * Created by clezio on 18/03/16.
 */

public class Users extends BaseController{

    public static void add(){
        User userDTO = new GsonBuilder().create().fromJson(request.params.get("body"), User.class);
        if(userDTO == null){
            userDTO = new User();
        }
        User user = new User(userDTO.getName());
        validation.valid(user);
        if (validation.hasErrors()) {
            error(HTTP_UNPROCESSABLE_ENTITY, new Gson().toJson(getListErrors(validation.errorsMap())));
        }
        user.save();
        renderJSON(user);
    }

    public static void edit(){
        User userDTO = new GsonBuilder().create().fromJson(request.params.get("body"), User.class);
        User user = User.findById(userDTO.getId());
        user.setName(userDTO.getName());
        validation.valid(user);
        if (validation.hasErrors()) {
            error(HTTP_UNPROCESSABLE_ENTITY, new Gson().toJson(getListErrors(validation.errorsMap())));
        }
        user.save();
        renderJSON(user);
     }

    public static void list(){
        ModelPaginator paginator = new ModelPaginator(User.class);
        paginator.setPageSize(7);
        PaginatedDTO users = new PaginatedDTO(paginator);
        renderJSON(users);
    }

    public static void delete(Long id){
        User user = User.findById(id);
        if(user == null){
            error(HTTP_UNPROCESSABLE_ENTITY, getMessage("entity.invalid", getMessage("models.user")));
        }
        user.delete();
        renderJSON(user);
    }

    public static void get(Long id){
        User user = User.findById(id);
        if(user == null){
            error(HTTP_UNPROCESSABLE_ENTITY, getMessage("entity.invalid", getMessage("models.user")));
        }
        renderJSON(user);
    }
}
