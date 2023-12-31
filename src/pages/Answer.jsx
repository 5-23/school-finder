import { useNavigate } from 'react-router-dom';
import Header from "../components/Header";
import styles from "../css/Answer.module.css";

const Answer = () => {
	
	const navigate = useNavigate();
	return (
		<div>
			<Header />

			<div className={styles.mainWrapper}>
				<b onClick={() => { navigate(-1) }}> <img src="../back.svg" /> 뒤로가기 </b>
				<div className={styles.main}>
					<div>
						<div className={styles.circle}></div>
					</div>
					<div>
						<h1>어나니머스</h1>
						<h2>질문 내용</h2>
					</div>
				</div>
			</div>
			<div className={styles.anscnt}>
				<hr />
				<h2>답변 (51개)</h2>
				
			</div>
			<div className={styles.cardWrapper}>
				<div className={styles.card}>
					<div className={styles.titleWrapper}>
						<div className={styles.iconWrapper}></div>
						<p>susname</p>
					</div>
					<div className={styles.popcnt}>
						<svg width="16" height="22" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M18.3867 12.7042C16.5219 7.9287 9.88228 7.6712 11.4858 0.730417C11.6046 0.215418 11.0463 -0.182536 10.5949 0.0866682C6.28333 2.59144 3.18323 7.61268 5.78446 14.1906C5.99826 14.729 5.35686 15.2323 4.89363 14.8812C2.74376 13.2777 2.51808 10.9719 2.70813 9.32154C2.77939 8.71291 1.9717 8.42029 1.62725 8.92359C0.819564 10.1409 0 12.1072 0 15.0685C0.451354 21.623 6.06953 23.6362 8.08874 23.8937C10.975 24.2565 14.0989 23.7298 16.3438 21.7049C18.8143 19.446 19.717 15.841 18.3867 12.7042ZM7.3642 18.5915C9.07459 18.1819 9.95355 16.9646 10.1911 15.8878C10.5831 14.214 9.05084 12.5754 10.0842 9.93018C10.4762 12.1189 13.9682 13.4884 13.9682 15.8761C14.0632 18.8373 10.8087 21.3772 7.3642 18.5915Z" fill="#DCDCDC"/>
						</svg>
						1928
					</div>
					<textarea cols="30" rows="4" placeholder='input here'></textarea>

				</div>
				<AnswerBox type="pin" cnt="100" des="cool"/>
				<AnswerBox type="pop" cnt="1000" des="i use arch btw"/>
				<AnswerBox cnt="0" des=":("/>
				<AnswerBox cnt="0" des=":("/>
				<AnswerBox cnt="0" des=":("/>
				<AnswerBox cnt="0" des=":("/>
				
			</div>
		</div>
	);
};

export default Answer;


/**
 * 
 * @param {{
 *  type: null|"pin"|"pop",
 * 	des: String,
 * 	cnt: Number
 * }} props
 */
function AnswerBox(props) {
	switch(props.type) {
		case "pin": return (<div className={`${styles.card} ${styles.pin}`}>
			<div className={styles.titleWrapper}>
				<div className={styles.iconWrapper}></div>
				<p>susname</p>
			</div>
			<div className={styles.popcnt}>
				<svg width="16" height="22" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M18.3867 12.7042C16.5219 7.9287 9.88228 7.6712 11.4858 0.730417C11.6046 0.215418 11.0463 -0.182536 10.5949 0.0866682C6.28333 2.59144 3.18323 7.61268 5.78446 14.1906C5.99826 14.729 5.35686 15.2323 4.89363 14.8812C2.74376 13.2777 2.51808 10.9719 2.70813 9.32154C2.77939 8.71291 1.9717 8.42029 1.62725 8.92359C0.819564 10.1409 0 12.1072 0 15.0685C0.451354 21.623 6.06953 23.6362 8.08874 23.8937C10.975 24.2565 14.0989 23.7298 16.3438 21.7049C18.8143 19.446 19.717 15.841 18.3867 12.7042ZM7.3642 18.5915C9.07459 18.1819 9.95355 16.9646 10.1911 15.8878C10.5831 14.214 9.05084 12.5754 10.0842 9.93018C10.4762 12.1189 13.9682 13.4884 13.9682 15.8761C14.0632 18.8373 10.8087 21.3772 7.3642 18.5915Z" fill="#DCDCDC"/>
				</svg>
				{props.cnt}
			</div>
			<p>{props.des}</p>
		</div>)
		
		case "pop": return (<div className={`${styles.card} ${styles.pop}`}>
			<div className={styles.titleWrapper}>
				<div className={styles.iconWrapper}></div>
				<p>susname</p>
			</div>
			<div className={styles.popcnt}>
				<svg width="16" height="22" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M18.3867 12.7042C16.5219 7.9287 9.88228 7.6712 11.4858 0.730417C11.6046 0.215418 11.0463 -0.182536 10.5949 0.0866682C6.28333 2.59144 3.18323 7.61268 5.78446 14.1906C5.99826 14.729 5.35686 15.2323 4.89363 14.8812C2.74376 13.2777 2.51808 10.9719 2.70813 9.32154C2.77939 8.71291 1.9717 8.42029 1.62725 8.92359C0.819564 10.1409 0 12.1072 0 15.0685C0.451354 21.623 6.06953 23.6362 8.08874 23.8937C10.975 24.2565 14.0989 23.7298 16.3438 21.7049C18.8143 19.446 19.717 15.841 18.3867 12.7042ZM7.3642 18.5915C9.07459 18.1819 9.95355 16.9646 10.1911 15.8878C10.5831 14.214 9.05084 12.5754 10.0842 9.93018C10.4762 12.1189 13.9682 13.4884 13.9682 15.8761C14.0632 18.8373 10.8087 21.3772 7.3642 18.5915Z" fill="#DCDCDC"/>
				</svg>
				{props.cnt}
			</div>
			<p>{props.des}</p>
		</div>)

		
		default: return (<div className={`${styles.card}`}>
			<div className={styles.titleWrapper}>
				<div className={styles.iconWrapper}></div>
				<p>susname</p>
			</div>
			<div className={styles.popcnt}>
				<svg width="16" height="22" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M18.3867 12.7042C16.5219 7.9287 9.88228 7.6712 11.4858 0.730417C11.6046 0.215418 11.0463 -0.182536 10.5949 0.0866682C6.28333 2.59144 3.18323 7.61268 5.78446 14.1906C5.99826 14.729 5.35686 15.2323 4.89363 14.8812C2.74376 13.2777 2.51808 10.9719 2.70813 9.32154C2.77939 8.71291 1.9717 8.42029 1.62725 8.92359C0.819564 10.1409 0 12.1072 0 15.0685C0.451354 21.623 6.06953 23.6362 8.08874 23.8937C10.975 24.2565 14.0989 23.7298 16.3438 21.7049C18.8143 19.446 19.717 15.841 18.3867 12.7042ZM7.3642 18.5915C9.07459 18.1819 9.95355 16.9646 10.1911 15.8878C10.5831 14.214 9.05084 12.5754 10.0842 9.93018C10.4762 12.1189 13.9682 13.4884 13.9682 15.8761C14.0632 18.8373 10.8087 21.3772 7.3642 18.5915Z" fill="#DCDCDC"/>
				</svg>
				{props.cnt}
			</div>
			<p>{props.des}</p>
		</div>)
	}
	
}