import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

const features = [
  {
    title: 'Powered by ModernUO',
    imageUrl: 'img/muologo.svg',
    description: <>ModernUO is an Ultima Online Server Emulator for the modern era. Forked from RunUO and rebuilt using the .NET 5 Framework.</>,
  },
]

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <a href="https://modernuo.com/" target="_blank">
            <img className={styles.featureImage} src={imgUrl} alt={title} />
          </a>
        </div>
      )}
      <h3 className="text--center">{title}</h3>
      <p>{description}</p>
    </div>
  )
}

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  const logoUrl = useBaseUrl('img/logo.png')

  return (
    <Layout title={`${siteConfig.title}`} description="Ultima Online Zulu Hotel using ModernUO Engine">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <img src={logoUrl} className={styles.logo} />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link className={clsx('button button--outline button--primary-light button--lg', styles.getStarted)} to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row" style={{ justifyContent: 'center' }}>
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  )
}

export default Home
