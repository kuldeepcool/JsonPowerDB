    function validateAndGetFormData() {
    var empIdVar = $("#empId").val();
    if (empIdVar === "") {
    alert("Employee ID Required Value");
    $("#empId").focus();
    return "";
    }
    var empNameVar = $("#empName").val();
    if (empNameVar === "") {
    alert("Employee Name is Required Value");
    $("#empName").focus();
    return "";
    }
    var empEmailVar = $("#empEmail").val();
    if (empEmailVar === "") {
    alert("Employee Email is Required Value");
    $("#empEmail").focus();
    return "";
    }
    var jsonStrObj = {
    empId: empIdVar,
    empName: empNameVar,
    empEmail: empEmailVar,
    };
    return JSON.stringify(jsonStrObj);
    }
    
    function resetForm() {
    $("#empId").val("")
    $("#empName").val("");
    $("#empEmail").val("");
    $("#empId").focus();
    }
    function saveEmployee() {
    var jsonStr = validateAndGetFormData();
    if (jsonStr === "") {
    return;
    }
    var putReqStr = createPUTRequest("90939076|-31949293955470201|90940210",
    jsonStr, "SAMPLE_DB", "Emp-rel");
    alert(putReqStr);
    jQuery.ajaxSetup({ async: false });
    var resultObj = executeCommandAtGivenBaseUrl(putReqStr,
    "http://api.login2explore.com:5577", "/api/iml");
    alert(JSON.stringify(resultObj));
    jQuery.ajaxSetup({ async: true });
    resetForm();
    }