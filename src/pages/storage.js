
// class storage for chosen brand and for episode

class Storage {
    getItems(key) {
        return JSON.parse(localStorage.getItem(key));
    };
    setItems(key, items) {
        localStorage.setItem(key, JSON.stringify(items));
    };

}

const storage = new Storage();

export { storage };

