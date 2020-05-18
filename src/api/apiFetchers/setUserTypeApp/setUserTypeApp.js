const setUserTypeApp = (token) => {
    const data = {
      "applicant": {
        "phone": 'Телефон',
        "qualification": 1,
        "experience": 'Опыт',
        "tools": 'Программы',
        "languages": 'Языки'
      }
    }
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        ['Authorization']: `JWT ${token}`,
        'Content-Type': 'application/json'
      })
    };
    
  
    fetch('http://proffmylife.test.appsider.net/api/users/set_user_type_applicant/', requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log(error))
  }
  
  
  export default setUserTypeApp