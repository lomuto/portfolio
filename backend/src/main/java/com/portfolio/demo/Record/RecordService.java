package com.portfolio.demo.Record;

import com.portfolio.demo.Comment.Comment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RecordService {

    private RecordRepository repository;

    @Autowired
    public RecordService(RecordRepository repository) {
        this.repository = repository;
    }

    public List<Record> getRecords() {
        return repository.findAll();
    }

    public void addRecord(Record record) {
        if (record.getStartDate() == null || record.getEndDate() == null || record.getTitle() == null || record.getSkillEarned() == null) {
            throw new IllegalStateException("Invalid record");
        }

        repository.save(record);
    }

    public Record getRecord(Integer recordId) {
        return repository.getById(recordId);
    }
}
