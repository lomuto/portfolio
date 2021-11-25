class RecordBuilder {
    constructor() {
        this.recordElement = document.createElement('div');
        this.recordElement.className = 'info';
    }

    
    setContent(content) {
        // Change with innerHTML with list later
        const recordTitle = document.createElement('h1');
        recordTitle.className = 'record-title'
        recordTitle.innerText = 'Hello';

        const contents = document.createElement('div');
        contents.innerText = content;
        this.recordElement.appendChild(recordTitle);
        this.recordElement.appendChild(contents);
        
        return this;
    }

    setBackgroundColor(color) {
        this.recordElement.style.background = color;

        return this;
    }

    build() {
        return this.recordElement;
    }
}