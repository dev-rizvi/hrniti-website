import ComparisonSinglePage, { generateMetadata as metadataGen } from "../compare/[slug]/page";

export async function generateMetadata() {
    return metadataGen({ params: Promise.resolve({ slug: "hrniti-vs-pagarbook" }) });
}

export default function Page() {
    return ComparisonSinglePage({ params: Promise.resolve({ slug: "hrniti-vs-pagarbook" }) });
}
