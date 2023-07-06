import { Header } from "@/components/common/header";
import { BestProject } from "@/components/pages/bestProject/bestProject";
import { Filter } from "@/components/pages/projectContainer/filter";
import { ProjectContainer } from "@/components/pages/projectContainer/projectContainer";
import { Title } from "@/components/pages/projectContainer/title";
import { StyledPage } from "@/styles/styledPage";
import Head from "next/head";
import { useState } from "react";

const ProjectsPage = () => {
	const [scopeFilter, setScopeFilter] = useState("");

	return (
		<StyledPage>
			<Head>
				<title>Rafael</title>
			</Head>

			<Header />
			<Title />
			<BestProject />
			<Filter props={{ scopeFilter, setScopeFilter }} />
			<ProjectContainer props={{ scopeFilter }} />
		</StyledPage>
	);
};

export default ProjectsPage;
