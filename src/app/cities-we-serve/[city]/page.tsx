import CityPage, { generateMetadata as baseGenerateMetadata, generateStaticParams as baseGenerateStaticParams } from "@/app/[city]/page";

export const generateStaticParams = baseGenerateStaticParams;
export const generateMetadata = baseGenerateMetadata;

export default CityPage;
