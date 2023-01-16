function check_btn_value() {
  let fn = document.getElementById("fname").value;
  let ln = document.getElementById("lname").value;
  let mno = document.getElementById("mno").value;
  let mail = document.getElementById("mail").value;
  if (fn == "" && ln == "" && mno == "" && mail == "") {
    document.getElementById("msg").innerHTML = "Enter First name";
    document.getElementById("msg1").innerHTML = "Enter Last name";
    document.getElementById("mno_m").innerHTML = "Enter Mobile No";
    document.getElementById("mail_msg").innerHTML = "Enter Email";

    return false;
  }
}
