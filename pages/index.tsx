import type { NextPage } from 'next';
import { Avatar, Header, P, Range, Title } from '../components';
import 'uimini';
import { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';

import MailIcon from '../assets/icons/mail.svg';
import PhoneIcon from '../assets/icons/phone.svg';

const Home: NextPage = () => {
	const [skillsCounter, setSkillsCounter] = useState(1);
	const [worksCounter, setWorksCounter] = useState(1);

	const componentRef = useRef();
	const handlePrintClick = useReactToPrint({
		content: () => componentRef.current,
	});

	return (
		<div className="ui-wrapper">
			<Header onClick={handlePrintClick} />
			<div className="ui-content-wrapper">
				<div className="global-wrapper">
					<div className="ui-container" ref={componentRef}>
						<div className="row">
							<div className="sidebar">
								<Avatar />
							</div>
							<div className="content">
								<P size="large" contentEditable suppressContentEditableWarning spellCheck={false}>
									Aleksey Sidorov
								</P>
								<P size="small" contentEditable suppressContentEditableWarning spellCheck={false}>
									Experienced Software & Machine Learning Engineer with a demonstrated history.
								</P>
							</div>
						</div>

						<div className="row">
							<div className="sidebar">
								<P size="medium">About me:</P>
								<P size="small" contentEditable suppressContentEditableWarning spellCheck={false}>
									Software Engineer
								</P>
								<P size="small" contentEditable suppressContentEditableWarning spellCheck={false}>
									Washington, DC
								</P>

								<P
									size="small"
									contentEditable
									suppressContentEditableWarning
									spellCheck={false}
									style={{ marginTop: '2rem' }}
								>
									<MailIcon style={{ marginRight: '0.6rem' }} />
									mail@gmail.com
								</P>
								<P size="small" contentEditable suppressContentEditableWarning spellCheck={false}>
									<PhoneIcon style={{ marginRight: '0.6rem' }} />
									+1 588-6500
								</P>
							</div>

							<div className="content">
								<P size="medium">Education:</P>
								<P size="small" contentEditable suppressContentEditableWarning spellCheck={false}>
									Stanford University - BS Electrical Engineering
								</P>

								<Title
									isUppercase
									isShowButton
									onClick={() => setWorksCounter(worksCounter + 1)}
									style={{ marginTop: '3.6rem' }}
								>
									Work experience:
								</Title>
								{new Array(worksCounter).fill(1).map((_, i) => (
									<P size="small" contentEditable suppressContentEditableWarning spellCheck={false} key={i}>
										{i + 1}. Solutions Architect, Stripe.
									</P>
								))}

								<Title
									isUppercase
									isShowButton
									onClick={() => setSkillsCounter(skillsCounter + 1)}
									style={{ marginTop: '3rem' }}
								>
									Skills:
								</Title>

								{new Array(skillsCounter).fill(1).map((_, i) => (
									<Range key={i} />
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
