import { useEffect, useState } from "react";
import { fetchImages } from "./api";
import "tailwindcss/tailwind.css";

const Header = (): JSX.Element => {
	return (
		<header className="bg-slate-950">
			<div>
				<div>
					<h1 className="text-3xl text-slate-100">Cute Dog Images</h1>
				</div>
			</div>
		</header>
	);
};

interface ImageProps {
	src: string | undefined;
}

const Image = (props: ImageProps): JSX.Element => {
	return (
		<figure>
			<img src={props.src} alt="" />
		</figure>
	);
};

const Loading = (): JSX.Element => {
	return <p>Loading...</p>;
};

interface GalleryProps {
	urls: string[] | null;
}

const Gallery = (props: GalleryProps): JSX.Element => {
	const { urls } = props;
	if (urls == null) {
		return <Loading />;
	}
	return (
		<div className="grid grid-cols-3 gap-4">
			{urls.map((url) => {
				return (
					<div key={url}>
						<Image src={url} />
					</div>
				);
			})}
		</div>
	);
};

const Main = (): JSX.Element => {
	const [urls, setUrls] = useState<string[] | null>(null);

	useEffect(() => {
		fetchImages("shiba").then((urls) => {
			setUrls(urls);
		});
	}, []);

	return (
		<main>
			<section>
				<div className="w-10/12 mx-auto">
					<Gallery urls={urls} />
				</div>
			</section>
		</main>
	);
};

const Footer = (): JSX.Element => {
	return (
		<footer className="bg-slate-950">
			<div>
				<p className="text-slate-100">Dog images are retrieved from Dog API</p>
				<p>
					<a className="text-cyan-500" href="https://dog.ceo/dog-api/about">
						Donate to Dog API
					</a>
				</p>
			</div>
		</footer>
	);
};

const App = (): JSX.Element => {
	return (
		<>
			<Header />
			<Main />
			<Footer />
		</>
	);
};

export default App;
