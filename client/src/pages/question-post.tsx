import React from 'react';

const QuestionPost = () => {
	const subjects = [
		{
			key: 'math',
			text: 'Mathe'
		},
		{
			key: 'ger',
			text: 'Deutsch'
		},
		{
			key: 'en',
			text: 'Englisch'
		}
	];

	return (
		<div>
			<h2>Stelle eine Frage</h2>
			<form method="POST" action="/questions">
				<select name="subject" id="subject">
					{subjects.map((subject) => (
						<option key={subject.key} value={subject.key}>
							{subject.text}
						</option>
					))}
				</select>
				<select name="class" id="class">
					{Array.from(Array(12).keys()).map((i) => (i += 1)).map((i) => (
						<option key={i} value={i}>
							{i + '. Klasse'}
						</option>
					))}
				</select>
				<input type="text" placeholder="Titel deiner Frage eingeben*" />
				<textarea>Frage eingeben*</textarea>
				<textarea>Aufgabe eingeben*</textarea>
				<input type="file" />
			</form>
		</div>
	);
};

export default QuestionPost;
