export const Footer: React.FC = () => {
	return (
		<footer className="bg-slate-950 py-3">
			<div>
				<p className="text-slate-100 text-center">Dog images are retrieved from Dog API</p>
				<p className="text-center">
					<a className="text-cyan-500" href="https://dog.ceo/dog-api/about">
						Donate to Dog API
					</a>
				</p>
			</div>
		</footer>
	);
};
