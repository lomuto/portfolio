package com.portfolio.demo.Comment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {

    private CommentRepository commentRepository;

    @Autowired
    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    public List<Comment> findByRecordId(Integer recordId) {
        return commentRepository.findByRecordId(recordId);
    }

    public void addComment(Comment comment) {
        commentRepository.save(comment);
    }
}
