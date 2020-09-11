import TokenService from "../services/token-service";

import config from "../config";

let resourceStore = {
  name: "",
  url: "",
  cost: 0,
  format: "",
  subject: "",
};
let reviewStore = {
  comment: "",
  overall_rating: 0,
  communication_rating: 0,
  has_materials: "",
  has_quizzes: "",
  has_exercises: "",
};

const ResourceApiService = {
  getResources() {
    return fetch(`${config.API_ENDPOINT}/resources`, {
      headers: {},
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getResource(resourceId) {
    return fetch(`${config.API_ENDPOINT}/resources/${resourceId}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getReviewsForResources(resourceId) {
    return fetch(`${config.API_ENDPOINT}/resources/${resourceId}/reviews`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  postResource(resourceId) {
    let data = {
      name: resourceStore.name,
      url: resourceStore.url,
      cost: resourceStore.cost,
      subject: resourceStore.subject,
      format: resourceStore.format,
    };
    console.log(data, "this is data");
    return fetch(`${config.API_ENDPOINT}/resources`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        resource_id: resourceId,
        data,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  deleteResource(resourceId) {
    return fetch(`${config.API_ENDPOINT}/resources/${resourceId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        resource_id: resourceId,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  // updateReview(resourceId){
  //   return fetch(`https://localhost:8000/api/articles/${this.props.match.params.articleId}`, {
  //     method: 'PATCH',
  //     body: JSON.stringify(this.state.inputValues)
  //   })
  //     .then(/* some content omitted */)
  //    .then(responseData => {
  //      this.context.updateArticle(responseData)
  //    })
  //     .catch(error => {/* some content omitted */})
  // }
  // render() {
  //   const { title, style, content } = this.state
  //   return (
  //     <section className='EditArticleForm'>
  //       <h2>Edit article</h2>
  //       <form onSubmit={this.handleSubmit}></form>
  // )},
  postReview(resourceId) {
    let info = {
      comment: reviewStore.comment,
      overall_rating: reviewStore.overall_rating,
      communication_rating: reviewStore.communication_rating,
      has_materials: reviewStore.has_materials,
      has_quizzes: reviewStore.has_quizzes,
      has_exercises: reviewStore.has_exercises,
    };
    return fetch(`${config.API_ENDPOINT}/reviews`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        resource_id: resourceId,
        info,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default ResourceApiService;
