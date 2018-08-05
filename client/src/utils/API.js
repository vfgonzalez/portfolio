import axios from "axios";


export default {

  // Gets all resources
  getProjects: function() {
    return axios.get("/api/projects")
  },
  sendMessage: function(data){
    return axios.post("/api/send", data)
  },
  // Deletes the resource with the given id
  deleteProject: function(title) {
    return axios.delete("/api/projects/" + title);
  },
  // Saves a resource to the database
  saveProject: function(projectData) {
    // console.log("API: " + resourceData)
    return axios.post("/api/projects", projectData);
  },
  getTechnologies: function() {
    return axios.get("/api/technologies")
  },
  getTechnology: function(technology) {
    return axios.get("/api/technologies/" + technology);
  },
  saveTechnology: function(techData) {
    return axios.post("/api/technologies", techData);
  },
  removeTechnology: function(username) {
    return axios.delete("/api/technologies/" + username);
  },
  getBlogPosts: function() {
    return axios.get("/api/blog" )
  },
  getBlogPost: function(data) {
    return axios.get("/api/blog/" + data)
  },
  saveBlogPost: function(blogData) {
    return axios.post("/api/blog", blogData);
  },
}
