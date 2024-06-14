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

       for(let i = 0; i < bucket.length; i++) {
           if(bucket[i].index === key) {
            bucket[i].value = value;
            return;
           }

           bucket.push({key, value});
           this.#length++;
       }
      }

      get(key) {
        const index = this.hash(key);
        const bucket = this.#bucket[index];

        for(let i = 0; i < bucket.length; i++) {
          if(bucket[i].index === key) {
           return bucket[i].value ;
          }
      }
      return null;
}
}