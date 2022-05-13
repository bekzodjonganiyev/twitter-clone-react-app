import './icons.css';
import TwLogo from '../Images/twitter-logo.png';

const TwitterIcon = () => {
	return <img src={TwLogo} alt='tw-logo' />;
};

const Home = () => {
	return (
		<svg
			width='28'
			height='29'
			viewBox='0 0 28 29'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<g>
				<path
					d='M26.0286 9.57058L14.2417 3.20641C13.9816 3.06641 13.6701 3.06641 13.4099 3.20641L1.62539 9.57058C1.20073 9.80041 1.04206 10.3312 1.2719 10.7571C1.4294 11.0487 1.73156 11.2156 2.0419 11.2156C2.1819 11.2156 2.32539 11.1806 2.45723 11.1106L3.40806 10.5972L5.30856 24.0291C5.55823 25.4466 6.83456 26.4347 8.40956 26.4347H19.2386C20.8159 26.4347 22.0911 25.4454 22.3454 23.9999L24.2424 10.5949L25.1967 11.1106C25.6214 11.3357 26.1534 11.1806 26.3832 10.7559C26.6119 10.3324 26.4532 9.80158 26.0286 9.57058ZM20.6176 23.7257C20.4927 24.4327 19.7974 24.6847 19.2409 24.6847H8.41189C7.85189 24.6847 7.15773 24.4327 7.03756 23.7537L5.05189 9.71057L13.8252 4.97158L22.6009 9.70824L20.6176 23.7257Z'
					fill='black'
				/>
				<path
					d='M9.4152 14.9535C9.4152 17.3849 11.3927 19.3635 13.8252 19.3635C16.2577 19.3635 18.2352 17.3849 18.2352 14.9535C18.2352 12.5222 16.2577 10.5435 13.8252 10.5435C11.3927 10.5435 9.4152 12.5222 9.4152 14.9535ZM16.4852 14.9535C16.4852 16.4212 15.2929 17.6135 13.8252 17.6135C12.3575 17.6135 11.1652 16.4212 11.1652 14.9535C11.1652 13.4859 12.3575 12.2935 13.8252 12.2935C15.2929 12.2935 16.4852 13.4859 16.4852 14.9535Z'
					fill='black'
				/>
			</g>
		</svg>
	);
};

const Explore = () => {
	return (
		<svg
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M22.2083 6.43374H17.6233L18.0573 1.44974C18.0993 0.969073 17.7423 0.545577 17.2616 0.502411C16.7751 0.467411 16.3562 0.817409 16.3142 1.29924L15.8674 6.43257H8.49409L8.92575 1.4509C8.96892 0.969064 8.61075 0.545577 8.13242 0.502411C7.64242 0.467411 7.22592 0.817409 7.18392 1.29924L6.73825 6.43257H2.12058C1.63758 6.43257 1.24558 6.82573 1.24558 7.30757C1.24558 7.7894 1.63758 8.18257 2.12058 8.18257H6.58659L5.94492 15.5641H1.20825C0.725252 15.5641 0.333252 15.9561 0.333252 16.4391C0.333252 16.9221 0.725252 17.3141 1.20825 17.3141H5.79325L5.35925 22.2981C5.31725 22.7787 5.67425 23.2022 6.15492 23.2454L6.23192 23.2489C6.68108 23.2489 7.06259 22.9047 7.10225 22.4486L7.54908 17.3152H14.9224L14.4908 22.2969C14.4488 22.7787 14.8058 23.2022 15.2864 23.2454L15.3634 23.2489C15.8126 23.2489 16.1941 22.9047 16.2337 22.4486L16.6794 17.3152H21.2959C21.7778 17.3152 22.1709 16.9221 22.1709 16.4402C22.1709 15.9584 21.7778 15.5652 21.2959 15.5652H16.8299L17.4716 8.18374H22.2083C22.6913 8.18374 23.0833 7.79174 23.0833 7.30874C23.0833 6.82574 22.6913 6.43374 22.2083 6.43374ZM15.0741 15.5641H7.70075L8.34242 8.18374H15.7157L15.0741 15.5641Z'
				fill='black'
			/>
		</svg>
	);
};

const Notifications = () => {
	return (
		<svg
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M23.314 17.2943C23.2907 17.2757 20.8173 15.381 20.8605 10.2593C20.8838 7.30533 19.9131 4.68032 18.1223 2.86848C16.5181 1.24332 14.3458 0.34498 12.0067 0.333313H11.9915C9.65348 0.34498 7.48115 1.24333 5.87581 2.86966C4.08615 4.68149 3.11315 7.30533 3.13882 10.2593C3.18199 15.311 0.782148 17.2208 0.686481 17.2943C0.383148 17.5195 0.259482 17.9127 0.377315 18.272C0.496315 18.6313 0.832304 18.8728 1.20797 18.8728H6.94799C7.06699 21.5678 9.2778 23.7262 11.9996 23.7262C14.7215 23.7262 16.93 21.5678 17.0478 18.8728H22.7901C23.1658 18.8728 23.5018 18.6325 23.6185 18.2732C23.7386 17.915 23.615 17.5206 23.3117 17.2955L23.314 17.2943ZM12.0008 21.9727C10.245 21.9727 8.81581 20.5995 8.70148 18.8717H15.3001C15.1835 20.5983 13.7566 21.975 12.0008 21.975V21.9727ZM3.11082 17.1217C3.97415 15.801 4.91682 13.589 4.88882 10.243C4.86782 7.72298 5.64015 5.59732 7.12065 4.09815C8.39581 2.80665 10.1306 2.09148 12.0008 2.08331C13.871 2.09265 15.6023 2.80666 16.8775 4.09933C18.3591 5.59849 19.1326 7.72299 19.1116 10.2442C19.0836 13.5902 20.0275 15.8033 20.8908 17.1228H3.11082V17.1217Z'
				fill='black'
			/>
		</svg>
	);
};

const Messages = () => {
	return (
		<svg
			width='24'
			height='22'
			viewBox='0 0 24 22'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M20.4583 0.5H3.54159C1.77175 0.5 0.333252 1.93967 0.333252 3.71067V18.2882C0.333252 20.0592 1.77175 21.5 3.54159 21.5H20.4583C22.2281 21.5 23.6666 20.0592 23.6666 18.2882V3.71067C23.6666 1.93967 22.2281 0.5 20.4583 0.5ZM3.54159 2.25H20.4583C21.2633 2.25 21.9166 2.90333 21.9166 3.70833V4.54132L12.5249 10.8028C12.2064 11.0128 11.7946 11.0152 11.4749 10.8005L2.08325 4.54132V3.70833C2.08325 2.90333 2.73659 2.25 3.54159 2.25ZM20.4583 19.7477H3.54159C2.73659 19.7477 2.08325 19.0943 2.08325 18.2893V6.59233L10.5299 12.2273C10.9768 12.526 11.4889 12.6753 11.9999 12.6753C12.5133 12.6753 13.0231 12.526 13.4699 12.2285L21.9166 6.59349V18.2858C21.9166 19.0908 21.2633 19.7442 20.4583 19.7442V19.7477Z'
				fill='black'
			/>
		</svg>
	);
};

const Bookmarks = () => {
	return (
		<svg
			width='21'
			height='24'
			viewBox='0 0 21 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M19.8083 23.8416C19.6252 23.8416 19.4443 23.7833 19.2927 23.6736L10.5917 17.341L1.89067 23.676C1.62467 23.8673 1.27232 23.8976 0.97832 23.746C0.686653 23.5978 0.5 23.2968 0.5 22.9678V2.95831C0.5 1.51165 1.67833 0.333313 3.125 0.333313H18.056C19.5027 0.333313 20.681 1.51165 20.681 2.95831V22.9666C20.681 23.2956 20.4967 23.5966 20.2027 23.746C20.079 23.8101 19.9425 23.8416 19.806 23.8416H19.8083ZM10.5917 15.3833C10.7725 15.3833 10.9533 15.4393 11.105 15.5513L18.9333 21.2481V2.95831C18.9333 2.47765 18.5402 2.08331 18.0583 2.08331H3.125C2.64317 2.08331 2.25 2.47765 2.25 2.95831V21.2481L10.0783 15.5513C10.23 15.4393 10.4108 15.3833 10.5917 15.3833Z'
				fill='black'
			/>
		</svg>
	);
};

const Lists = () => {
	return (
		<svg
			width='24'
			height='25'
			viewBox='0 0 24 25'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<g>
				<path
					d='M19.75 22.7681H4.25C3.01 22.7681 2 21.7581 2 20.5181V5.01807C2 3.77807 3.01 2.76807 4.25 2.76807H19.75C20.99 2.76807 22 3.77807 22 5.01807V20.5181C22 21.7581 20.99 22.7681 19.75 22.7681ZM4.25 4.26807C3.836 4.26807 3.5 4.60507 3.5 5.01807V20.5181C3.5 20.9311 3.836 21.2681 4.25 21.2681H19.75C20.164 21.2681 20.5 20.9311 20.5 20.5181V5.01807C20.5 4.60507 20.164 4.26807 19.75 4.26807H4.25Z'
					fill='black'
				/>
				<path
					d='M16.75 9.26807H6.75C6.336 9.26807 6 8.93107 6 8.51807C6 8.10507 6.336 7.76807 6.75 7.76807H16.75C17.164 7.76807 17.5 8.10307 17.5 8.51807C17.5 8.93307 17.164 9.26807 16.75 9.26807ZM16.75 13.3781H6.75C6.336 13.3781 6 13.0421 6 12.6281C6 12.2141 6.336 11.8781 6.75 11.8781H16.75C17.164 11.8781 17.5 12.2141 17.5 12.6281C17.5 13.0421 17.164 13.3781 16.75 13.3781ZM11.75 17.4881H6.75C6.336 17.4881 6 17.1531 6 16.7381C6 16.3231 6.336 15.9881 6.75 15.9881H11.75C12.164 15.9881 12.5 16.3251 12.5 16.7381C12.5 17.1511 12.164 17.4881 11.75 17.4881Z'
					fill='black'
				/>
			</g>
		</svg>
	);
};

const Profile = () => {
	return (
		<svg
			width='20'
			height='25'
			viewBox='0 0 20 25'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M10.2428 12.1867C11.8236 12.1867 13.5935 12.0116 14.7228 10.7213C15.6725 9.63631 15.9805 7.95865 15.6631 5.59731C15.2198 2.30148 13.1933 0.333313 10.2428 0.333313C7.29231 0.333313 5.2658 2.30148 4.82247 5.59965C4.50514 7.95865 4.81315 9.63631 5.76281 10.7213C6.89215 12.0128 8.66197 12.1867 10.2428 12.1867ZM6.55614 5.83064C6.74514 4.43064 7.47431 2.08331 10.2428 2.08331C13.0113 2.08331 13.7405 4.43181 13.9295 5.83064C14.171 7.63898 13.996 8.89548 13.4045 9.56981C12.8736 10.1765 11.9275 10.4367 10.2428 10.4367C8.55814 10.4367 7.61198 10.1765 7.08114 9.56981C6.48964 8.89548 6.31464 7.63781 6.55614 5.83064ZM19.9028 20.8433C18.8796 16.7297 14.9071 13.855 10.2428 13.855C5.57848 13.855 1.60598 16.7297 0.58281 20.8433C0.382143 21.6507 0.550139 22.4767 1.04364 23.1067C1.51964 23.7133 2.25697 24.0633 3.06547 24.0633H17.4201C18.2286 24.0633 18.966 23.7133 19.442 23.1067C19.9366 22.4767 20.1035 21.6518 19.9016 20.8433H19.9028ZM18.0641 22.0286C17.9171 22.2153 17.6955 22.3157 17.4201 22.3157H3.06547C2.79131 22.3157 2.56847 22.2165 2.42147 22.0286C2.26164 21.8256 2.21148 21.548 2.28148 21.2656C3.10981 17.9348 6.38464 15.6073 10.2428 15.6073C14.101 15.6073 17.3758 17.9336 18.2041 21.2656C18.2741 21.548 18.224 21.8256 18.0641 22.0286Z'
				fill='black'
			/>
		</svg>
	);
};

const More = () => {
	return (
		<svg
			width='26'
			height='26'
			viewBox='0 0 26 26'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M17.9584 10.6667C16.8326 10.6667 15.9167 11.5849 15.9167 12.7084C15.9167 13.8319 16.8314 14.75 17.9584 14.75C19.0831 14.75 20.0001 13.833 20.0001 12.7084C20.0001 11.5837 19.0831 10.6667 17.9584 10.6667ZM17.9584 13.5834C17.4754 13.5834 17.0834 13.1914 17.0834 12.7084C17.0834 12.2265 17.4766 11.8334 17.9584 11.8334C18.4402 11.8334 18.8334 12.2254 18.8334 12.7084C18.8334 13.1902 18.4414 13.5834 17.9584 13.5834ZM12.7084 10.6667C11.5814 10.6667 10.6667 11.5849 10.6667 12.7084C10.6667 13.8319 11.5826 14.75 12.7084 14.75C13.8342 14.75 14.7501 13.833 14.7501 12.7084C14.7501 11.5837 13.8354 10.6667 12.7084 10.6667ZM12.7084 13.5834C12.2254 13.5834 11.8334 13.1914 11.8334 12.7084C11.8334 12.2265 12.2266 11.8334 12.7084 11.8334C13.1902 11.8334 13.5834 12.2254 13.5834 12.7084C13.5834 13.1902 13.1914 13.5834 12.7084 13.5834ZM7.45842 10.6667C6.33258 10.6667 5.41675 11.5849 5.41675 12.7084C5.41675 13.8319 6.33258 14.75 7.45842 14.75C8.58308 14.75 9.50008 13.833 9.50008 12.7084C9.50008 11.5837 8.58191 10.6667 7.45842 10.6667ZM7.45842 13.5834C6.97542 13.5834 6.58342 13.1914 6.58342 12.7084C6.58342 12.2265 6.97658 11.8334 7.45842 11.8334C7.94025 11.8334 8.33342 12.2254 8.33342 12.7084C8.33342 13.1902 7.94142 13.5834 7.45842 13.5834Z'
				fill='black'
			/>
			<path
				d='M12.7084 25.25C5.79242 25.25 0.166748 19.6244 0.166748 12.7084C0.166748 5.79235 5.79242 0.166687 12.7084 0.166687C19.6244 0.166687 25.2501 5.79235 25.2501 12.7084C25.2501 19.6244 19.6244 25.25 12.7084 25.25ZM12.7084 1.91669C6.75842 1.91669 1.91675 6.75835 1.91675 12.7084C1.91675 18.6584 6.75842 23.5 12.7084 23.5C18.6584 23.5 23.5001 18.6584 23.5001 12.7084C23.5001 6.75835 18.6584 1.91669 12.7084 1.91669Z'
				fill='black'
			/>
		</svg>
	);
};

const TweetImg = () => {
	return (
		<svg
			width='20'
			height='21'
			viewBox='0 0 20 21'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M17.75 0.628052H2.25C1.01 0.628052 0 1.63805 0 2.87805V18.3781C0 19.6181 1.01 20.6281 2.25 20.6281H17.75C18.99 20.6281 20 19.6181 20 18.3781V2.87805C20 1.63805 18.99 0.628052 17.75 0.628052ZM2.25 2.12805H17.75C18.163 2.12805 18.5 2.46505 18.5 2.87805V12.5541L14.642 8.69605C14.502 8.55605 14.312 8.47605 14.112 8.47605H14.109C13.909 8.47605 13.716 8.55605 13.577 8.70005L9.25999 13.0841L7.44701 11.2781C7.30701 11.1381 7.11701 11.0581 6.91701 11.0581C6.72401 11.0281 6.522 11.1381 6.382 11.2851L1.5 16.2701V2.87805C1.5 2.46505 1.837 2.12805 2.25 2.12805ZM1.506 18.4081L6.924 12.8741L13.206 19.1281H2.25C1.848 19.1281 1.523 18.8061 1.506 18.4081ZM17.75 19.1281H15.33L10.323 14.1411L14.115 10.291L18.5 14.6751V18.3781C18.5 18.7911 18.163 19.1281 17.75 19.1281Z'
				fill='#1D9BF0'
			/>
			<path
				d='M6.86816 8.47902C7.72016 8.47902 8.41017 7.78872 8.41017 6.93702C8.41017 6.08542 7.72016 5.39502 6.86816 5.39502C6.01616 5.39502 5.32617 6.08542 5.32617 6.93702C5.32617 7.78872 6.01616 8.47902 6.86816 8.47902Z'
				fill='#1D9BF0'
			/>
		</svg>
	);
};

const TweetGif = () => {
	return (
		<svg
			width='22'
			height='21'
			viewBox='0 0 22 21'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M17.7499 9.10808V7.40808H13.3499V13.8081H15.0499V11.8081H17.0499V10.1081H15.0499V9.10808H17.7499ZM10.4499 7.40808H12.1499V13.8081H10.4499V7.40808ZM6.8499 9.00808C7.2499 9.00808 7.7499 9.20808 8.0499 9.50808L9.2499 8.50808C8.6499 7.80808 7.7499 7.40808 6.8499 7.40808C5.0499 7.40808 3.6499 8.80808 3.6499 10.6081C3.6499 12.4081 5.0499 13.8081 6.8499 13.8081C7.8499 13.8081 8.6499 13.4081 9.2499 12.7081V10.2081H6.4499V11.4081H7.6499V12.0081C7.4499 12.1081 7.1499 12.2081 6.8499 12.2081C5.9499 12.2081 5.2499 11.5081 5.2499 10.6081C5.2499 9.80808 5.9499 9.00808 6.8499 9.00808Z'
				fill='#1D9BF0'
			/>
			<path
				d='M19.25 0.628052H2.25C1.01 0.628052 0 1.63505 0 2.87505V18.382C0 19.6201 1.01 20.628 2.25 20.628H19.25C20.49 20.628 21.5 19.6201 21.5 18.382V2.87505C21.5 1.63505 20.49 0.628052 19.25 0.628052ZM20 18.382C20 18.792 19.664 19.128 19.25 19.128H2.25C1.836 19.128 1.5 18.792 1.5 18.382V2.87505C1.5 2.46305 1.836 2.12805 2.25 2.12805H19.25C19.664 2.12805 20 2.46305 20 2.87505V18.382Z'
				fill='#1D9BF0'
			/>
		</svg>
	);
};

const TweetDiagram = () => {
	return (
		<svg
			width='20'
			height='20'
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M18.222 7.18005H16.888C16.903 7.09005 16.916 6.99805 16.916 6.90305V4.59005C16.916 3.61005 16.119 2.81305 15.138 2.81305H1.5V1.37805C1.5 0.964052 1.164 0.628052 0.75 0.628052C0.336 0.628052 0 0.964052 0 1.37805V18.8501C0 19.2651 0.336 19.6001 0.75 19.6001C1.164 19.6001 1.5 19.2651 1.5 18.8501V17.416H12.056C13.036 17.416 13.834 16.619 13.834 15.639V13.326C13.834 13.231 13.82 13.139 13.806 13.048H18.223C19.203 13.048 20.001 12.25 20.001 11.2701V8.96005C20.001 7.97705 19.204 7.18005 18.223 7.18005H18.222ZM15.14 4.31305C15.292 4.31305 15.417 4.43705 15.417 4.59005V6.90005C15.417 7.05405 15.292 7.18005 15.139 7.18005H1.5V4.31005H15.14V4.31305ZM12.333 13.327V15.639C12.333 15.792 12.208 15.916 12.055 15.916H1.5V13.048H12.056C12.209 13.048 12.333 13.174 12.333 13.328V13.327ZM18.5 11.2701C18.5 11.423 18.375 11.5471 18.222 11.5471H1.5V8.68005H18.222C18.375 8.68005 18.5 8.80405 18.5 8.95705V11.2701Z'
				fill='#1D9BF0'
			/>
		</svg>
	);
};

const TweetSmile = () => {
	return (
		<svg
			width='22'
			height='23'
			viewBox='0 0 22 23'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M10.75 22.1281C4.822 22.1281 0 17.3061 0 11.3781C0 5.45005 4.822 0.628052 10.75 0.628052C16.678 0.628052 21.5 5.45005 21.5 11.3781C21.5 17.3061 16.678 22.1281 10.75 22.1281ZM10.75 2.12805C5.65 2.12805 1.5 6.27805 1.5 11.3781C1.5 16.4781 5.65 20.6281 10.75 20.6281C15.85 20.6281 20 16.4781 20 11.3781C20 6.27805 15.85 2.12805 10.75 2.12805Z'
				fill='#1D9BF0'
			/>
			<path
				d='M10.7502 16.4931C8.85824 16.4931 7.11725 15.5431 6.09425 13.9491C5.87025 13.6011 5.97125 13.1391 6.32025 12.9141C6.66825 12.6881 7.13225 12.7901 7.35625 13.1401C8.10325 14.3021 9.37224 14.9951 10.7512 14.9951C12.1302 14.9951 13.3992 14.3021 14.1472 13.1411C14.3712 12.7911 14.8352 12.6911 15.1832 12.9161C15.5332 13.1401 15.6332 13.6041 15.4092 13.9521C14.3842 15.5461 12.6432 16.4971 10.7512 16.4971L10.7502 16.4931Z'
				fill='#1D9BF0'
			/>
			<path
				d='M13.4878 10.314C14.3041 10.314 14.9658 9.65233 14.9658 8.83603C14.9658 8.01973 14.3041 7.35803 13.4878 7.35803C12.6715 7.35803 12.0098 8.01973 12.0098 8.83603C12.0098 9.65233 12.6715 10.314 13.4878 10.314Z'
				fill='#1D9BF0'
			/>
			<path
				d='M8.01218 10.314C8.82848 10.314 9.49018 9.65233 9.49018 8.83603C9.49018 8.01973 8.82848 7.35803 8.01218 7.35803C7.1959 7.35803 6.53418 8.01973 6.53418 8.83603C6.53418 9.65233 7.1959 10.314 8.01218 10.314Z'
				fill='#1D9BF0'
			/>
		</svg>
	);
};

const TweetSchudle = () => {
	return (
		<svg
			width='24'
			height='25'
			viewBox='0 0 24 25'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<mask
				id='mask0_11_1710'
				style='mask-type:alpha'
				maskUnits='userSpaceOnUse'
				x='0'
				y='0'
				width='24'
				height='25'>
				<rect y='0.628052' width='24' height='24' fill='#C4C4C4' />
			</mask>
			<g mask='url(#mask0_11_1710)'></g>
			<g clip-path='url(#clip0_11_1710)'>
				<path
					d='M-37.9 18.628C-38 18.528 -38 18.528 -38 18.428C-37.9 18.428 -37.9 18.528 -37.9 18.628ZM18 2.82803H16.7V2.52803C16.7 2.12803 16.4 1.72803 15.9 1.72803C15.5 1.72803 15.1 2.02803 15.1 2.52803V2.82803H7.7V2.52803C7.7 2.12803 7.4 1.72803 6.9 1.72803C6.5 1.72803 6.1 2.02803 6.1 2.52803V2.82803H4.8C3.4 2.82803 2.3 3.92803 2.3 5.32803V18.428C2.3 19.828 3.4 20.928 4.8 20.928H7.7C8.1 20.928 8.5 20.628 8.5 20.128C8.5 19.728 8.2 19.328 7.7 19.328H4.8C4.2 19.328 3.8 18.828 3.8 18.328V8.52803C3.8 8.22803 4.2 7.82803 4.8 7.82803H18C18.6 7.82803 19 8.22803 19 8.52803V10.328C19 10.728 19.3 11.128 19.8 11.128C20.2 11.128 20.6 10.828 20.6 10.328V5.32803C20.5 3.92803 19.4 2.82803 18 2.82803ZM19 6.52803C18.7 6.42803 18.3 6.32803 18 6.32803H4.8C4.4 6.32803 4.1 6.42803 3.8 6.52803V5.32803C3.8 4.72803 4.3 4.32803 4.8 4.32803H6.1V4.82803C6.1 5.22803 6.4 5.62803 6.9 5.62803C7.3 5.62803 7.7 5.32803 7.7 4.82803V4.32803H15.2V4.82803C15.2 5.22803 15.5 5.62803 16 5.62803C16.4 5.62803 16.8 5.32803 16.8 4.82803V4.32803H18C18.6 4.32803 19 4.82803 19 5.32803V6.52803Z'
					fill='#1D9BF0'
				/>
				<path
					d='M15.5 11.028C12.1 11.028 9.30005 13.828 9.30005 17.228C9.30005 20.628 12.1 23.428 15.5 23.428C18.9 23.428 21.7 20.628 21.7 17.228C21.7 13.828 18.9 11.028 15.5 11.028ZM15.5 22.028C12.9 22.028 10.8 19.928 10.8 17.328C10.8 14.728 12.9 12.628 15.5 12.628C18.1 12.628 20.2 14.728 20.2 17.328C20.2 19.828 18.1 22.028 15.5 22.028Z'
					fill='#1D9BF0'
				/>
				<path
					d='M18.9 19.328C18.8 19.528 18.5 19.728 18.3 19.728C18.2 19.728 18 19.728 17.9 19.628L14.8 17.628V14.628C14.8 14.228 15.1 13.828 15.6 13.828C16 13.828 16.4 14.128 16.4 14.628V16.828L18.8 18.328C19 18.528 19.1 18.928 18.9 19.328Z'
					fill='#1D9BF0'
				/>
			</g>
			<defs>
				<clipPath id='clip0_11_1710'>
					<rect
						width='24'
						height='24'
						fill='white'
						transform='translate(0 0.628052)'
					/>
				</clipPath>
			</defs>
		</svg>
	);
};

const Comment = () => {
	return (
		<svg
			width='20'
			height='20'
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M11.95 0.00999999L7.802 0H7.8C3.426 0 0 3.427 0 7.80201C0 11.9 3.186 15.008 7.465 15.172V19C7.465 19.108 7.509 19.286 7.585 19.403C7.727 19.628 7.96899 19.75 8.21699 19.75C8.35499 19.75 8.49399 19.712 8.61899 19.632C8.88299 19.464 15.092 15.492 16.707 14.126C18.609 12.516 19.747 10.156 19.75 7.81401V7.79701C19.744 3.43 16.32 0.00999982 11.95 0.00899982V0.00999999ZM15.737 12.982C14.603 13.942 10.875 16.387 8.96499 17.625V14.438C8.96499 14.024 8.62999 13.688 8.21499 13.688H7.819C4.159 13.688 1.501 11.212 1.501 7.80201C1.501 4.268 4.269 1.5 7.801 1.5L11.948 1.51H11.95C15.482 1.51 18.25 4.276 18.252 7.80601C18.249 9.71601 17.31 11.65 15.738 12.982H15.737Z'
				fill='#536471'
			/>
		</svg>
	);
};

const Retweet = () => {
	return (
		<svg
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<g>
				<path
					d='M23.7585 15.7705C23.4665 15.4775 22.9915 15.4775 22.6985 15.7705L20.4785 17.9905V7.7505C20.4785 5.6825 18.7955 4.0005 16.7285 4.0005H10.8785C10.4645 4.0005 10.1285 4.3365 10.1285 4.7505C10.1285 5.1645 10.4645 5.5005 10.8785 5.5005H16.7285C17.9685 5.5005 18.9785 6.5105 18.9785 7.7505V17.9905L16.7585 15.7705C16.4655 15.4775 15.9905 15.4775 15.6985 15.7705C15.4065 16.0635 15.4045 16.5385 15.6985 16.8305L19.1985 20.3305C19.3435 20.4775 19.5355 20.5505 19.7285 20.5505C19.9215 20.5505 20.1115 20.4785 20.2585 20.3305L23.7585 16.8305C24.0525 16.5385 24.0525 16.0635 23.7585 15.7705ZM13.0985 19.0505H7.2485C6.0085 19.0505 4.9985 18.0405 4.9985 16.8005V6.5605L7.2185 8.7805C7.3665 8.9275 7.5585 9.00049 7.7505 9.00049C7.9425 9.00049 8.1345 8.9275 8.2805 8.7805C8.5735 8.4875 8.5735 8.01249 8.2805 7.7205L4.7805 4.2205C4.4875 3.9265 4.0125 3.9265 3.7205 4.2205L0.2205 7.7205C-0.0735 8.01249 -0.0735 8.4875 0.2205 8.7805C0.5145 9.0735 0.987501 9.0735 1.2805 8.7805L3.5005 6.5605V16.8005C3.5005 18.8685 5.1835 20.5505 7.2505 20.5505H13.1005C13.5145 20.5505 13.8505 20.2145 13.8505 19.8005C13.8505 19.3865 13.5135 19.0505 13.1005 19.0505H13.0985Z'
					fill='#536471'
				/>
			</g>
		</svg>
	);
};

const Like = () => {
	return (
		<svg
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<g>
				<path
					d='M12.05 21.914H12.036C9.453 21.866 2 15.132 2 8.754C2 5.69 4.525 3 7.403 3C9.693 3 11.233 4.58 12.049 5.73C12.863 4.582 14.403 3 16.694 3C19.574 3 22.098 5.69 22.098 8.755C22.098 15.131 14.644 21.865 12.061 21.912H12.05V21.914ZM7.404 4.501C5.324 4.501 3.501 6.489 3.501 8.756C3.501 14.496 10.535 20.352 12.051 20.414C13.569 20.352 20.601 14.497 20.601 8.756C20.601 6.489 18.778 4.501 16.698 4.501C14.17 4.501 12.758 7.437 12.746 7.466C12.516 8.028 11.59 8.028 11.359 7.466C11.345 7.436 9.93401 4.501 7.40501 4.501H7.404Z'
					fill='#536471'
				/>
			</g>
		</svg>
	);
};

const Share = () => {
	return (
		<svg
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<g>
				<path
					d='M17.53 7.21975L12.53 2.21975C12.237 1.92675 11.762 1.92675 11.47 2.21975L6.47001 7.21975C6.17601 7.51275 6.17601 7.98775 6.47001 8.27975C6.76401 8.57175 7.23701 8.57375 7.53001 8.27975L11.25 4.55975V14.7498C11.25 15.1638 11.586 15.4998 12 15.4998C12.414 15.4998 12.75 15.1638 12.75 14.7498V4.55975L16.47 8.27975C16.616 8.42675 16.808 8.49975 17 8.49975C17.192 8.49975 17.384 8.42775 17.53 8.27975C17.823 7.98675 17.823 7.51275 17.53 7.21975Z'
					fill='#536471'
				/>
				<path
					d='M19.708 21.6938H4.29201C3.02801 21.6938 2 20.6658 2 19.4018V13.7498C2 13.3358 2.336 12.9998 2.75 12.9998C3.164 12.9998 3.5 13.3358 3.5 13.7498V19.4018C3.5 19.8388 3.85501 20.1938 4.29201 20.1938H19.708C20.145 20.1938 20.5 19.8388 20.5 19.4018V13.7498C20.5 13.3358 20.836 12.9998 21.25 12.9998C21.664 12.9998 22 13.3358 22 13.7498V19.4018C22 20.6658 20.972 21.6938 19.708 21.6938Z'
					fill='#536471'
				/>
			</g>
		</svg>
	);
};

const Statistics = () => {
	return (
		<svg
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<g>
				<path d='M6 11H8V22H6V11Z' fill='#536471' />
				<path d='M11 2H13V22H11V2Z' fill='#536471' />
				<path d='M16 8H18V22H16V8Z' fill='#536471' />
			</g>
		</svg>
	);
};

const Search = () => {
	return (
		<svg
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<mask
				id='mask0_11_1470'
				style='mask-type:alpha'
				maskUnits='userSpaceOnUse'
				x='0'
				y='0'
				width='24'
				height='24'>
				<rect width='24' height='24' fill='#C4C4C4' />
			</mask>
			<g mask='url(#mask0_11_1470)'>
				<path
					d='M21.53 20.47L17.87 16.81C19.195 15.24 20 13.214 20 11C20 6.03 15.97 2 11 2C6.03 2 2 6.03 2 11C2 15.97 6.03 20 11 20C13.215 20 15.24 19.196 16.808 17.87L20.468 21.53C20.615 21.676 20.808 21.75 20.998 21.75C21.188 21.75 21.383 21.677 21.528 21.53C21.823 21.237 21.823 20.763 21.53 20.47ZM3.5 11C3.5 6.865 6.865 3.5 11 3.5C15.135 3.5 18.5 6.865 18.5 11C18.5 15.135 15.135 18.5 11 18.5C6.865 18.5 3.5 15.135 3.5 11Z'
					fill='#5C6C79'
				/>
			</g>
		</svg>
	);
};

const Settings = () => {
	return (
		<svg
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<mask
				id='mask0_11_1488'
				style='mask-type:alpha'
				maskUnits='userSpaceOnUse'
				x='0'
				y='0'
				width='25'
				height='24'>
				<rect x='0.00012207' width='24' height='24' fill='#C4C4C4' />
			</mask>
			<g mask='url(#mask0_11_1488)'>
				<path
					d='M11.7901 8.23193C9.70012 8.23193 8.00012 9.93193 8.00012 12.0219C8.00012 14.1119 9.70012 15.8119 11.7901 15.8119C13.8801 15.8119 15.5801 14.1119 15.5801 12.0219C15.5801 9.93193 13.8801 8.23193 11.7901 8.23193ZM11.7901 14.3119C10.5281 14.3119 9.50012 13.2859 9.50012 12.0219C9.50012 10.7579 10.5301 9.73193 11.7901 9.73193C13.0501 9.73193 14.0801 10.7579 14.0801 12.0219C14.0801 13.2859 13.0521 14.3119 11.7901 14.3119Z'
					fill='black'
				/>
				<path
					d='M11.7371 22.75H11.0151C9.83212 22.75 8.86113 21.862 8.75313 20.686L8.73912 20.539C8.71412 20.252 8.53212 20.006 8.26712 19.895C7.98112 19.775 7.68512 19.83 7.46912 20.01L7.35312 20.107C6.48512 20.832 5.10012 20.77 4.29312 19.967L3.78313 19.457C2.94713 18.617 2.88713 17.303 3.64313 16.397L3.74112 16.279C3.92712 16.057 3.97111 15.756 3.86311 15.492C3.75311 15.22 3.50512 15.038 3.21712 15.012L3.06712 14.998C1.88712 14.891 1.00012 13.918 1.00012 12.736V12.014C1.00012 10.831 1.88812 9.86 3.06412 9.752L3.22012 9.738C3.50512 9.713 3.75012 9.531 3.86212 9.265C3.97212 8.995 3.92713 8.692 3.74213 8.47L3.64812 8.354C2.89112 7.446 2.95013 6.131 3.78513 5.294L4.29712 4.782C5.10112 3.978 6.48512 3.917 7.35712 4.642L7.47311 4.74C7.69111 4.924 8.00112 4.97 8.26312 4.862C8.53312 4.75 8.71513 4.504 8.74013 4.219L8.75412 4.066C8.86112 2.886 9.83413 2 11.0161 2H11.7381C12.9211 2 13.8921 2.888 14.0001 4.064L14.0141 4.22C14.0391 4.505 14.2201 4.75 14.4861 4.86C14.7631 4.977 15.0661 4.922 15.2801 4.743L15.4001 4.641C16.2671 3.918 17.6541 3.979 18.4601 4.781L18.9701 5.293C19.8061 6.131 19.8661 7.446 19.1101 8.353L19.0101 8.471C18.8221 8.691 18.7761 8.993 18.8871 9.259C18.9991 9.529 19.2471 9.709 19.5331 9.737L19.6851 9.751C20.8651 9.858 21.7521 10.831 21.7521 12.013V12.736C21.7521 13.919 20.8641 14.89 19.6881 14.998L19.5331 15.012C19.2491 15.036 19.0031 15.217 18.8931 15.482C18.7801 15.754 18.8261 16.056 19.0101 16.277L19.1101 16.397C19.8661 17.302 19.8061 18.617 18.9701 19.457L18.4601 19.967C17.6531 20.771 16.2701 20.831 15.4001 20.107L15.2851 20.011C15.0681 19.828 14.7551 19.781 14.4951 19.889C14.2221 20.003 14.0401 20.249 14.0151 20.535L14.0011 20.685C13.8941 21.858 12.9211 22.745 11.7391 22.745L11.7371 22.75ZM7.96413 18.33C8.26413 18.33 8.55712 18.39 8.83412 18.505C9.62412 18.833 10.1581 19.559 10.2341 20.401L10.2481 20.548C10.2851 20.948 10.6151 21.248 11.0181 21.248H11.7401C12.1401 21.248 12.4701 20.948 12.5081 20.548L12.5221 20.4C12.5981 19.558 13.1321 18.833 13.9141 18.508C14.7071 18.178 15.6101 18.326 16.2471 18.858L16.3601 18.952C16.5381 19.1 16.7261 19.132 16.8531 19.132C17.0591 19.132 17.2531 19.052 17.3991 18.905L17.9091 18.395C18.1931 18.111 18.2141 17.665 17.9571 17.357L17.8571 17.237C17.3151 16.587 17.1801 15.697 17.5051 14.914C17.8311 14.124 18.5571 13.594 19.3991 13.517L19.5541 13.503C19.9511 13.466 20.2541 13.136 20.2541 12.733V12.011C20.2541 11.611 19.9511 11.281 19.5521 11.243L19.4001 11.229C18.5541 11.151 17.8301 10.619 17.5051 9.836C17.1791 9.048 17.3151 8.158 17.8581 7.509L17.9581 7.391C18.2151 7.081 18.1941 6.635 17.9101 6.351L17.4001 5.841C17.2541 5.694 17.0601 5.614 16.8541 5.614C16.7271 5.614 16.5391 5.646 16.3621 5.794L16.2421 5.894C15.6081 6.422 14.6921 6.564 13.9201 6.248C13.1321 5.921 12.6001 5.196 12.5231 4.352L12.5091 4.197C12.4741 3.8 12.1441 3.497 11.7421 3.497H11.0191C10.6191 3.497 10.2891 3.8 10.2511 4.199L10.2371 4.351C10.1611 5.194 9.62912 5.919 8.84712 6.244C8.06012 6.57 7.15412 6.427 6.51712 5.894L6.39912 5.798C6.21912 5.648 6.03111 5.618 5.90411 5.618C5.69811 5.618 5.50412 5.698 5.35812 5.844L4.84612 6.354C4.56412 6.638 4.54313 7.084 4.80013 7.392L4.90012 7.51C5.44012 8.163 5.57712 9.054 5.25212 9.835C4.92512 10.623 4.20012 11.155 3.35712 11.232L3.20113 11.246C2.80413 11.283 2.50111 11.613 2.50111 12.016V12.738C2.50111 13.138 2.80413 13.468 3.20312 13.506L3.35312 13.52C4.20112 13.598 4.92612 14.132 5.25012 14.916C5.57512 15.702 5.44013 16.591 4.89713 17.241L4.80112 17.356C4.54112 17.666 4.56312 18.112 4.84712 18.396L5.35712 18.906C5.50312 19.053 5.69712 19.133 5.90312 19.133C6.03012 19.133 6.21813 19.103 6.39513 18.953L6.51112 18.857C6.91712 18.521 7.43413 18.333 7.96413 18.333V18.33Z'
					fill='black'
				/>
			</g>
		</svg>
	);
};

const ThreeDot = () => {
	return (
		<svg
			width='17'
			height='4'
			viewBox='0 0 17 4'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M3.9232 2C3.9232 3.10457 3.04499 4 1.96166 4C0.878333 4 0.00012207 3.10457 0.00012207 2C0.00012207 0.895431 0.878333 0 1.96166 0C3.04499 0 3.9232 0.895431 3.9232 2Z'
				fill='black'
			/>
			<path
				d='M10.4617 2C10.4617 3.10457 9.58345 4 8.50012 4C7.41679 4 6.53858 3.10457 6.53858 2C6.53858 0.895431 7.41679 0 8.50012 0C9.58345 0 10.4617 0.895431 10.4617 2Z'
				fill='black'
			/>
			<path
				d='M17.0001 2C17.0001 3.10457 16.1219 4 15.0386 4C13.9553 4 13.077 3.10457 13.077 2C13.077 0.895431 13.9553 0 15.0386 0C16.1219 0 17.0001 0.895431 17.0001 2Z'
				fill='black'
			/>
		</svg>
	);
};

const Arrow = () => {
	return (
		<svg
			width='21'
			height='16'
			viewBox='0 0 21 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M0.292892 7.2929C-0.0976315 7.68342 -0.0976314 8.31658 0.292893 8.70711L6.65686 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928933C7.68054 0.538409 7.04738 0.538409 6.65685 0.928933L0.292892 7.2929ZM21 7L1 7L1 9L21 9L21 7Z'
				fill='black'
			/>
		</svg>
	);
};

const Location = () => {
	return (
		<svg
			width='18'
			height='20'
			viewBox='0 0 18 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M9 12.315C6.912 12.315 5.213 10.617 5.213 8.52899C5.213 6.44099 6.913 4.73999 9 4.73999C11.087 4.73999 12.787 6.43999 12.787 8.52699C12.787 10.614 11.087 12.312 9 12.312V12.315ZM9 6.24199C7.74 6.24199 6.713 7.26799 6.713 8.52899C6.713 9.78999 7.74 10.814 9 10.814C10.26 10.814 11.287 9.78899 11.287 8.52799C11.287 7.26699 10.26 6.23999 9 6.23999V6.24199Z'
				fill='black'
			/>
			<path
				d='M17.692 8.69C17.692 3.9 13.792 0 9 0C4.208 0 0.307999 3.9 0.307999 8.69C0.307999 10.592 0.910999 12.398 2.051 13.913L2.054 13.911L2.061 13.926C3.689 15.996 8.339 19.683 8.536 19.838C8.674 19.948 8.838 20.001 9.001 20.001C9.164 20.001 9.328 19.948 9.466 19.839C9.663 19.684 14.313 15.999 15.941 13.927L15.948 13.913L15.95 13.915C17.09 12.399 17.692 10.595 17.692 8.692V8.69ZM9 18.29C7.776 17.3 4.48 14.575 3.244 13.005C2.304 11.755 1.808 10.263 1.808 8.693C1.808 4.727 5.035 1.5 9 1.5C12.965 1.5 16.192 4.726 16.192 8.69C16.192 10.26 15.695 11.752 14.756 13.003C13.52 14.573 10.224 17.297 9 18.288V18.29Z'
				fill='black'
			/>
		</svg>
	);
};

const Link = () => {
	return (
		<svg
			width='20'
			height='21'
			viewBox='0 0 20 21'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M9.96 12.945C9.893 12.945 9.824 12.935 9.757 12.918C8.627 12.6 7.66 11.932 6.962 10.986C6.13 9.86099 5.786 8.47799 5.994 7.09299C6.202 5.70799 6.936 4.48799 8.062 3.65499L11.592 1.04699C13.914 -0.669012 17.202 -0.177012 18.922 2.14699C19.752 3.27399 20.097 4.65699 19.889 6.04199C19.681 7.42699 18.946 8.64699 17.819 9.47999L16.339 10.574C16.006 10.82 15.535 10.749 15.289 10.416C15.043 10.082 15.113 9.61199 15.447 9.36599L16.927 8.27099C17.73 7.67899 18.254 6.80799 18.403 5.82099C18.551 4.83299 18.305 3.84599 17.713 3.04299C16.488 1.38699 14.141 1.03299 12.483 2.25899L8.953 4.86699C8.151 5.45999 7.627 6.33099 7.478 7.31699C7.328 8.30699 7.575 9.29199 8.168 10.095C8.666 10.77 9.355 11.245 10.16 11.472C10.56 11.586 10.793 12 10.68 12.4C10.588 12.73 10.286 12.947 9.958 12.947L9.96 12.945Z'
				fill='black'
			/>
			<path
				d='M5.27 20.054C3.66 20.054 2.073 19.319 1.045 17.929C0.213002 16.802 -0.130998 15.419 0.0770019 14.035C0.285002 12.651 1.02 11.43 2.147 10.597L3.625 9.50298C3.959 9.25798 4.43 9.32798 4.675 9.66098C4.92 9.99398 4.852 10.465 4.518 10.711L3.038 11.806C2.235 12.399 1.712 13.27 1.563 14.256C1.415 15.246 1.66 16.231 2.253 17.034C3.478 18.691 5.823 19.044 7.483 17.819L11.011 15.211C12.669 13.986 13.021 11.641 11.796 9.98097C11.298 9.30697 10.609 8.83097 9.804 8.60497C9.404 8.49197 9.171 8.07798 9.284 7.67798C9.396 7.27798 9.812 7.04798 10.21 7.15598C11.34 7.47398 12.306 8.14198 13.004 9.08798C14.721 11.412 14.228 14.7 11.904 16.418L8.374 19.026C7.441 19.719 6.351 20.052 5.269 20.052L5.27 20.054Z'
				fill='black'
			/>
		</svg>
	);
};

const Born = () => {
	return (
		<svg
			width='18'
			height='21'
			viewBox='0 0 18 21'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M4.75 10.083C4.336 10.083 4 9.747 4 9.333C4 6.393 6.243 4 9 4C9.414 4 9.75 4.336 9.75 4.75C9.75 5.164 9.414 5.5 9 5.5C7.07 5.5 5.5 7.22 5.5 9.333C5.5 9.747 5.164 10.083 4.75 10.083Z'
				fill='black'
			/>
			<path
				d='M17.75 9.333C17.75 4.323 13.825 0.25 9 0.25C4.175 0.25 0.25 4.324 0.25 9.333C0.25 13.938 3.57 17.745 7.855 18.33L6.155 20.16C6.018 20.305 5.982 20.517 6.062 20.7C6.142 20.882 6.322 21 6.522 21H11.479C11.677 21 11.857 20.882 11.936 20.7C12.016 20.517 11.98 20.305 11.844 20.16L10.144 18.33C14.429 17.745 17.749 13.938 17.749 9.333H17.75ZM9 16.917C5.002 16.917 1.75 13.515 1.75 9.333C1.75 5.151 5.002 1.75 9 1.75C12.998 1.75 16.25 5.15 16.25 9.333C16.25 13.516 12.998 16.917 9 16.917Z'
				fill='black'
			/>
		</svg>
	);
};

const JoinedDate = () => {
	return (
		<svg
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M19.708 2H4.292C3.028 2 2 3.028 2 4.292V19.708C2 20.972 3.028 22 4.292 22H19.708C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2ZM20.5 19.708C20.5 20.145 20.145 20.5 19.708 20.5H4.292C3.855 20.5 3.5 20.145 3.5 19.708V6.418C3.5 5.981 3.854 5.628 4.29 5.626H19.71C20.146 5.626 20.5 5.981 20.5 6.416V19.71V19.708Z'
				fill='black'
			/>
			<path
				d='M7.03201 10.035C7.7417 10.035 8.31701 9.45968 8.31701 8.75C8.31701 8.04031 7.7417 7.465 7.03201 7.465C6.32232 7.465 5.74701 8.04031 5.74701 8.75C5.74701 9.45968 6.32232 10.035 7.03201 10.035Z'
				fill='black'
			/>
			<path
				d='M7.03201 14.441C7.7417 14.441 8.31701 13.8657 8.31701 13.156C8.31701 12.4463 7.7417 11.871 7.03201 11.871C6.32232 11.871 5.74701 12.4463 5.74701 13.156C5.74701 13.8657 6.32232 14.441 7.03201 14.441Z'
				fill='black'
			/>
			<path
				d='M16.968 10.035C17.6777 10.035 18.253 9.45968 18.253 8.75C18.253 8.04031 17.6777 7.465 16.968 7.465C16.2583 7.465 15.683 8.04031 15.683 8.75C15.683 9.45968 16.2583 10.035 16.968 10.035Z'
				fill='black'
			/>
			<path
				d='M16.968 14.441C17.6777 14.441 18.253 13.8657 18.253 13.156C18.253 12.4463 17.6777 11.871 16.968 11.871C16.2583 11.871 15.683 12.4463 15.683 13.156C15.683 13.8657 16.2583 14.441 16.968 14.441Z'
				fill='black'
			/>
			<path
				d='M12 10.035C12.7097 10.035 13.285 9.45968 13.285 8.75C13.285 8.04031 12.7097 7.465 12 7.465C11.2903 7.465 10.715 8.04031 10.715 8.75C10.715 9.45968 11.2903 10.035 12 10.035Z'
				fill='black'
			/>
			<path
				d='M12 14.441C12.7097 14.441 13.285 13.8657 13.285 13.156C13.285 12.4463 12.7097 11.871 12 11.871C11.2903 11.871 10.715 12.4463 10.715 13.156C10.715 13.8657 11.2903 14.441 12 14.441Z'
				fill='black'
			/>
			<path
				d='M7.03201 18.771C7.7417 18.771 8.31701 18.1957 8.31701 17.486C8.31701 16.7763 7.7417 16.201 7.03201 16.201C6.32232 16.201 5.74701 16.7763 5.74701 17.486C5.74701 18.1957 6.32232 18.771 7.03201 18.771Z'
				fill='black'
			/>
			<path
				d='M12 18.771C12.7097 18.771 13.285 18.1957 13.285 17.486C13.285 16.7763 12.7097 16.201 12 16.201C11.2903 16.201 10.715 16.7763 10.715 17.486C10.715 18.1957 11.2903 18.771 12 18.771Z'
				fill='black'
			/>
		</svg>
	);
};

const PinnedTweet = () => {
	return (
		<svg
			width='20'
			height='21'
			viewBox='0 0 20 21'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M16.8625 12.675C16.55 11.2208 14.9108 9.75335 13.5208 9.23751L13.0675 5.11418L14.3133 3.24585C14.4441 3.04918 14.4566 2.79751 14.3441 2.59001C14.2325 2.38168 14.0175 2.25418 13.7816 2.25418H6.16497C5.92831 2.25418 5.71331 2.38251 5.60164 2.59001C5.48997 2.79835 5.50164 3.05085 5.63331 3.24668L6.88164 5.11918L6.47831 9.23835C5.08831 9.75501 3.45081 11.2217 3.14164 12.6683C3.10831 12.8017 3.12831 13.005 3.25164 13.1633C3.33747 13.2733 3.50497 13.405 3.81831 13.405H7.19997L9.61997 18.9983C9.68497 19.1517 9.83664 19.25 10.0016 19.25C10.1666 19.25 10.3183 19.1517 10.385 18.9983L12.8041 13.4042H16.185C16.4983 13.4042 16.665 13.2742 16.7516 13.1658C16.8733 13.0092 16.895 12.8042 16.8641 12.6742L16.8625 12.675Z'
				fill='#536471'
			/>
		</svg>
	);
};

export {
	TwitterIcon,
	Home,
	Explore,
	Notifications,
	Messages,
	Bookmarks,
	Lists,
	Profile,
	More,
	TweetImg,
	TweetGif,
	TweetDiagram,
	TweetSchudle,
	TweetSmile,
	Comment,
	Retweet,
	Like,
	Share,
	Statistics,
	Search,
	Settings,
	ThreeDot,
	Arrow,
	Location,
	Link,
	Born,
	JoinedDate,
	PinnedTweet,
};
