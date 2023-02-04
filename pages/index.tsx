import Head from 'next/head'
import { Inter } from '@next/font/google'
import { AppShell, Navbar, Text, useMantineColorScheme } from '@mantine/core'
import TitlePage from '@/components/title-page'
import CertificationExperinceRequirements from '@/components/preflight-preperation/certification-experience-requirements'
//import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { colorScheme } = useMantineColorScheme()

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppShell
        padding="md"
        navbar={
          <Navbar p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            <Text>Application navbar</Text>
          </Navbar>
        }
      >
        <article className={`prose prose-slate ${colorScheme === `dark` ? `dark:prose-invert` : ``}`}>
          <TitlePage />
          <section id="bodymatter">
            <section id="preflight-preperation">
              <CertificationExperinceRequirements />
            </section>
          </section>
        </article>
      </AppShell>
    </>
  )
}
