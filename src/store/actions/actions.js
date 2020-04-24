export const handleUsername = (e) => {
	return {
		type: 'HANDLE_USERNAME',
		e: e,
	};
};

export const submitForm = (e, username) => {
	e.persist();
	return async (dispatch) => {
		try {
			const resp = await fetch(
				`https://api.github.com/search/users?q=${username}+in:user&per_page=5`
			);
			const data = await resp.json();
			dispatch({
				type: 'SUBMIT_FORM',
				e,
				data,
			});
		} catch (er) {
			console.log(er);
		}
	};
};

export const chooseUsername = (e, username) => {
	e.persist();
	const CLIENT_ID = `dc99d82dc3e628e4d141`;
	const CLIENT_SECRET = `60103e93e2f4bdab5a8a0fbe383922c7ad8358f8`;
	return async (dispatch) => {
		try {
			const resp = await fetch(
				`https://api.github.com/users/${username}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
			);
			const data = await resp.json();
			dispatch({
				type: 'CHOOSE_USERNAME',
				e,
				data,
			});
		} catch (er) {
			console.log(er);
		}
	};
};
