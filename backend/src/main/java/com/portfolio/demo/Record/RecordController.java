package com.portfolio.demo.Record;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/record")
public class RecordController {

    private RecordService recordService;

    @Autowired
    public RecordController(RecordService recordService) {
        this.recordService = recordService;
    }

    @GetMapping("/records")
    @CrossOrigin("*")
    public ResponseEntity<List<Record>> getRecords() {
        return new ResponseEntity<List<Record>>(recordService.getRecords(), HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<Record> addRecord(@RequestBody Record record) {
        // validation
        recordService.addRecord(record);
        return new ResponseEntity<Record>(record, HttpStatus.CREATED);
    }
}
