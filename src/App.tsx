import "tailwindcss/tailwind.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

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
