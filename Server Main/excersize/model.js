class User {
    constructor() {
        this.password = "";
        this.name = "";
        this.firstName = "";
        this.lastName = "";
        this.height = 0;
        this.weight = 0;
        this.steps = 0;
        this.strideLength = 0;
        this.goal = null;
    }

    generate(name, firstName, lastName, password) {
        this.name = name;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = sha512.sha512(password);
        this.goal = new Goal();
        return this;
    }
};
module.exports = {
    User, Goal, GoalTypes
}