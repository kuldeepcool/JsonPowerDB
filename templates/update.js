function validateAndGetFormData() {
    var empIdVar = $("#empId").val();
    if (empIdVar === "") {
    alert("Employee ID is a required Value");
    $("#empId").focus();
    return "";
    }
    var empNameVar = $("#empName").val();
    var empEmailVar = $("#empEmail").val();
    if (empNameVar === "" && empEmailVar === "") {
    alert("Enter atleast either a new email ID or a new name to perform an update!");
    $("#empId").focus();
    return "";
    }
    var jsonStrObj = {
    empId: empIdVar,
    empName: empNameVar,
    empEmail: empEmailVar,
    };
    return JSON.stringify(jsonStrObj);
}

function updateRecord() {
        var jsonStr = validateAndGetFormData();
        if (jsonStr === "") {
        return;
        }
        var removeReqStr = createUPDATERecordRequest("90939076|-31949282520496781|90940641", jsonStr, "SAMPLE_DB", "Emp-rel", parseInt(document.getElementById("empId").value));
        alert(removeReqStr);
        jQuery.ajaxSetup({ async: false });
        var resultObj = executeCommandAtGivenBaseUrl(removeReqStr,
        "http://api.login2explore.com:5577", "/api/iml");
        alert(JSON.stringify(resultObj));
        jQuery.ajaxSetup({ async: true });
        resetForm();
}