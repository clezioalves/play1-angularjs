package controllers;

import com.google.gson.GsonBuilder;
import models.User;
import org.jboss.netty.handler.codec.http.HttpMethod;

import java.util.List;

/**
 * Created by clezio on 18/03/16.
 */

public class Users extends BaseController{
    public static void crud(Long id){
        if(HttpMethod.POST.getName().equals(request.method)) {
            User userDTO = new GsonBuilder().create().fromJson(request.params.get("body"), User.class);
            User user = new User(userDTO.getName());
            user.save();
            renderJSON(user);
        } else if(HttpMethod.DELETE.getName().equals(request.method)){
            User user = User.findById(id);
            user.delete();
            renderJSON(user);
        } else {
            if(id != null) {
                User user = User.findById(id);
                renderJSON(user);
            }else{
                List<User> users = User.findAll();
                renderJSON(users);
            }
        }
    }
}
