function loginValidation()
{
    var emailId=document.getElementById("input1").value;
    var password=document.getElementById("input2").value;
    
    document.getElementById("fail").innerHTML="";
    document.getElementById("emailP").innerHTML=""; 
    document.getElementById("passP").innerHTML="";

   
    if(emailId!="" && password!="")
    {

      if(emailId=="user@gmail.com" && password=="123456")
      {
        
        return true;
      }
      else
      {
        document.getElementById("fail").innerHTML="Authentication failed";
        return false;
      }
    }
    else
    {
             if(emailId=="")
             {
             document.getElementById("emailP").innerHTML="Enter Email Id"; 
            }
            if(password=="")
            {
            document.getElementById("passP").innerHTML="Password cannot be empty";
            }



        return false;
    }  

}


function registrationForm()
{
   
    document.getElementById("p5").innerHTML="";
    document.getElementById("p7").innerHTML="";
    document.getElementById("p6").innerHTML="";
    var firstName=document.getElementById("fn").value;
    var middleName=document.getElementById("mn").value;
    var lastName=document.getElementById("ln").value;
    var mailId=document.getElementById("em").value;
    var mobile=document.getElementById("mobile").value;
    var pass=document.getElementById("pass").value;
    var confP=document.getElementById("cp").value;
    
      var d=isNaN(mobile);
          



        if(mobile.length!=10 || d==true)
        {
            document.getElementById("p5").innerHTML="Enter a valid Mobile Number";
        }
        if(pass.length<6)
        {
            document.getElementById("p6").innerHTML="password is too short";
        }

        if(pass!=confP)
        {

            document.getElementById("p7").innerHTML="Passwords donot match";
        }


        if(d==false && mobile.length==10 && pass==confP && pass.length>=6)
        {
            
            return true;
        }    
        else
        {
            
            return false;
        }

}

var selectedRow=null;

function formSubmit()
{

     var formData=readFormData();
     if(selectedRow==null)
     {insertNewRowInTable(formData);}
     else
     {
      update(formData);
     }
     clearForm();
}

function readFormData()
{
    var data={};
    data["studentId"]=document.getElementById("stuId").value;
    data["studentName"]=document.getElementById("stuName").value;
    data["studentEmail"]=document.getElementById("stuEmail").value;
    data["studentClass"]=document.getElementById("stuClass").value;
    data["studentYear"]=document.getElementById("stuYear").value;
    data["studentCity"]=document.getElementById("stuCity").value;
    data["studentCountry"]=document.getElementById("stuCountry").value;
    return data;
}

function insertNewRowInTable(memory)
{
    var table=document.getElementById("studentsList").getElementsByTagName('tbody')[0];
    var newRow=table.insertRow(table.length);
    col1=newRow.insertCell(0);
    col1.innerHTML=memory.studentId;

    col2=newRow.insertCell(1);
    col2.innerHTML=memory.studentName;

    col3=newRow.insertCell(2);
    col3.innerHTML=memory.studentEmail;

    col4=newRow.insertCell(3);
    col4.innerHTML=memory.studentClass;

    col5=newRow.insertCell(4);
    col5.innerHTML=memory.studentYear;

    col6=newRow.insertCell(5);
    col6.innerHTML=memory.studentCity;

    col7=newRow.insertCell(6);
    col7.innerHTML=memory.studentCountry;

    
    col8=newRow.insertCell(7);
    col8.innerHTML= "<input type='button' value='Edit'   onClick='edit(this)' >";

    col9=newRow.insertCell(8);
    col9.innerHTML="<input type='button' value='Delete'   onClick='deleteRecord(this)' >";
    
}

function clearForm()
{
    document.getElementById("stuId").value="";
    document.getElementById("stuName").value="";
    document.getElementById("stuEmail").value="";
    document.getElementById("stuClass").value="";
    document.getElementById("stuYear").value="";
    document.getElementById("stuCity").value="";
    document.getElementById("stuCountry").value="";
    selectedRow=null;
}

function edit(rowData)
{
    selectedRow=rowData.parentElement.parentElement;
    
   
   document.getElementById("stuId").value=selectedRow.cells[0].innerHTML;
   document.getElementById("stuName").value=selectedRow.cells[1].innerHTML;
   document.getElementById("stuEmail").value=selectedRow.cells[2].innerHTML;
   document.getElementById("stuClass").value=selectedRow.cells[3].innerHTML;
   document.getElementById("stuYear").value=selectedRow.cells[4].innerHTML;
   document.getElementById("stuCity").value=selectedRow.cells[5].innerHTML;
   document.getElementById("stuCountry").value=selectedRow.cells[6].innerHTML;

}

function deleteRecord(td)
{
    var x=confirm("sure to  delete");
    if(x)
    {
  row=td.parentElement.parentElement;
  document.getElementById("studentsList").deleteRow(row.rowIndex);
  clearForm();
    }
}
function update(updateRow)
{

    selectedRow.cells[0].innerHTML=updateRow.studentId;
    selectedRow.cells[1].innerHTML=updateRow.studentName;
    selectedRow.cells[2].innerHTML=updateRow.studentEmail;
    selectedRow.cells[3].innerHTML=updateRow.studentClass;
    selectedRow.cells[4].innerHTML=updateRow.studentYear;
    selectedRow.cells[5].innerHTML=updateRow.studentCity;
    selectedRow.cells[6].innerHTML=updateRow.studentCountry;
}