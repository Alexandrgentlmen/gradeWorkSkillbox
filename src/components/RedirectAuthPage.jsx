import Button from '@mui/material/Button';

const ACCESS_KEY = process.env.REACT_APP_ACCESSKEY,
	REDIRECT_URL = "https://gradeskillbox.vercel.app/redirect";
const authUrl = `https://unsplash.com/oauth/authorize?client_id=${ACCESS_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code&scope=public+read_user+write_user+write_likes`;

export const RedirectAuthPage = () => {

	return (
		<div class="hystmodal" id="myModal">
			<div class="hystmodal__window">
				<Button
					variant="contained"
					color="success"
					onClick={() => {
						window.location.href = authUrl;
					}}
				>
					Success
				</Button>
				<button data-hystclose class="hystmodal__close">Close</button>  
					Текст модального окошка.
				<img src="img/photo.jpg" alt="Изображение в окне" />
			</div>
		</div>	
	)
}
