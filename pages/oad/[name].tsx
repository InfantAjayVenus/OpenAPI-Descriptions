import ChevronRight from '@/public/chevron-right.svg';
import { getDefinitionsList } from "@/utils/getDefinitionsList";
import { GetStaticPropsContext } from "next";
import { Outfit } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const font = Outfit({ subsets: ['latin'] });

interface DefinitionProps { name: string }

export function getStaticPaths() {
    const filesList = getDefinitionsList();

    return {
        paths: filesList.map(name => ({ params: {name} })),
        fallback: true
    }
}

export const getStaticProps = ((context: GetStaticPropsContext) => {
    const {name} = context.params as {name: string};
    return {
        props: {
            name
        }
    };
}) 


export default function Definition({ name }: DefinitionProps) {
    return (
        <section className={`${font.className}`}>
            <header className="flex px-24 py-8">
                <h2 className="grow text-3xl capitalize">{name}</h2>
                <Link href="/" className="flex items-center">Go Back To List <Image src={ChevronRight} alt="arrow right" /> </Link>
            </header>
            <SwaggerUI url={`/OpenAPI-Descriptions/definitions/${name}.yml`} />
        </section>
    )
}