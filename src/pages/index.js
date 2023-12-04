import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Navbar from '../components/navbar'
import Landing from '../components/landing'
import Testimony from '../components/testimony'
import Feature from '../components/feature'
import ClosingStatement from '../components/closing-statement'
import Footer from '../components/footer'
import Head from '../components/head'

const landingProps = {
    title: 'Destinesia Studio, Shaping Your Digital Future with Innovation and Excellence',
    slides: [
        <StaticImage
            alt='Imagine Academy Demo 2'
            src='../images/website2.jpg'
        />,
        <StaticImage
            alt='Imagine Academy Demo 3'
            src='../images/website3.jpg'
        />,
        <StaticImage
            alt='Imagine Academy Demo 1'
            src='../images/website1.jpg'
        />,
        <StaticImage
            alt='Imagine Academy Demo 4'
            src='../images/website4.jpg'
        />
    ]
}

const testimonyProps = {
    leftHighlight: 'Our mission is to empower',
    leftText: ' businesses and individuals by providing cutting-edge digital solutions. We pledge to deliver exceptional websites, engaging video games, and advanced AI solutions, ensuring our clients are at the forefront of technological innovation. Our commitment is to exceed expectations with unrivaled quality, creativity, and dedication.',
    rightHighlight: 'Our team is a dynamic blend',
    rightText: ' of creative designers, tech-savvy developers, visionary AI experts, and innovative game developers. Each member brings their unique expertise and passion to the table, fueling the collaborative spirit that drives us forward. Exceptionally skilled and ceaselessly curious, our team is always on the hunt for the next big technological breakthrough.'
}

const feature1Props = {
    description: `
  Imagine Academy is a high school themed management simulation game.
  The game attempts to extensively mimic the difficulties of managing a high school and challenge the player to design and maintain it.
  With powerful artifical swarm mechanics under the hood, some insights into decision making of rule makers are experienced by the player.
  `,
    image: <StaticImage
        alt='Imagine Academy video game demo'
        src='../images/feature1.jpg'
    />
}

const feature2Props = {
    description: `
    Our company provides high-quality, realistic renders for various products, enhancing their visual representation for marketing or prototype testing purposes.
    This is the rendering for a unique Christmas tree set. The set includes a bespoke Christmas tree equipped with pre-packaged ornaments.
    A distinctive feature of the product is its foldable design, allowing it to be packed down into the compact size of a pizza box for effortless storage.
    Our rendering services will showcase your product's fine details, unique design accents, and the ease of its compact storage capability.
  `,
    image: <StaticImage
        alt='Bespoke Christmas tree render demo'
        src='../images/feature2.jpg'
    />
}

const feature3Props = {
    description: `
    Our unique arts service where individual photographs are transformed into stunning artworks.
    The company utilises a method known as "style transfer", leveraging robust AI pipelines to give impressive results.
    Through this service, any personal photo is given a creative overhaul, resulting in a one-of-a-kind art piece that retains the original image's essence, yet exudes an artistic flair.
    This service is perfect for those who want to see their favorite photos turned into personalized, spectacular pieces of art.
  `,
    image: <StaticImage
        alt='Style transfer AI pipeline demo'
        src='../images/feature3.jpg'
    />
}

const feature4Props = {
    description: `
    Tailor-made web applications to meet the unique needs and personal style of each individual artist and creator.
    We employ a talented team of developers and designers who are dedicated to ensuring that each web app not only showcases the artist's work brilliantly, but also enhances their online presence.
    With our service, artists and creators can have a highly customizable, user-friendly, and visually appealing web app, which they can use to exhibit their creations and connect with their audience effectively.
  `,
    image: <StaticImage
        alt='Tailor-made web application demo'
        src='../images/feature4.jpg'
    />
}

const closingStatementProps = {
    tagLine: 'Crafting Digital Wonders, Shaping Tomorrow\'s Technologies',
    title: 'Destinesia Studio provides end-to-end digital solutions, encompassing groundbreaking AI technologies and bespoke designs',
    description: 'Embrace the future with us. Let\'s transform your digital dreams into reality. Get in touch today!'
}

const IndexPage = () => {
    return (
        <>
            <Head />
            <Navbar />
            <main>
                <Landing {...landingProps} />
                <Testimony {...testimonyProps} />

                <Feature className='mt-24 py-24 md:px-10 max-w-screen-2xl mx-auto' {...feature1Props} />
                <Feature className='py-24 md:px-10 max-w-screen-2xl mx-auto' isInverted {...feature2Props} />
                <Feature className='py-24 md:px-10 max-w-screen-2xl mx-auto' {...feature3Props} />
                <Feature className='py-24 md:px-10 max-w-screen-2xl mx-auto' isInverted {...feature4Props} />

                <ClosingStatement {...closingStatementProps} />
                <Footer />
            </main>
        </>
    )
}

export default IndexPage