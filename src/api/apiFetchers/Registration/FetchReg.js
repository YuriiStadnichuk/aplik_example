const FetchReg = (email, password) => {
  const data = new FormData()

  data.append('email', email)
  data.append('password', password)

  const requestOptions = {
    method: 'POST',
    body: data,
  };

  fetch('http://proffmylife.test.appsider.net/api/users/', requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log(error))

}

export default FetchReg