class LRUCache {
    constructor(capacity) {
        this.capacity = capacity; // Set the capacity of the cache
        this.cache = new Map(); // Use Map to maintain insertion order
    }

    get(key) {
        if (this.cache.has(key)) {
            const value = this.cache.get(key); // Retrieve the value
            this.cache.delete(key); // Remove the key
            this.cache.set(key, value); // Reinsert it to mark it as most recently used
            return value; // Return the value
        } else {
            return -1; // Key not found
        }
    }

    put(key, value) {
        if (this.cache.has(key)) {
            // If the key exists, update its value
            this.cache.delete(key); // Remove the old key
        } else if (this.cache.size >= this.capacity) {
            // If the cache is full, evict the least recently used (first key)
            const lruKey = this.cache.keys().next().value; // Get the first key (least recently used)
            this.cache.delete(lruKey); // Evict the LRU key
        }
        // Add the new key-value pair
        this.cache.set(key, value); // This also marks the key as most recently used
    }
}

// Example usage with the provided test case