import axios from 'axios';
const GITHUB_BASE_URL = 'https://api.github.com/';


export function getUserByName(username) {
    let url = `${GITHUB_BASE_URL}users/${username}`;
    return axios.get(url).then((res) => res.data);
};

export function getReposFromUser(username) {
    let url = `${GITHUB_BASE_URL}users/${username}/repos`;
    return axios.get(url).then((res) => res.data);
};