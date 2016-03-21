package models;

import com.google.gson.annotations.Expose;
import play.db.jpa.GenericModel;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

import com.google.gson.annotations.Expose;

import play.db.jpa.GenericModel;

/**
 * Created by clezio on 18/03/16.
 */
@MappedSuperclass
public class BaseModel extends GenericModel {

    @Expose
    @Id
    @GeneratedValue
    @Column(name = "id")
    public Long id;

    public Long getId() {
        return id;
    }

    @Override
    public Object _key() {
        return getId();
    }
}
