'use client';
import { useParams } from "next/navigation";
import Header from "./components/Header";
import Projects from "./components/Projects";
import { CategoryProjectsData } from "@/app/data/CategoryProjectsData";

export default function ProductPage() {
    const params = useParams();
    const title = params?.title as string;  // Assegure que 'id' é uma string
    const data = CategoryProjectsData;
    const category = data.find((category => category.title === title))
    const projects = category?.projects

    if (!category || !projects) {
        return (
            <>
                <Header />
                <p>Não essa categoria ou projeto nessa categoria</p>
            </>
        );
    } else {
        return (
            <>
                <Header />
                <Projects projects={projects} title={category.title} />
            </>
        );
    }
}
