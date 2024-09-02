import Layout from "@/components/layout";

export default function Home({children, metaTitle, metaDescription}) {
    return (
        <Layout metaTitle="Home" metaDescription="ini adalah halaman index">
            Index
            <Image
                src={profilePic}
                alt="Picture of the author"
                // width={500} otomatis di provide
                // height={500} otomatis di provide
                // blurDataURL="data:..." otomatis di provide
                // placeholder="blur" // opsi blur-up ketika load image
            />
        </Layout>
    )
};
