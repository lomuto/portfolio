class Record {
    constructor(data, comments) {
        this.id = data.id,
        this.title = data.title,
        this.skillEarned = data.skillEarned,
        this.startDate = data.startDate,
        this.endDate =  data.endDate,
        this.comments = comments
    }
}