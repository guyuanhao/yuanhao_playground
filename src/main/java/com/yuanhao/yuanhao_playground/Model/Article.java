package com.yuanhao.yuanhao_playground.Model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "Article")
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(name = "Title")
    @NotBlank
    @Size(min = 3, max = 100)
    private String title;

    @Lob
    @Column(name = "Content")
    private String content;


    private Integer like1=0;
    private Integer unLike=0;

    public Article(@NotBlank @Size(min = 3, max = 100) String title) {
        this.title = title;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Integer getLike1() {
        return like1;
    }

    public void setLike1(Integer like1) {
        this.like1 = like1;
    }

    public Integer getUnLike() {
        return unLike;
    }

    public void setUnLike(Integer unLike) {
        this.unLike = unLike;
    }
}
