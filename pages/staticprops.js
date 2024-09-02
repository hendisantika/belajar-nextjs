export default function Page({repo}) {
    return <div>Page</div>
}

export async function getStaticProps() {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const repo = await res.json()
    return {props: {repo}}
}

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    name: 'next.js',
                },
            },
        ],
        fallback: false,
    }
}

export async function getServerSideProps() {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const repo = await res.json()
    return {props: {repo}}
}
