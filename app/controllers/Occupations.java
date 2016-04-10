package controllers;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.mysql.jdbc.exceptions.MySQLIntegrityConstraintViolationException;
import models.PaginatedDTO;
import models.Occupation;
import play.modules.paginate.ModelPaginator;

import java.sql.SQLException;
import java.util.Date;
import java.util.List;

/**
 * Created by clezio on 09/04/16.
 */

public class Occupations extends BaseController{

    public static void add(){
        Occupation occupationDTO = new GsonBuilder().create().fromJson(request.params.get("body"), Occupation.class);
        if(occupationDTO == null){
            occupationDTO = new Occupation();
        }
        Occupation occupation = new Occupation(occupationDTO.getName());
        occupation.setCreated(new Date().getTime());
        validation.valid(occupation);
        if (validation.hasErrors()) {
            error(HTTP_UNPROCESSABLE_ENTITY, new Gson().toJson(getListErrors(validation.errorsMap())));
        }
        occupation.save();
        renderJSON(occupation);
    }

    public static void edit(){
        Occupation occupationDTO = new GsonBuilder().create().fromJson(request.params.get("body"), Occupation.class);
        Occupation occupation = Occupation.findById(occupationDTO.getId());
        occupation.setName(occupationDTO.getName());
        occupation.setModified(new Date().getTime());
        validation.valid(occupation);
        if (validation.hasErrors()) {
            error(HTTP_UNPROCESSABLE_ENTITY, new Gson().toJson(getListErrors(validation.errorsMap())));
        }
        occupation.save();
        renderJSON(occupation);
     }

    public static void list(){
        ModelPaginator paginator = new ModelPaginator(Occupation.class);
        paginator.setPageSize(7);
        PaginatedDTO occupations = new PaginatedDTO(paginator);
        renderJSON(occupations);
    }

    public static void delete(Long id){
        try {
            Occupation occupation = Occupation.findById(id);
            if (occupation == null) {
                error(HTTP_UNPROCESSABLE_ENTITY, getMessage("entity.invalid", getMessage("models.occupation")));
            }
            occupation.delete();
            renderJSON(occupation);
        }catch(Exception cvex){
            Throwable ex = cvex;
            while(ex.getCause() != null){
                ex = ex.getCause();
            }
            if(ex instanceof SQLException){
                if(((SQLException) ex).getErrorCode() == 1451){
                    error(HTTP_UNPROCESSABLE_ENTITY, getMessage("entity.constraint"));
                }
            }
            error(HTTP_UNPROCESSABLE_ENTITY, ex.getMessage());
        }
    }

    public static void get(Long id){
        Occupation occupation = Occupation.findById(id);
        if(occupation == null){
            error(HTTP_UNPROCESSABLE_ENTITY, getMessage("entity.invalid", getMessage("models.occupation")));
        }
        renderJSON(occupation);
    }

    public static void all(){
        List<Occupation> occupations = Occupation.findAll();
        renderJSON(occupations);
    }
}
