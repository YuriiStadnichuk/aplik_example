const setUserTypeApp = (token) => {
    const data = {
        "employer": {
          "company_name": 'Название компании',
          "phone": 'Телефон',
          "website": 'Сайт',
          "year_founded": 2020,
          "area": 'Сфера деятельности'
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
    
  
    fetch('http://proffmylife.test.appsider.net/api/users/set_user_type_employer/', requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log(error))
  }
  
  
  export default setUserTypeApp