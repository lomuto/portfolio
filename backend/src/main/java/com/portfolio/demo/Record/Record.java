package com.portfolio.demo.Record;

import com.portfolio.demo.Comment.Comment;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "record")
public class Record {

    @Id
    @SequenceGenerator(
            name = "record_sequence_generator",
            sequenceName = "record_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "record_sequence_generator"
    )
    @Column(nullable = false)
    private Integer id;

    @Column(nullable = false)
    private String title;

    @Column(name = "start_date", nullable = false)
    private LocalDate startDate;

    @Column(name = "end_date", nullable = false)
    private LocalDate endDate;

    @Column(nullable = false)
    private Integer skillEarned;

    @OneToMany(mappedBy = "record",
            cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    private List<Comment> comments = new ArrayList<>();

    public Record() {
    }

    public Record(String title, LocalDate startDate, LocalDate endDate, Integer skillEarned) {
        this.title = title;
        this.startDate = startDate;
        this.endDate = endDate;
        this.skillEarned = skillEarned;
    }

    public Integer getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public Integer getSkillEarned() {
        return skillEarned;
    }

    public void setSkillEarned(Integer skillEarned) {
        this.skillEarned = skillEarned;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

    public void addComment(Comment comment) {
//        this.comments.add(comment);
        comment.setRecord(this);
    }

    @Override
    public String toString() {
        return "Record{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", startDate=" + startDate +
                ", endDate=" + endDate +
                ", skillEarned=" + skillEarned +
                '}';
    }
}
