import { useEffect, useState } from "react";
import { fetchImages } from "./api";

interface ImageProps {
	src: string;
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

export const Main = (): JSX.Element => {
	const [urls, setUrls] = useState<string[] | null>(null);

	useEffect(() => {
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
