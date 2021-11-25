package com.portfolio.demo.Comment;

import com.portfolio.demo.Record.Record;
import com.portfolio.demo.Record.RecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/comment")
public class CommentController {

    @Autowired
    private RecordService recordService;

    private CommentService commentService;

    @Autowired
    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @GetMapping("")
    public ResponseEntity<List<Comment>> getCommentsByRecordId(@RequestParam(name = "recordId") Integer recordId) {
        return new ResponseEntity<List<Comment>>(
                commentService.findByRecordId(recordId),
                HttpStatus.OK
        );
    }

    @PostMapping("")
    public ResponseEntity<String> addCommentsToRecord(
            @RequestParam(name = "recordId") Integer recordId,
            @RequestBody List<Comment> comments
    ) {
        Record record = recordService.getRecord(recordId);

        for (Comment comment : comments) {
            record.addComment(comment);
            commentService.addComment(comment);
        }

        return new ResponseEntity<String>(String.format("Comments has successfully added to record %d", recordId), HttpStatus.CREATED);
    }
}
