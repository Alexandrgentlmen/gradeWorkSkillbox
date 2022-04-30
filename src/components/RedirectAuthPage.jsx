import Button from '@mui/material/Button';

const ACCESS_KEY = process.env.REACT_APP_ACCESSKEY,
	REDIRECT_URL = "https://gradeskillbox.vercel.app/redirect";
const authUrl = `https://unsplash.com/oauth/authorize?client_id=${ACCESS_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code&scope=public+read_user+write_user+write_likes`;

export const RedirectAuthPage = () => {

	return (
		
		<div className='center container'>
			<Button
				className = 'btn-success'
				variant="contained"
				color="success"
				onClick={() => {
					window.location.href = authUrl;
				}}
			>
				Success
			</Button>
		</div>
	)
}
