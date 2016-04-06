package models;

import com.google.gson.annotations.Expose;
import play.data.validation.Required;

import javax.persistence.Entity;

/**
 * Created by clezio on 18/03/16.
 */
@Entity(name = "users")
public class User extends BaseModel {

    @Expose
    @Required()
    private String name;

    @Expose
    @Required()
    private Long created;

    @Expose
    private Long modified;

    public User() {}

    public User(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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
