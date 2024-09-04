class SubscribeClass {
  constructor() {
    this.id = 0;
    this.listener = [];
  }
  add(callback) {
    if (!Array.isArray(this.listener)) {
      this.listener = [];
    }
    if (typeof callback !== "function") {
      throw "callback needs to be a funtion.";
    }
    const obj = {
      id: this.id++,
      callback,
    };
    this.listener.push(obj);
    return obj;
  }
  del(id) {
    if (!Array.isArray(this.listener)) {
      throw "listener has no values";
    }
    const index = this.listener.findIndex((item) => item.id === id);
    const removeObj = this.listener.splice(index, 1);
    return removeObj;
  }
  notice(arg) {
    this.listener.map(
      (listener) =>
        typeof listener.callback === "function" && listener.callback(arg)
    );
  }
}

const Subscribe = new SubscribeClass();

export default Subscribe;
