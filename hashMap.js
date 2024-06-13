class HashMap {
    #bucket;
    #length;
    
    constructor(size = 16) {
        this.#bucket = new Array(size);
        this.#length = 0;
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
}