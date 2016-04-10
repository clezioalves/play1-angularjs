package models;

import com.google.gson.annotations.Expose;
import play.data.validation.Required;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;

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
    @ManyToOne(fetch= FetchType.EAGER)
    private Occupation occupation;

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

    public Occupation getOccupation() {
        return occupation;
    }

    public void setOccupation(Occupation occupation) {
        this.occupation = occupation;
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
