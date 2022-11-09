var selectedRow = null;
function onFormSubmit()
{
    var formData = readFormData();
    if(selectedRow == null)
    {
        insertNameRecord(formData)
    }
    else
    {
        updateForm(formData);
    }
    
    resetForm();
}

function readFormData()
{
    var formData = {};
    formData["firstName"] = document.getElementById("firstName").value;
    formData["lastName"] = document.getElementById("lastName").value;
    formData["Gender"] = document.getElementById("Gender").value;
    formData["Email"] = document.getElementById("Email").value;
    formData["Password"] = document.getElementById("Password").value;
    return formData;
}

function insertNameRecord(data)
{
    var table = document.getElementById("listup").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);

    cell_1 = newRow.insertCell(0);
    cell_1.innerHTML = data.firstName;

    cell_2 = newRow.insertCell(1);
    cell_2.innerHTML = data.lastName;

    cell_3 = newRow.insertCell(2);
    cell_3.innerHTML = data.Gender;

    cell_4 = newRow.insertCell(3);
    cell_4.innerHTML = data.Email;

    cell_5 = newRow.insertCell(4);
    cell_5.innerHTML = data.Password;

    cell_5 = newRow.insertCell(5);
    cell_5.innerHTML = `<a onClick="onEdit(this)">Edit</a> <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm()
{
    document.getElementById("firstName").value="";
    document.getElementById("lastName").value="";
    document.getElementById("Gender").value="";
    document.getElementById("Email").value="";
    document.getElementById("Password").value="";
}

function onEdit(td)
{
    selectedRow = td.parentElement.parentElement;
    document.getElementById("firstName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lastName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Gender").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Email").value = selectedRow.cells[3].innerHTML;
    document.getElementById("Password").value = selectedRow.cells[4].innerHTML;
}

function updateForm(formData)
{
    selectedRow.cells[0].innerHTML = formData.firstName;
    selectedRow.cells[1].innerHTML = formData.lastName;
    selectedRow.cells[2].innerHTML = formData.Gender;
    selectedRow.cells[3].innerHTML = formData.Email;
    selectedRow.cells[4].innerHTML = formData.Password;
}

function onDelete(td)
{
    if(confirm("Are you sure to delete this record?"))
    {
        row = td.parentElement.parentElement;
        document.getElementById("listup").deleteRow(row.rowIndex);
        resetForm();
    }
}