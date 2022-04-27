
export const unsplashApi = {
	getAuthUser() {
		return fetch(`https://api.unsplash.com/me`, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + localStorage.getItem('token')
			}
		}).then(res => res.json()).then(data => data);
	}
}
