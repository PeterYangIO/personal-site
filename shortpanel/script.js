function popup(link) {
    var host = location.protocol + "//" + location.hostname + "/";
    prompt("Copy the selected link", host + link);
}

function edit(short){
    document.getElementById("editField").value = short;
    document.getElementById("editForm").submit();
}

function deleteItem(short) {
    $.post(window.location.href, {"method" : "delete", "short" : short});
}

function cancel() {
    // I don't know why location.reload() doesn't work
    window.location = window.location.href;
}