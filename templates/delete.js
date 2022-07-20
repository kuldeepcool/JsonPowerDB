function validateAndGetFormData() {
    var indVar = $("#index").val();
    if (indVar === "") {
    alert("Index is a required Value");
    $("#index").focus();
    return "";
    }
    var jsonStrObj = {
    index: index,
    };
    return JSON.stringify(jsonStrObj);
    }
    function resetForm() {
    $("#index").val("");
    $("#index").focus();
    }
    function deleteRecord() {
    var jsonStr = validateAndGetFormData();
    if (jsonStr === "") {
    return;
    }
    var removeReqStr = createREMOVERecordRequest("90939076|-31949293955470201|90940210", "SAMPLE_DB", "Emp-rel", parseInt(document.getElementById("index").value));
    alert(removeReqStr);
    jQuery.ajaxSetup({ async: false });
    var resultObj = executeCommandAtGivenBaseUrl(removeReqStr,
    "http://api.login2explore.com:5577", "/api/iml");
    alert(JSON.stringify(resultObj));
    jQuery.ajaxSetup({ async: true });
    resetForm();
    }