class PopUpBuilder {
    constructor() {
        this.popUpElement = document.createElement('div');
        this.popUpElement.className = 'info';
    }

    
    appendTitle(title) {
        const popUpTitle = document.createElement('h1');
        popUpTitle.className = 'popup-title'
        popUpTitle.innerText = title;
        
        this.popUpElement.appendChild(popUpTitle);

        return this;
    }

    appendComments(comments) {
        const unorderedList = document.createElement('ul');
        unorderedList.className = "comment-list"

        comments.forEach(comment => {
            const list = document.createElement('li');
            list.innerText = comment.content;
            unorderedList.appendChild(list);
        });

        this.popUpElement.appendChild(unorderedList);

        return this;
    }

    setBackgroundColor(color) {
        this.popUpElement.style.background = color;

        return this;
    }

    build() {
        return this.popUpElement;
    }
}