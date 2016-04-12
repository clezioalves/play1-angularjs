package controllers;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import models.PaginatedDTO;
import models.Project;
import play.modules.paginate.ModelPaginator;

import java.util.Date;

/**
 * Created by clezio on 10/04/16.
 */

public class Projects extends BaseController{

    public static void add(){
        Project projectDTO = new GsonBuilder().create().fromJson(request.params.get("body"), Project.class);
        if(projectDTO == null){
            projectDTO = new Project();
        }
        Project project = new Project();
        project.setName(projectDTO.getName());
        project.setDescription(projectDTO.getDescription());
        project.setCreated(new Date().getTime());
        project.setParticipants(projectDTO.getParticipants());

        validation.valid(project);
        if (validation.hasErrors()) {
            error(HTTP_UNPROCESSABLE_ENTITY, new Gson().toJson(getListErrors(validation.errorsMap())));
        }
        project.save();
        renderJSON(project);
    }

    public static void edit(){
        Project projectDTO = new GsonBuilder().create().fromJson(request.params.get("body"), Project.class);
        Project project = Project.findById(projectDTO.getId());
        project.setName(projectDTO.getName());
        project.setDescription(projectDTO.getDescription());
        project.setParticipants(projectDTO.getParticipants());
        project.setModified(new Date().getTime());
        validation.valid(project);
        if (validation.hasErrors()) {
            error(HTTP_UNPROCESSABLE_ENTITY, new Gson().toJson(getListErrors(validation.errorsMap())));
        }
        project.save();
        renderJSON(project);
     }

    public static void list(){
        ModelPaginator paginator = new ModelPaginator(Project.class).orderBy("name ASC");
        paginator.setPageSize(7);
        PaginatedDTO projects = new PaginatedDTO(paginator);
        renderJSON(projects);
    }

    public static void delete(Long id){
        Project project = Project.findById(id);
        if(project == null){
            error(HTTP_UNPROCESSABLE_ENTITY, getMessage("entity.invalid", getMessage("models.project")));
        }
        project.getParticipants().clear();
        project.delete();
        renderJSON(project);
    }

    public static void get(Long id){
        Project project = Project.findById(id);
        if(project == null){
            error(HTTP_UNPROCESSABLE_ENTITY, getMessage("entity.invalid", getMessage("models.project")));
        }
        renderJSON(project);
    }
}
