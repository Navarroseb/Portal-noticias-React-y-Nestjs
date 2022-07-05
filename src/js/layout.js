import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import { Home } from "./component/home";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
/* import { Characters } from "./views/Characters";
import { Charactersdetails } from "./views/Charactersdetails";
import { Planets } from "./views/Planets";
import { Planetsdetails} from "./views/Planetsdetails"; */ 




const Layout = () => {
	

	return (
		<>
			<BrowserRouter>
				<Navbar />
					<Routes>
					<Route path="/" element={<Home />} />
						{/* <Route exact path="/Characters">
							<Characters />
						</Route>
						<Route exact path="/Charactersdetails/:id">
							<Charactersdetails />
						</Route>
						 <Route exact path="/Planets">
							<Planets />
						</Route>
						<Route exact path="/Planetsdetails/:id">
							<Planetsdetails />
						</Route> */}
					</Routes>
					<Footer />
			</BrowserRouter>
		</>
	);
};

export default Layout;
