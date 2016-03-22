package controllers;

import com.google.gson.GsonBuilder;
import models.User;

import java.util.List;

/**
 * Created by clezio on 18/03/16.
 */

public class Users extends BaseController{

    public static void add(){
        User userDTO = new GsonBuilder().create().fromJson(request.params.get("body"), User.class);
        User user = new User(userDTO.getName());
        user.save();
        renderJSON(user);
    }

    public static void edit(){
        User userDTO = new GsonBuilder().create().fromJson(request.params.get("body"), User.class);
        User user = User.findById(userDTO.getId());
        user.setName(userDTO.getName());
        user.save();
        renderJSON(user);
    }

    public static void list(){
        List<User> users = User.findAll();
        renderJSON(users);
    }

    public static void delete(Long id){
        User user = User.findById(id);
        user.delete();
        renderJSON(user);
    }

    public static void get(Long id){
        User user = User.findById(id);
        renderJSON(user);
    }
}
