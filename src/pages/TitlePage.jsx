import React from 'react'
import Container from '../components/common/Container/Container'

function TitlePage({ title }) {
    return (
        <section>
            <Container className=''>

                <h3 className="py-5 text-3xl font-bold">
                    {title}
                </h3>
                <div className="border-b-4 border-black w-16"></div>

            </Container>
            <hr className="w-full" />
        </section>
    )
}

export default TitlePage