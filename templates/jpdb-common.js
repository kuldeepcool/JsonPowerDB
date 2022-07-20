// This function is used to create the PUT Json request for a single record.
// TODO required to add the colsAutoIndex and templateStr params
function createPUTRequest(connToken, jsonObj, dbName, relName) {
    var putRequest = "{\n"
            + "\"token\" : \""
            + connToken
            + "\","
            + "\"dbName\": \""
            + dbName
            + "\",\n" + "\"cmd\" : \"PUT\",\n"
            + "\"rel\" : \""
            + relName + "\","
            + "\"jsonStr\": \n"
            + jsonObj
            + "\n"
            + "}";
    return putRequest;
}

// This function is responsible to execute JPDB command on the given dbBaseUrl
// and return response to the caller.
function executeCommandAtGivenBaseUrl(reqString, dbBaseUrl, apiEndPointUrl) {
    var url = dbBaseUrl + apiEndPointUrl;
    var jsonObj;
    $.post(url, reqString, function (result) {
        jsonObj = JSON.parse(result);
    }).fail(function (result) {
        var dataJsonObj = result.responseText;
        jsonObj = JSON.parse(dataJsonObj);
    });
    return jsonObj;
}

//This function creates the request to remove the data of given record number 
function createREMOVERecordRequest(token, dbName, relName, recNo, jsonObj) {
    var req = "{\n"
            + "\"token\" : \""
            + token
            + "\","
            + "\"dbName\": \""
            + dbName
            + "\",\n" + "\"cmd\" : \"REMOVE\",\n"
            + "\"rel\" : \""
            + relName
            + "\",\n" + "\"record\":"
            + recNo
            + "\",\n"
            + "\"jsonStr\": "
            + jsonObj
            + "\n"
            + "}";
    return req;
}

//This function creates the request to get a single record matching json data
function createGETRequest(token, dbname, relationName, jsonObjStr) {
    var value1 = "{\n"
            + "\"token\" : \""
            + token
            + "\",\n" + "\"cmd\" : \"GET\",\n"
            + "\"dbName\": \""
            + dbname
            + "\",\n"
            + "\"rel\" : \""
            + relationName
            + "\",\n"
            + "\"jsonStr\":\n"
            + jsonObjStr
            + "\n"
            + "}";
    return value1;
}

//This function creates the request to update data to given jsonStr (only if recNo 
//already exists in the relation)
function createUPDATERecordRequest(token, jsonObj, dbName, relName, recNo) {
    var req = "{\n"
            + "\"token\" : \""
            + token
            + "\","
            + "\"dbName\": \""
            + dbName
            + "\",\n" + "\"cmd\" : \"UPDATE\",\n"
            + "\"rel\" : \""
            + relName
            + "\",\n"
            + "\"jsonStr\":{ \""
            + recNo
            + "\":\n"
            + jsonObj
            + "\n"
            + "}}";
    return req;
}