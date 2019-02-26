const patterns = {
  mobile : /^\d{10}$/,
  username : /^[a-z\d]{5,12}$/i,
  password : /^[\w@_\-]{8,20}$/,
  email : /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i
};

function validate(field , pattern)
{
  if(pattern.test(field.value)) {
      field.className = "valid";
  }
  else {
    field.className = "invalid";
  }
}

var inputs = document.getElementById("user-test").elements;
for(input of inputs)
{
  input.addEventListener('keyup', e => {
    validate(e.target , patterns[e.target.name])
  });
}
