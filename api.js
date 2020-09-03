
let apiStore = {
  name: '',
  url: '',
  cost: 0,
  subject: '',
};

function getResources() {
  const url = `https://hatchlink-list-api.herokuapp.com/zenzi/resources`;
   
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => responseJson)
    .catch(err => {
      $("#js-error-message").text(`Something went wrong: ${err.message}`);
    });
}

function apiStoreResources() {
  let apiUrl = `https://hatchlink-list-api.herokuapp.com/zenzi/resources`;

  let data = { 
    "name": apiStore.name, 
    "url": apiStore.url, 
    'cost': apiStore.cost, 
    'subject': apiStore.subject
  };

  return fetch(apiUrl, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data),
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  })
  .then(responseJson => {
    $("#js-error-message").hide();
    $('#create-resrouce-error').hide();
    return responseJson;
  })
  .catch((err) => {
    $("#js-error-message").text(`Something went wrong: ${err}`);
    $('#create-resource-error').hide();
    $("#js-error-message").show();
});
}


function deleteResources(resourceId) {
  const url = `https://hatchlink-list-api.herokuapp.com/zenzi/resources/${resourceId}`;
   
  return fetch(url,{
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify([])
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  })
  .then(responseJson => responseJson)
  .catch((err ) => {
    $("#js-error-message").text(`Something went wrong: ${err.message}`);
  });
}

export {getResources, apiStoreResources, deleteResources, apiStore};