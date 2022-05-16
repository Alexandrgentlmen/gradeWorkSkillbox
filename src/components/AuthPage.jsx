import Button from '@mui/material/Button';

const ACCESS_KEY = process.env.REACT_APP_ACCESSKEY,
// REDIRECT_URL = "urn:ietf:wg:oauth:2.0:oob";
	REDIRECT_URL = "https://gradeskillbox.vercel.app/redirect";
const authUrl = `https://unsplash.com/oauth/authorize?client_id=${ACCESS_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code&scope=public+read_user+write_user+write_likes`;

export const AuthPage = () => {

	return (
		
		<div className='wrap'>
			<div className='outer'>
				<div className = 'btn-success'>
					<Button	
						variant="contained"
						color="success"
						onClick={() => {
							window.location.href = authUrl;
						}}
					>
						Success
					</Button>
				</div>
				<p className='outer__title'>
					Для доступа к функциям сайт необходимо зарегистрироваться в систему Unsplash
				</p>
			</div>
			
		</div>
	)
}