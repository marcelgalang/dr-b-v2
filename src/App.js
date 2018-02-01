import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor';
import Page from './components/page';
import Section from './components/Section';
import Header from './components/Header';
import Products from  './components/Products'

import CartContainer from './components/CartContainer'

import './styles/App.css';

const App = ({ products }) => (

    <div>
        <Header/>
        <Page>
            <ScrollableAnchor id={'top'}>
              <Section styles='hero'>
                <span><img src= {`${process.env.PUBLIC_URL}/imgs/logo-dr-b.png`}/></span>
                <h1>
                  <div>WE FIX JUST ABOUT EVERYTHING</div>
                  <span>MACS, PCS, TABLETS, CONSOLES, & SMART PHONES</span>
                </h1>
                  <div>
                    Aside from being gurus in the Mac department, we are experienced in repairing all sorts of issues in a wide range of electronic devices.
                  </div>
                  <div>
                      <h3><a href='#products'>Phone Services |</a>
                      <a href='#products'> Tablet Services |</a>
                      <a href='#products'> Mac Services</a></h3>
                  </div>

              </Section>
            </ScrollableAnchor>

            <ScrollableAnchor id={'products'}>
              <div>
                <Products products={products}/>
                <section><a href='#top'>^ Back to Top</a></section>
             </div>
            </ScrollableAnchor>

            <ScrollableAnchor id={'cart'}>
              <section>
                <CartContainer products={products}/>

                <a href='#top'>^ Back to Top</a>
             </section>
            </ScrollableAnchor>

            <p>Contact us here: repairs@drb.email.com</p>



            </Page>
          </div>
)

export default App
