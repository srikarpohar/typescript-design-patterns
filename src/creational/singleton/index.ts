let connections = 0;
let instances = 0;

/*
  Singleton - this pattern allows creation of a single object for all instances of the class.
  This is useful when you want to share the same object among all instances of this class.
  
  For example, a shared resource like database connection in the backend which is utilised by
  multiple API calls from different clients.
*/
class DatabaseConnection {
    // Store the single instance in a private static field so that this
    // instance is accessible from the inside of the class.
    static #instance: DatabaseConnection;

    private instanceNo: number = 0;

    // Constructor should always be private to prevent construction of object using new operator.
    private constructor() {
        // can have database initialisation logic for the single instance created.
        this.instanceNo = ++instances;
    }

    getInstanceNo() {
        return this.instanceNo;
    }

    public static getInstance(): DatabaseConnection {
        // if instance is null, create a new instance with initialisation logic
        // inside the constructor. If not, return the same instance.
        if(!DatabaseConnection.#instance) {
            // acquire thread lock if using the instance in a multithreading context
            // and then create a new instance.
            console.log("Creating connection instance for 1st time");
            DatabaseConnection.#instance = new DatabaseConnection();
        } else {
            console.log("Reusing same instance.");
        }

        ++connections;
        return DatabaseConnection.#instance;
    }

    // This singleton instance can define some business logic
    // which can be executed on its instance.
    public query(statement: string) {
        // use statement to query on the database instance.
        console.log(`Query ${statement} done using Instance ID: ${this.instanceNo}\n`);
    }
}

export const runSingletonMethod = () => {
    const conn1 = DatabaseConnection.getInstance();
    conn1.query("select * from users");

    const conn2 = DatabaseConnection.getInstance();
    conn2.query("select * from employees");

    console.log(`Total connections created - ${connections}: Instances - ${conn1.getInstanceNo()}, ${conn2.getInstanceNo()}`);
}