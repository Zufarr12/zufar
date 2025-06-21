import './main.css'

function Main() {
    return (
        <div>
            <div className="container">
                <section>
                    <h3>Food up</h3>
                    <h1>Why stay hungry when <br />
                        you can order form Bella Onojie</h1>
                    <p>Download the bella onoje’s food app now on</p>
                    <div className="knp">
                        <button className='btn'>Playsotore</button>
                        <button className='btn'>Appstore</button>
                    </div>

                </section>

                <div className="ota">
                    <h1>How the app works</h1>

                    <div className="bola">
                        <img src="./phone.png" alt="" />
                        <div className="text">
                            <h4>Create an account</h4>
                            <h2>Create/login to an existing <br />
                                account to get started</h2>
                            <p>An account is created with your email <br />
                                and a desired password</p>
                        </div>
                    </div>
                    <div className="bola">
                        <div className="text">
                            <h4>Create an account</h4>
                            <h2>Create/login to an existing <br />
                                account to get started</h2>
                            <p>An account is created with your email <br />
                                and a desired password</p>
                        </div>
                        <img src="./phone.png" alt="" />
                    </div>
                    <div className="bola">
                        <img src="./phone.png" alt="" />
                        <div className="text">
                            <h4>Create an account</h4>
                            <h2>Create/login to an existing <br />
                                account to get started</h2>
                            <p>An account is created with your email <br />
                                and a desired password</p>
                        </div>
                    </div>
                </div>

                <section className='section2'>
                    <h1>Download the app now.</h1>
                    <p>Available on your favorite store. Start your premium experience now</p>
                     <div className="knp">
                        <button className='btn'>Playsotore</button>
                        <button className='btn'>Appstore</button>
                    </div>
                </section> 
            </div>
        </div>
    )
}

export default Main
