function edit(short){
    document.getElementById("editField").value = short;
    document.getElementById("editForm").submit();
}

function deleteItem(short) {
    $.post(window.href.location, {"delete" : short});
}

function cancel() {
    $(".edit-container").className = "edit-box hidden";
}