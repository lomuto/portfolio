package com.portfolio.demo.Record;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
        repository.save(record);
    }
}
