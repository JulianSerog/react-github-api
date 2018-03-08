import axios from 'axios';
const GITHUB_BASE_URL = 'https://api.github.com/';

export default function getUserByName(username) {
    let url = `${GITHUB_BASE_URL}users/${username}`;
    return axios.get(url).then((data) => data);
};