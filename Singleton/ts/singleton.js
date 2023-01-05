var SingletonTS = /** @class */ (function () {
    function SingletonTS() {
    }
    SingletonTS.getInstance = function () {
        if (!SingletonTS.instance) {
            SingletonTS.instance = new SingletonTS();
        }
        return SingletonTS.instance;
    };
    return SingletonTS;
}());
var instance1 = SingletonTS.getInstance();
var instance2 = SingletonTS.getInstance();
console.log(instance1 === instance2); // true
