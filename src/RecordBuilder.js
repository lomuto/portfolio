class RecordBuilder {
    constructor() {
        this.recordElement = document.createElement('div');
        this.recordElement.className = 'info';
    }

    
    setContent(content) {
        // Change with innerHTML with list later
        this.recordElement.innerText = content;
        
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