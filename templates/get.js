function validateAndGetFormData() {
    var empNameVar = $("#empName").val();
    if (empNameVar === "") {
        alert("Employee Name is a required value!");
        $("#empName").focus();
        return "";
    }
    var jsonStrObj = {
        empName: empNameVar,
    };
    return JSON.stringify(jsonStrObj);
}

function resetForm() {
    $("#empName").val("");
    $("#empName").focus();
}

function getEmployee() {
    var jsonStr = validateAndGetFormData();
    if (jsonStr === "") {
        return;
    }
    var getReqStr = createGETRequest("90939076|-31949282520496781|90940641",
        "SAMPLE_DB", "Emp-rel", jsonStr);
    alert(getReqStr);
    jQuery.ajaxSetup({ async: false });
    var resultObj = executeCommandAtGivenBaseUrl(getReqStr,
        "http://api.login2explore.com:5577", "/api/irl");
    alert(JSON.stringify(resultObj));
    jQuery.ajaxSetup({ async: true });
    resetForm();
} 