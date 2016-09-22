// alert('data-config');
// setIpBySelf = "58";
setIpBySelf = "76";

getIpFromDataConfig = function (data) {
    var result = '';
    switch (data) {
        case "230":
            result = 'http://192.168.0.230';
            break;
        case '58':
            result = 'http://192.168.0.58:8080';
            break;
        case '72':
            result = 'http://203.67.131.72';
            break;
        case '76':
            result = 'http://203.67.131.76:18080';
            break;            
        default:
            result = '';
    }
    return result;

}


// setAppNameBySelf = "flaps2";
setAppNameBySelf = "flapsTW";

getAppNameFromDataConfig = function (data) {
    var result = '';
    switch (data) {
        case "flaps2":
            result = '/flaps2';
            break;
        case 'flaps':
            result = '/flaps';
            break;
        case 'flapsTW':
            result = '/flapsTW';
            break;
        default:
            result = '';
    }
    return result;

}





