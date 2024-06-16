class HashMap {
  #bucket;
  #length;
  #bucketSize;

  constructor(bucketSize = 16) {
    this.#bucket = Array.from({ length: bucketSize }, () => []);
    this.#length = 0;
    this.#bucketSize = bucketSize;
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode %= this.#bucket.length;
    }
    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.#bucket[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        bucket[i].value = value;
        return;
      }
    }

    bucket.push({ key, value });
    this.#length++;
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.#bucket[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        return bucket[i].value;
      }
    }
    return null;
  }

  has(key) {
    const index = this.hash(key);
    const bucket = this.#bucket[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        return true;
      }
    }
    return false;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.#bucket[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        bucket.splice(i, 1);
        this.#length--;
        return true;
      }
    }
    return false;
  }

  length() {
    return this.#length;
  }

  clear() {
    this.#bucket = Array.from({ length: this.#bucketSize }, () => []);
    this.#length = 0;
  }

  keys() {
    let keys = [];
    for (let i = 0; i < this.#bucketSize; i++) {
      this.#bucket[i].forEach((keyValue) => {
        keys.push(keyValue.key);
      });
    }
    return keys;
  }

  values() {
    let values = [];
    for (let i = 0; i < this.#bucketSize; i++) {
      this.#bucket[i].forEach((keyValue) => {
        values.push(keyValue.value);
      });
    }
    return keys;
  }

  entries() {
    let entries = [];
    for (let i = 0; i < this.#bucketSize; i++) {
      this.#bucket[i].forEach((keyValue) => {
        entries.push([keyValue.key, keyValue.value]);
      });
    }
    return entries;
  }
}


