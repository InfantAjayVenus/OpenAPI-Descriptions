import { getDefinitionsList } from "@/utils/getDefinitionsList";
import { GetStaticProps } from "next";
import { Outfit } from "next/font/google";
import Link from "next/link";

const font = Outfit({ subsets: ["latin"] });

interface HomeProps {
  definitionsList: string[],
}

export const getStaticProps = (() => {
  const filesList = getDefinitionsList();

  return {
    props: {
      definitionsList: filesList
    }
  }
}) satisfies GetStaticProps<HomeProps>;

export default function Home({ definitionsList }: HomeProps) {
  return (
    <main
      className={`p-24 ${font.className}`}
    >
      <header className="border-b-2 py-8">
        <h3 className="text-3xl mb-4">OpenAPI Definitions</h3>
        <p>Below is a list of OpenAPI definitions of third party APIs. These definitions were created by referring to the official API documentation.</p>
        <p><strong>Disclaimer:</strong><em> These definitions were written as part of a learning activity, so it is prone to have errors and is not intended to sync with the changes in the documentation. </em></p>
      </header>
      <section className="p-4">
        <ul>
          {definitionsList.map(fileItem => {
            const fileName = fileItem.split('.').slice(0, -1).join('.')
            return (
              <li>
                <Link className="capitalize" href={`oad/${fileName}`}>{fileName}</Link>
              </li>
            )
          })}
        </ul>
      </section>
    </main>
  );
}
