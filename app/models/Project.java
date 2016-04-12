package models;

import com.google.gson.annotations.Expose;
import play.data.validation.Required;

import javax.persistence.*;
import java.util.Set;

/**
 * Created by clezio on 18/03/16.
 */
@Entity(name = "projects")
public class Project extends BaseModel {

    @Expose
    @Required()
    private String name;

    @Expose
    private String description;

    @Expose
    @Required()
    @ManyToMany()
    @JoinTable(name="users_projects", joinColumns={@JoinColumn(name="project_id")}, inverseJoinColumns={@JoinColumn(name="user_id")})
    private Set<User> participants;

    @Expose
    @Required()
    private Long created;

    @Expose
    private Long modified;

    public Project() {}

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Set<User> getParticipants() {
        return participants;
    }

    public void setParticipants(Set<User> participants) {
        this.participants = participants;
    }

    public Long getCreated() {
        return created;
    }

    public void setCreated(Long created) {
        this.created = created;
    }

    public Long getModified() {
        return modified;
    }

    public void setModified(Long modified) {
        this.modified = modified;
    }
}
