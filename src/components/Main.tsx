import { useEffect, useState } from "react";

type ImageProps = {
	src: string;
};

const Image: React.FC<ImageProps> = ({ src }) => {
	return (
		<figure>
			<img src={src} alt="" />
		</figure>
	);
};

const Loading: React.FC = () => {
	return <p>Loading...</p>;
};

type GalleryProps = {
	urls: string[] | null;
};

const Gallery: React.FC<GalleryProps> = ({ urls }) => {
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

export const Main: React.FC = () => {
	const [urls, setUrls] = useState<string[] | null>(null);

	useEffect(() => {
		const fetchImages = async (breed: string): Promise<string[]> => {
			const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/12`);
			const data = await response.json();
			return data.message;
		};

		fetchImages("shiba").then((urls) => {
			setUrls(urls);
		});
	}, []);

	return (
		<main>
			<section className="py-5">
				<div className="w-10/12 mx-auto">
					<Gallery urls={urls} />
				</div>
			</section>
		</main>
	);
};
