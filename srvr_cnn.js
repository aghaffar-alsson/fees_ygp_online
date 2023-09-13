<!DOCTYPE html>
<html lang="en">
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<head>
<body>
<script>
var connection = new ActiveXObject("ADODB.Connection") ;

var connectionstring="Data Source=196.219.36.20;Initial Catalog=alssonatt;User ID=alssonatt_login;Password=Alsson@2023;Provider=SQLOLEDB";

connection.Open(connectionstring);
var rs = new ActiveXObject("ADODB.Recordset");

rs.Open("SELECT * FROM userinfo", connection);
rs.MoveFirst
while(!rs.eof)
{
   document.write(rs.fields(1));
   rs.movenext;
}

rs.close;
connection.close;

</script>
</body>
