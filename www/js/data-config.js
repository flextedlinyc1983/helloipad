alert('data-config');
setIpBySelf = "58";

getIpFromDataConfig = function (data) {
    var result = '';
    switch (data) {
        case "230":
            result = 'http://192.168.0.230';
            break;
        case '58':
            result = 'http://192.168.0.58:8080';
            break;
        default:
            result = '';
    }
    return result;

}


setAppNameBySelf = "flaps2";

getAppNameFromDataConfig = function (data) {
    var result = '';
    switch (data) {
        case "flaps2":
            result = '/flaps2';
            break;
        case 'flaps':
            result = '/flaps';
            break;
        default:
            result = '';
    }
    return result;

}





